import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Board from './board.js';
import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from './helpers/board-initialiser.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      whiteFallenSoldiers: [],
      blackFallenSoldiers: [],
      player: 1,
      sourceSelection: -1,
      status: '',
      turn: 'white'
    }
  }
 
  handleClick(i){
    const squares = this.state.squares.slice();
    
    if(this.state.sourceSelection === -1){
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Jogada inválida. Escolha as peças do jogador " + this.state.player});
        if (squares[i]) {
          squares[i].style = {...squares[i].style, backgroundColor: ""};
        }
      }
      else{
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"}; 
        this.setState({
          status: "Escolha uma jogada para a peça",
          sourceSelection: i
        });
      }
    }

    else if(this.state.sourceSelection > -1){
      squares[this.state.sourceSelection].style = {...squares[this.state.sourceSelection].style, backgroundColor: ""};
      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "Jogada inválida. Escolha uma jogada válida e tente de novo",
          sourceSelection: -1,
        });
      }
      else{
        
        const squares = this.state.squares.slice();
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
        const isDestEnemyOccupied = squares[i]? true : false; 
        const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);

        if(isMovePossible && isMoveLegal){
          if(squares[i] !== null){
            if(squares[i].player === 1){
              whiteFallenSoldiers.push(squares[i]);
            }
            else{
              blackFallenSoldiers.push(squares[i]);
            }
          }
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          let player = this.state.player === 1? 2: 1;
          let turn = this.state.turn === 'white'? 'black' : 'white';
          this.setState({
            sourceSelection: -1,
            squares: squares,
            whiteFallenSoldiers: whiteFallenSoldiers,
            blackFallenSoldiers: blackFallenSoldiers,
            player: player,
            status: '',
            turn: turn
          });
        }
        else{
          this.setState({
            status: "Jogada inválida. Escolha uma jogada válida e tente de novo",
            sourceSelection: -1,
          });
        }
      }
    }

  }

  isMoveLegal(srcToDestPath){
    let isLegal = true;
    for(let i = 0; i < srcToDestPath.length; i++){
      if(this.state.squares[srcToDestPath[i]] !== null){
        isLegal = false;
      }
    }
    return isLegal;
  }

  restartGame(event) {
    window.location.reload();
  }

  render() {

    return (
      <div>
        <div className="game-status">{this.state.status}</div>
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
        </div>
        <div className="game-info">
            <h3>Turno</h3>
            <div id="player-turn-box" style={{backgroundColor: this.state.turn}}>
  
            </div>
            

            <div className="fallen-soldier-block">
              
              {<FallenSoldierBlock
                whiteFallenSoldiers = {this.state.whiteFallenSoldiers}
                blackFallenSoldiers = {this.state.blackFallenSoldiers}
              />
              }
            </div>
            
          </div>
          <div className="div-btn-game">
            <button type="button" onClick={ this.restartGame.bind(this) } className="btn-game">Novo Jogo</button>
            <Link to="/">
              <button className="btn-game">Retornar ao Menu</button>
            </Link>
          </div>
      </div>

     
      );
  }
}
