//CSS
import './App.css';
//comonents
import Usuarios from "./components/Usuarios"

//Hooks
import {useState, useEffect} from 'react'

import {useFetch} from "./hooks/useFetch"

function App() {
  //controle de dados
  const [usuarios, setUsuarios] = useState([])
  const [urlIcon, setUrlIcon] = useState("https://cdn-icons-png.flaticon.com/512/17/17004.png")
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [email, setEmail] = useState("")

  

  //url da api
  const url = "http://localhost:3000/usuarios";
//buscando dados da api

  const {data:users, httpConfig} = useFetch(url)
  
  

  //funcoes
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const usuario={
      urlIcon,
      nome,
      idade,
      cpf,
      rg,
      email,
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
      <div className='add_usuario'>
        <form onSubmit={handleSubmit}>
          <label >
            <span>Nome:</span>
            <input type="text" value={nome} name="nome" placeholder='Digite seu nome'
            onChange={(e)=> setNome(e.target.value)} />
          </label>
          <label >
            <span>Idade:</span>
            <input type="number" value={idade} name="idade" placeholder='Digite a sua idade'
            onChange={(e)=> setIdade(e.target.value)} />
          </label>
          <label >
            <span>CPF:</span>
            <input type="number" value={cpf} name="cpf" placeholder='Digite o seu CPF'
            onChange={(e)=> setCpf(e.target.value)} 
            />
          </label>
          <label >
            <span>RG:</span>
            <input type="number" value={rg} name="rg" placeholder='Digite o seu RG' 
            onChange={(e)=> setRg(e.target.value)} 
            />
          </label>
          <label >
            <span>Email:</span>
            <input type="email" value={email} name="email" placeholder='Digite o seu email'
            onChange={(e)=> setEmail(e.target.value)} 
            />
          </label >
          <input type="submit" value="Cadastrar" className='input_submit'/>
        </form>
    </div>

      <Usuarios users={users} handleRemove={handleRemove}  />
</div>
  );
}

export default App;
