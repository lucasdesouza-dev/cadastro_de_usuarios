// CSS
import "./Usuarios.css"

//React Icons
import {  RiShieldUserFill } from "react-icons/ri";
//Hooks
import { ReactComponent as IconeLixo } from "../img/lixo.svg";





const Usuarios = ({  users, handleRemove}) => {

  
  return (
    
      <div className="container_usuario">
        <ul className="usuario">
          {users && users.map((usuario) => (
            <li key={usuario.id} className=" card">
              <i className='icon_Delete' onClick={() => handleRemove(usuario.id)}><IconeLixo className="icon_lixo"/></i>
              <i className='iconUser'><RiShieldUserFill /></i>
              {/* <img src={usuario.urlIcon} alt="icon usuario" /> */}
              <span>Nome: {usuario.nome}</span>
              <span>Idade: {usuario.idade}</span>
              <span>CPF: {usuario.cpf}</span>
              <span>RG: {usuario.rg}</span>
              <span>Email: {usuario.email}</span>
              <span>Sexo: {usuario.sexo}</span>
            </li>
          ))}
        </ul>
      </div>
    
  )
}

export default Usuarios;