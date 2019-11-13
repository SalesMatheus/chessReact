import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Dashboard() {

    return (
        <>

            <ul className="instruc">
                <li >
                    <p className="instruc">
                        <strong>Sobre a historia do desenvolvimento do jogo</strong>
                    </p>
                </li>
            </ul>
            <ul className="desc">
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
            </ul>
            <div className="div-btn">
                <Link to="/">
                    <button className="btn">Retornar ao Menu</button>
                </Link>
            </div>
        </>
    )
}