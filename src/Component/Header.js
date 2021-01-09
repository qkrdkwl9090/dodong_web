import React from 'react';
import '../Scss/Header.scss';

function Header(){
    return (
        <header>
            <a><div className = "title">DoDong</div></a>
            <div className = "menu">                
                <a><div>Intro</div></a>
                <a><div>Skill</div></a>     
            </div>
        </header>

    )
}
export default Header;