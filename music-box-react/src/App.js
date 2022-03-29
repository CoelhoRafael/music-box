import React, { useState } from "react";
import api from "./api";
import Votacao from "./pages/Votacao";

function App() {
  const [musica, setMusica] = useState([]);

  function listar(){
    api.get().then(res => {
      console.log(res.data);
      setMusica(res.data);
    })
    .catch(err => console.log(err));
  }
  return (
    <>
    <Votacoes/>
    </>
  );
}

export default App;
