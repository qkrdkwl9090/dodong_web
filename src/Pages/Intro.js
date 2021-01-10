import React from 'react';
import '../Scss/Intro.scss';
import mount from '../images/mount.png';

function Intro(){
    return (
        <div className="introContent">
            <section className="intro">
                <div className="titleName">DoDong > 소개</div>
                <p className="myIntroContent">
                    웹, 어플리케이션을 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.<br></br>
                    C#으로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.<br></br>
                    문제의식과 해결과정으로 성장하고 있으며, 항상 새로운 기술에 적극적으로 도전합니다.<br></br><br></br>
                    다양한 개발 스코프를 공부하면서 웹, 앱 개발, 서버구축, 유지보수까지의 과정에 대해 경험해 보았습니다.<br></br>
                    최근에는 프론트엔드에 관심을 가지고 전문적인 개발자를 목표로 노력하고 있습니다.<br></br><br></br>
                    반갑습니다. 신뢰를 가장 중요시하는 개발자 박동현입니다. <br></br>
                    </p>
                <img src={mount}/>
                <div className="titleName">DoDong > 경력</div>
                <div className="career">
                    <div className="company">
                        <h1>(주)렌딩사이언스</h1>
                        <p>개발팀 </p>
                    </div>
                    <div>2020.06.01 ~ 재직중</div>                    
                    <p>
                    Flutter을 이용한 Android, ios 앱 개발 및 출시 (2020.06~2020.10)<br></br>
                    스프링부트 기반의 Angular.js를 이용한 홈페이지, 백오피스 개발 및 유지보수 관리 (2020.08~)<br></br>
                    React.js와 Flutter을 이용하여 하이브리드 앱 개발 (2020.12)</p>
                </div>
            </section>
        </div>
    )
}
export default Intro;