import "./Formulario.css"

const Formulario = ({handleSubmit, setNome, nome, 
  setIdade, idade, setCpf, cpf, setRg, rg, setEmail, email, setSexo, sexo 
  }) => {
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
                  <input type="number" value={idade} name="idade" placeholder='Digite a sua idade'
                  onChange={(e) => setIdade(e.target.value)} />
                </label>
                </div>
                <div>
                  <label >
                  <span>CPF:</span>
                  <input type="number" value={cpf} name="cpf" placeholder='Digite o seu CPF'
                  onChange={(e) => setCpf(e.target.value)} />
                </label>
                <label >
                  <span>RG:</span>
                  <input type="number" value={rg} name="rg" placeholder='Digite o seu RG'
                  onChange={(e) => setRg(e.target.value)}/>
                </label>
                </div>
                <div>
                  <label >
                    <span>Email:</span>
                    <input type="email" value={email} name="email" placeholder='Digite o seu email'
                    onChange={(e) => setEmail(e.target.value)} />
                  </label >
                </div>
                
              </div>
            <div className="input_radio">
              <span>Sexo:</span>
              <label>
                <input type="radio" name="sexo" value="Masculino" onChange={(e)=>setSexo(e.target.value)}
                  checked={sexo=== "Masculino"}/>
                <span>Masculino</span>
              </label>
              <label>
                <input type="radio" name="sexo" value="Feminino" onChange={(e) => setSexo(e.target.value)}/>
                <span>Feminino</span>
              </label>
              <label>
                <input type="radio" name="sexo" value="Outros" onChange={(e) => setSexo(e.target.value)}/>
                <span>Outros</span>
              </label> 
              
            </div>  
              </div>
            <input type="submit" value="Cadastrar" className='input_submit' />
        </form>
      </div>
    </div>
  )
}

export default Formulario;