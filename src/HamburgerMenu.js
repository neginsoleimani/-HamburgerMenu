import React, { Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { faFontAwesomeLogoFull } from '@fortawesome/free-regular-svg-icons';
const DIV=styled.div`
width:2rem;
height:2rem;
position:fixed;
top:20px;
right:10px;
z-index:20;
display:none;
cursor:pointer;

div{
    width:2rem;
    height:0.25rem;
    background-color:${props=>props.open ? '#4c2698' : '#7B68EE'};
    border-radius:10px;
    transform-origin:1px;
    transition: all .3s linear;
    &:nth-child(1){
        transform:${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')}
    }
    &:nth-child(2){
        transform:${(props) => (props.open ? 'translateX(-100%)' : 'translateX(0)')};
        opacity:${(props)=>(props.open ? 0 : 1)}
    }
    &:nth-child(3){
        transform:${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')}
    }
}

@media (max-width:768px){
    display:flex;
    justify-content:space-around;
    flex-direction:column;
}
`
class HamburgerMenu extends Component {
    constructor(){
        super();
        this.state={
            open:false
        };
    }

    ClickHandler =()=>{
        this.setState({open : !this.state.open})
        };
    

    render() {
        return (
            <>
            <DIV open={this.state.open} onClick={this.ClickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </DIV>
            <Navbar open={this.state.open}/>
            </>
        );
    }
}
export default HamburgerMenu;