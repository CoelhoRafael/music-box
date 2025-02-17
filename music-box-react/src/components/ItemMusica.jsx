import React from "react";

import editIcon from '../html-css-template/imagens/edit-icon.png';
import deleteIcon from '../html-css-template/imagens/delete-icon.png';

import capaPadrao from '../html-css-template/imagens/capa.png';

function ItemMusica(props) {

    const imagemFundo = {
        backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})`
    }

    return (
        <>
            <div className="card-music" style={imagemFundo}>
                <div className="icons">
                    <img src={editIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.musica} />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.artista} />
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.genero} />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.id} />
                    </p>
                    <button className="btn-salvar-disabled">Salvar</button>
                </div>
            </div>
        </>
    );
}

export default ItemMusica;