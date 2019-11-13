import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Dashboard() {

    return (
        <>

            <ul className="instruc">
                <li >
                    <p className="instruc">
                        <strong>Regras e noções preliminares</strong>
                    </p>
                </li>
            </ul>
            <ul className="desc">
               <p>
                O xadrez é um esporte intelectual, uma luta de gênios, de persistência que se desenvolve sobre um tabuleiro. Os elementos utilizados são: o tabuleiro (com 64 casas; 32 brancas e 32 negras), o relógio (obrigatório em torneios oficiais) e as peças (16 brancas e 16 negras), através das quais a habilidade, o poder de concentração, a capacidade de antecipação, a experiência, as manobras táticas, a estratégia, a paciência, e sobretudo a tranqüilidade influirão no resultado da partida.
                <p></p>
                As peças estão divididas em brancas e pretas, iguais em número e força, que se movimentam segundo as convenções do jogo. O objetivo dos movimentos que se chamam jogadas, é levar o Rei adversário a uma posição que se chama “xeque mate”, e ganha o jogo àquele que conseguir colocar o Rei do adversário nesta posição critica primeiro.
                <p></p>
                O xadrez é igual a toda arte e toda ciência, só se desenvolve com a prática e com o estudo.
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