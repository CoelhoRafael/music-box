import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";


function Musicas() {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">



                    <ItemMusica 
                        musica="Sharp edges"
                        artista="Linkin Park"
                        genero="Rock"
                        ano={2000}
                        id="1"
                    />

                    <ItemMusica 
                        musica="Cheia de manias"
                        artista="Raça Negra"
                        genero="As melhores"
                        ano={1997}
                        id="2"
                    />
                   

                </div>
            </div>
        </>
    );
}

export default Musicas;