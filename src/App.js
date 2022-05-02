//CSS
import './App.css';
//comonents
import Usuarios from "./components/Usuarios"

//Hooks
import {useState, useEffect} from 'react'

import {useFetch} from "./hooks/useFetch"
import Formulario from './components/Formulario';

function App() {
  //controle de dados
  //const [usuarios, setUsuarios] = useState([])
  //const [urlIcon, setUrlIcon] = useState("https://cdn-icons-png.flaticon.com/512/17/17004.png")
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [email, setEmail] = useState("")
  const [sexo, setSexo]= useState("Masculino")
 

  

  //url da api
  const url = "http://localhost:3000/usuarios";
//buscando dados da api

  const {data:users, httpConfig} = useFetch(url)
  
  

  //funcoes
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const usuario={
      //urlIcon,
      nome,
      idade,
      cpf,
      rg,
      email,
      sexo,
    };
  
    // hook para requisicao api
    httpConfig(usuario,"POST")
    
    setNome("");
    setIdade("");
    setCpf("");
    setRg("");
    setEmail("");

    
  };

  const handleRemove =(id) => {
    httpConfig(id,"DELETE")
  }


  return (
  
    <div className="App">
      <h1>Cadastro de Usuarios</h1>

      <Formulario 
        handleSubmit={handleSubmit} 
        setNome={setNome} nome={nome}
        setIdade={setIdade} idade={idade}
        setCpf={setCpf} cpf={cpf}
        setRg={setRg} rg={rg}
        setEmail={setEmail} email={email}
        setSexo={setSexo} sexo={sexo}
      />

      <Usuarios users={users} handleRemove={handleRemove}  />
      
      
</div>
  );
}

export default App;
