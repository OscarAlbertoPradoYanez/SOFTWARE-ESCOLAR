import {useState} from "react"
import "../styles/Login.css";
import { api } from "../api.js";

export function Login({alLoguear}) {

    const[email,setEmail]= useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = async(e)   => {
        e.preventDefault();

        const {data,error} = await api.auth.signInWithPassword({
          email,password,
        });
        if (error){
          alert("tas bien menso" + error.message); 
        }
        else {
          alLoguear(data.user);
        }

    };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Web Escolar</h2>
        <p className="subtitle">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit} noValidate>

            <div className="input-group">
                <label> Corre Electroinco</label>
                <input 
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="input-group">
                <label> Contraseña</label>
                <input 
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            
          <button type="submit" className="btn-login">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

 