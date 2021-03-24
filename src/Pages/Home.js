import React from 'react';
import '../Scss/Home.scss';
import Logo from '../images/interface-3614766.svg';
import Front from '../images/front.svg';
import Back from '../images/back.svg';
import Kit from '../images/kit.svg';
import Phone from '../images/phone.svg';
import pot2 from '../images/pot2.JPG';
import pot1 from '../images/pot1.JPG';

function Home(){
    return (
        <div className="content">
            <section className="logo">
                <div className="text">
                    
                </div>                
                <img className="homeLogo" src={Logo}/>
            </section>
            <section className="simpleSkill">
                <h1>Skill</h1>
                <div>웹 개발 파트별 간략한 기술 스택입니다<br></br>자세한 내용은 Intro 페이지에서 확인하실 수 있습니다.</div>
                <div className="skillInfo">
                    <div className="skill">
                        <img src={Front}/>                        
                        <p>Front</p>
                        <div className="skillKind">Html, Css, Javascript,<br></br>Flutter, Angular, React</div>
                    </div>
                    <div className="skill">
                        <img src={Back}/>
                        <p>Back</p>
                        <div className="skillKind">Java, SpringBoot, SQL</div>
                    </div>  
                    <div className="skill">
                        <img src={Phone}/>
                        <p>Mobile</p>
                        <div className="skillKind">Flutter, Kotlin</div>
                    </div>
                    <div className="skill">
                        <img src={Kit}/>
                        <p>Dev.etc</p>
                        <div className="skillKind">서버 구축, Git 관리<br></br>Eclipse, VScode, AndroidStudio</div>
                    </div>

                </div>

            </section>
            <section className="potContent">
                <h1>Portfolio</h1>
                <div className="potInfo">
                    <div className="potCard">
                        <a href="http://dodong.blog:8081" target="_blank">
                            <div className="center">
                            <img src={pot2} alt="pot2"></img></div>
                        </a>
                    </div>                     
                    <div className="potCard">
                        <a href="http://dodong.blog:8080" target="_blank">
                            <div className="center">
                            <img src={pot1} alt="pot1"></img></div>
                        </a>
                        
                        <div className="tag">개발중</div>
                    </div>       

                </div>           
            </section>
        </div>
    )
}
export default Home;