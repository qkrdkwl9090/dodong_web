import React from 'react';
import '../Scss/Header.scss';

function Header(){
    return (
        <header>
            <div className="headerContent">
                <a href="/"><div className = "title">DoDong</div></a>
                <div className = "menu">                
                    <a href="/Intro"><div>Intro</div></a>                    
                    <a href="https://github.com/qkrdkwl9090"><div>Git</div></a>                  
                    <a href="https://blog.naver.com/qkrdkwl9090"><div>Blog</div></a>    
                </div>

            </div>
        </header>

    )
}
export default Header;