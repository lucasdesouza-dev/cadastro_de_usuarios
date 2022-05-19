import "./Formulario.css"
import InputRadio from "./InputRadio"

const Formulario = ({ handleSubmit, setNome, nome,
  setIdade, idade, setCpf, cpf, setRg, rg, setEmail, email, setDataInput, dataInput,
  setSexo, sexo, setCidade, cidade, setCep, cep, setBairro, bairro, setRua, rua,
  setNumero, numero, setComplemento, complemento, setJob, job
}) => {
  //verificao cep
  // const manipuladorCep = (e) => {
  //   let numeroCep = e.target.value
  //   if(numeroCep.length > 10) return
  //   if (numeroCep.length === 8) {
  //     numeroCep = [numeroCep.slice(0,2), ".", numeroCep.slice(2, 5), "-", numeroCep.slice(-3)].join("")
  //   }

  //   setCep(numeroCep)
  // }


  return (
    <div>
      <div className='add_usuario'>
        <form onSubmit={handleSubmit}>
          <div className="informacoes_iniciais">
            <div className="input_text">
              <div>
                <label >
                  <span>Nome:</span>
                  <input type="text" value={nome} name="nome" placeholder='Digite seu nome'
                    onChange={(e) => setNome(e.target.value)} />
                </label>
                <label >
                  <span>Idade:</span>
                  <input type="number" value={idade} name="idade" placeholder='Digite a sua idade' min={0} max={120}
                    onChange={(e) => setIdade(e.target.value)} />
                </label>
              </div>
              <div>
                <label >
                  <span>CPF:</span>
                  <input type="number" value={cpf} name="cpf" maxLength={11} placeholder='Digite o seu CPF'
                    onChange={(e) => setCpf(e.target.value)} />
                </label>
                <label >
                  <span>RG:</span>
                  <input type="number" value={rg} name="rg" placeholder='Digite o seu RG'
                    onChange={(e) => setRg(e.target.value)} />
                </label>


              </div>
              <div>
                <label >
                  <span>Email:</span>
                  <input type="email" value={email} name="email" placeholder='Digite o seu email'
                    onChange={(e) => setEmail(e.target.value)} />
                </label >
                <label >
                  <span>JOB:</span>
                  <input type="text" value={job} name="job" placeholder='Digite o seu Trabalho'
                    onChange={(e) => setJob(e.target.value)} />
                </label>
              </div>
              <label >
                <span>Nascimento:</span>
                <input type="date" value={dataInput} name="date"
                  onChange={(e) => setDataInput(e.target.value)} />
              </label>


            </div>
            <div className="input_radio">
              <span>Sexo:</span>
              <label>
                <input type="radio" name="sexo" value="Masculino" onChange={(e) => setSexo(e.target.value)}
                  checked={sexo === "Masculino"} />
                <span>Masculino</span>
              </label>
              <label>
                <input type="radio" name="sexo" value="Feminino" onChange={(e) => setSexo(e.target.value)} />
                <span>Feminino</span>
              </label>
              <label>
                <input type="radio" name="sexo" value="Outros" onChange={(e) => setSexo(e.target.value)} />
                <span>Outros</span>
              </label>
            </div>
          </div>
          <h1>Endereço</h1>
          <div className="endereco">
            <label >
              <span>CEP:</span>
              <input type="text" value={cep} name="cep" placeholder='Digite o seu CEP'
                onChange={(e) => setCep(e.target.value)} />
            </label>
            <label>
              <span>Estado:</span>
              <InputRadio />
            </label>


            <label >
              <span>Cidade:</span>
              <input type="text" value={cidade} name="cidade" placeholder='Digite sua cidade'
                onChange={(e) => setCidade(e.target.value)} />
            </label>

            <label >
              <span>Bairro:</span>
              <input type="text" value={bairro} name="bairro" placeholder='Digite seu bairro'
                onChange={(e) => setBairro(e.target.value)} />
            </label>
            <label >
              <span>Rua:</span>
              <input type="text" value={rua} name="rua" placeholder='Digite sua rua'
                onChange={(e) => setRua(e.target.value)} />
            </label>
            <label>
              <span>Numero:</span>
              <input type="number" value={numero} name="numero" placeholder='Numero'
                onChange={(e) => setNumero(e.target.value)} />
            </label>
            <label >
              <span>Complemento:</span>
              <input type="text" value={complemento} name="complemento" placeholder='Complemento'
                onChange={(e) => setComplemento(e.target.value)} />
            </label>

          </div>


          <input type="submit" value="Cadastrar" className='input_submit' />
        </form>
      </div>
    </div>
  )
}

export default Formulario;