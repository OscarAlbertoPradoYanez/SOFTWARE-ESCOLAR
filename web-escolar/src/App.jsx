import { useState, useEffect } from 'react'
import { api } from './api' // Un punto porque api.js está en src
import { Login } from "./components/Login" // Un punto porque components está en src

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Obtenemos sesión inicial
    api.auth.getSession().then(({ data: { session } }) => {
      setUsuario(session?.user ?? null);
    });

    // Escuchamos cambios
    const { data: { subscription } } = api.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!usuario) return <Login alLoguear={setUsuario} />;

  return (
    <div>
      <h1>Bienvenido a Web Escolar</h1>
      <button onClick={() => api.auth.signOut()}>Cerrar Sesión</button>
    </div>
  );
}

export default App;