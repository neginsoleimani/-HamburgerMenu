import React from 'react';
import styled from 'styled-components';
import "bootstrap-icons/font/bootstrap-icons.css";

const UL=styled.ul`
direction:rtl;
font-family:"B Yekan";
list-style:none;
display:flex;
justify-content:right;
background-color:#fafafa;
z-index:15;
li{
    color:#000;
    padding: 13px 14px 13px 14px;
    cursor:pointer;
&:hover{
    color:#6937cd;
}
}

 @media (max-width: 768px){
     margin:0;
     flex-direction:column;
     background-color:#fafafa;
     position:fixed;
     top:0;
     right:0;
     height:100vh;
     width:300px;
     padding-right:0;
     padding-top:5rem;
     transform:${props=>props.open ? 'translateX(0)': 'translate(100%)'}
 }

`


const Navbar = ({open}) => {
    return (
            <UL open={open}>
                <li><i class="bi bi-list" style={{color:"#7B68EE"}}></i> دسته بندی کالا ها</li>
                <li><i className="bi bi-tags-fill" style={{color:"#7B68EE"}}></i> تخفیف ها و پیشنهادات</li>
                <li><i className="bi bi-question-circle-fill" style={{color:"#7B68EE"}}></i> سوالات متداول</li>
                <li><i class="bi bi-people-fill" style={{color:"#7B68EE"}}></i> ارتباط با ما</li>
            </UL>
    );
};

export default Navbar;