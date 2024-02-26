import './App.css';
import { MyRoutes } from './router/MyRoutes';

function App() {
  //Cargamos nuestro router y lo exportamos con la funcion app y un container
  return (
    <div className='layout'>
      <MyRoutes/>
    </div>
  );
}

export default App;
