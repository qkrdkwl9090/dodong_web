import React from 'react';
import '../Scss/Home.scss';
import Logo from '../images/interface-3614766.svg';
import Front from '../images/front.svg';
import Back from '../images/back.svg';
import Kit from '../images/kit.svg';

function Home(){
    return (
        <div className="content">
            <section className="logo">
                <div className="text">
                    <b>안녕하세요</b><br></br>프론트엔드 개발자 박동현입니다.<br></br>항상 새로운 기술에 적극적으로 도전합니다.
                </div>                
                <img src={Logo}/>
            </section>
            <section className="simpleSkill">
                <h1>Skill</h1>
                <div>웹 개발 파트별 간략한 기술 스택입니다<br></br>자세한 내용은 Intro 페이지에서 확인하실 수 있습니다.</div>
                <div className="skillInfo">
                    <div className="skill">
                        <img src={Front}/>                        
                        <p>Front</p>
                        <div className="skillKind">Html, Css, Javascript,<br></br>Angular, React</div>
                    </div>
                    <div className="skill">
                        <img src={Back}/>
                        <p>Back</p>
                        <div className="skillKind">Java, SpringBoot, SQL</div>
                    </div>
                    <div className="skill">
                        <img src={Kit}/>
                        <p>DevKit</p>
                        <div className="skillKind">서버 구축, Git 관리<br></br>Eclipse, VScode, AndroidStudio</div>
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Home;