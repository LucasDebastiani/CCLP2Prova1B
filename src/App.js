import { useDispatch, useSelector } from 'react-redux'; 
import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useState } from "react";
import listaProdutos from './dados/listaProdutos'; 
import { setUsuario } from './redux/usuarioRedux'; 
import UsuarioForm from './componentes/usuarioForm'; 

function App() {
  const dispatch = useDispatch(); 
  const [produtos] = useState(listaProdutos); 

  
  const usuario = useSelector((state) => state.usuario.usuario);

  
  const handleFormSubmit = (dadosUsuario) => {
    dispatch(setUsuario(dadosUsuario)); 
  };

  return (
    <div className="App">
      <Cabecalho />
      {usuario ? (
        
        <div>
          <BarraBusca />
          <GradeProdutos listaProdutos={produtos} />
        </div>
      ) : (
        
        <UsuarioForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
