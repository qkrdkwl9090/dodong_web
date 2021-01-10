import React from 'react';
import '../Scss/Home.scss';
import Logo from '../images/interface-3614766.svg';
import Front from '../images/front.svg';
import Back from '../images/back.svg';
import Kit from '../images/kit.svg';
import Phone from '../images/phone.svg';

function Home(){
    return (
        <div className="content">
            <section className="logo">
                <div className="text">
                    <h3>안녕하세요</h3>프론트엔드 개발자 박동현입니다.<br></br>항상 새로운 기술에 적극적으로 도전합니다.
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
        </div>
    )
}
export default Home;