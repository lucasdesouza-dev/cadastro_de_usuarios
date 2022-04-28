import {useState, useEffect} from "react";

// buscando dados da api 

export const useFetch = (url)=> {
  //setando dados
  const [data, setData] = useState(null);

  //set dados POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //set "DELET"
  const [itemId, setItemId] = useState(null)

  // Funcoes

  const httpConfig = (data ,method) => {
    if(method === "POST"){

    setConfig({
      method,
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    setMethod(method)

    }else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        }
      });
      setMethod(method)
      setItemId(data)
  }
}

  //funcao de Get
  useEffect(() => {
    
    const fetchData = async ()=>{
      const res = await fetch(url);

      const json = await res.json();

      setData(json);

    };

    fetchData();

  }, [url,callFetch]);

  //enviando dados "Post"
  useEffect(() => {
    
    const httpRequest = async ( ) =>{
      let json
      if(method === "POST"){
      
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json()
        
        

      } else if (method === "DELETE") {

        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        json = await res.json()

      }
      setCallFetch(json);
    };

    httpRequest();

  }, [config,method,url]);
  
  
  return {data,httpConfig};

}