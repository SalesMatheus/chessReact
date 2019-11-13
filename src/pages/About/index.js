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
                A ideia para o desenvolvimento do jogo teve como origem a disciplina de Desenvolvimento Web, presente no 5º semestre do curso de Ciências da Computação do Centro Universitário de Brasília (UniCEUB) no segundo semestre de 2019 com o intuito de implementar os conceitos ensinados em sala de aula.  A escolha de criar um xadrez online aonde duas pessoas pudessem jogar, uma contra a outra veio da admiração pela complexidade do famoso jogo.
	            </p>
                <p></p>
                <p>
                Durante o desenvolvimento do jogo, o grupo percebeu a dificuldade em implementar as regras do xadrez, bem como as diversas opções de movimentação para cada peça. Isso exigiu um estudo mais detalhado sobre as técnicas de programação e sobre as particularidades do xadrez.
	            </p>
                <p></p>
                <p>
                O projeto foi desenvolvido pelos integrantes: Matheus Sales – matrícula 21804995; Alexsander Montenegro – matrícula 21603773 e Diego Rozsanyi – matrícula 21352319.
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
