//CSS
import './App.css';
//comonents
import Usuarios from "./components/Usuarios"

//Hooks
import { useState, useEffect } from 'react'

import { useFetch } from "./hooks/useFetch"
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
  const [sexo, setSexo] = useState("Masculino")
  const [dataInput, setDataInput] = useState("")
  const [job, setJob] = useState("")


  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")

  console.log(dataInput)
  //corverter data para br
  const [dataNascimento, setDataNascimento] = useState("")
  useEffect(() => {
    //funcao de formatacao de data 

    const dataFormatada = () => {

      let data = dataInput.split('-').reverse().join("/")
      setDataNascimento(data)
    }

    dataFormatada()
  }, [dataInput])



  //url da api
  const url = "http://localhost:3000/usuarios";
  //buscando dados da api

  const { data: users, httpConfig } = useFetch(url)



  //funcoes
  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      //urlIcon,
      nome,
      idade,
      cpf,
      rg,
      email,
      sexo,

    };

    // hook para requisicao api
    httpConfig(usuario, "POST")

    setNome("");
    setIdade("");
    setCpf("");
    setRg("");
    setEmail("");


  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }


  return (

    <div className="App">
      <h1>Cadastro de Funcionarios</h1>

      <Formulario
        handleSubmit={handleSubmit}
        setNome={setNome} nome={nome}
        setIdade={setIdade} idade={idade}
        setCpf={setCpf} cpf={cpf}
        setRg={setRg} rg={rg}
        setEmail={setEmail} email={email}
        setSexo={setSexo} sexo={sexo}
        setDataInput={setDataInput} dataInput={dataInput}
        setCep={setCep} cep={cep}
        setEstado={setEstado} estado={estado}
        setCidade={setCidade} cidade={cidade}
        setBairro={setBairro} bairro={bairro}
        setRua={setRua} rua={rua}
        setNumero={setNumero} numero={numero}
        setComplemento={setComplemento} complemento={complemento}
        setJob={setJob} job={job}
      />

      <Usuarios users={users} handleRemove={handleRemove} />


    </div>
  );
}

export default App;
