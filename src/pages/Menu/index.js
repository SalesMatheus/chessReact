import React from 'react';

import './style.css';

export default class MenuContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: '',
            activeItemPosition: 0,
            activeItemColor: '',
            menuItems: [
                { text: 'Home' },
                { text: 'Instructions' },
                { text: 'Play' },
                { text: 'About' },
                { text: 'Source Code' },
            ],
        }

        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(activeItem) {
        return e => {
            e.preventDefault()

            this.setState({
                activeItem,
                activeItemPosition: document.getElementById(activeItem).offsetTop,
                activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
            })

        }
    }
    
    render() {
        const menuItems = this.state.menuItems.map(item => <MenuItem item={item} handleClick={this.handleClick} />)
        const pages = this.state.activeItem;
        
        switch(pages){
            case "Home":
                break;
            case "Instructions":
                this.props.history.push('/instructions');                 
                break;
            case "Play":
                this.props.history.push('/game');  
                break;
            case "About":
                    this.props.history.push('/about');
                break;
            case "Source Code":
                    window.location.href="https://github.com/SalesMatheus/chessReact";
                break;
            default:
                break;
        }

        return (
            <div className="container">
                <div className="content">
                    <div className='menu-container'>
                        <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }} />
                        {menuItems}
                    </div>
                </div>
            </div>
        )
    }
}


function MenuItem(props) {
    return (
        <div
            className='menu-item'
            id={props.item.text}
            onClick={props.handleClick(props.item.text)}
        >
            {props.item.text.toUpperCase()}
        </div>
    )
}
