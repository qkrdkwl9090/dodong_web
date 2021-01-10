import React from 'react';
import '../Scss/Intro.scss';
import mount from '../images/mount.png';
import Front from '../images/front.svg';
import Back from '../images/back.svg';
import Kit from '../images/kit.svg';
import Html from '../images/html.svg';
import Css from '../images/css.svg';
import Js from '../images/js.svg';
import Angular from '../images/angular.png';
import ReactImage from '../images/react.png';
import Aws from '../images/aws.png';
import Server from '../images/servers.svg';
import Git from '../images/git.png';
import Java from '../images/java.png';
import SpringBoot from '../images/springBoot.svg';
import Oracle from '../images/oracle.png';
import Flutter from '../images/flutter.png';
import Kotlin from '../images/kotlin.webp';
import Phone from '../images/phone.svg';


function Intro(){
    return (
        <div className="introContent">
            <section className="intro">
                <div className="titleName"><b>DoDong</b> > 소개</div>
                <p className="myIntroContent">
                    웹, 어플리케이션을 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.<br></br>
                    C#으로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.<br></br>
                    문제의식과 해결과정으로 성장하고 있으며, 항상 새로운 기술에 적극적으로 도전합니다.<br></br><br></br>
                    다양한 개발 스코프를 공부하면서 웹, 앱 개발, 서버구축, 유지보수까지의 과정에 대해 경험해 보았습니다.<br></br>
                    최근에는 프론트엔드에 관심을 가지고 전문적인 개발자를 목표로 노력하고 있습니다.<br></br><br></br>
                    반갑습니다. 신뢰를 가장 중요시하는 개발자 박동현입니다. <br></br>
                    </p>
                <img src={mount} alt="mount"/>
                <div className="titleName"><b>DoDong</b> > 경력</div>
                <div className="career">
                    <div className="company">
                        <h1>(주)렌딩사이언스</h1>
                        <p>개발팀 </p>
                    </div>
                    <div>2020.06.01 ~ 재직중</div>                    
                    <p>
                    Flutter을 이용한 Android, ios 앱 개발 및 출시 (2020.06~2020.10)<br></br>
                    SpringBoot 기반의 Angular.js를 이용한 홈페이지, 백오피스 개발 및 유지보수 관리 (2020.08~)<br></br>
                    React.js와 Flutter을 이용하여 하이브리드 앱 개발 (2020.12)</p>
                </div>
            </section>
            <section className="skillIntro">
                <div className="titleName"><b>DoDong</b> > 기술스택</div>
                <p className="myIntroContent">
                    현업에서 사용하거나, 관심있게 학습해본 경험이 있는 기술스택입니다. <br></br>
                    실무 단계는 해당 기술을 이용하여 현업에서 사용하여 결과물을 도출해본 경험이 있으며, 개발된 소스코드를 이해할 수 있습니다.<br></br>
                    기초 단계는 관심있게 학습 중이며, 일정 학습정도가 되면 간단한 프로젝트를 진행할 계획입니다.
                </p>
                <div className="skillKind">
                    <div className="skillInfo">
                        <div className="imgText">
                            <img src={Front}  alt="front"/>                                                    
                            <p>
                                <b>Frontend</b><br></br>
                                화면구성 & SPA 프레임워크
                            </p>                            
                        </div>
                        <div className="skillDetail">
                            <ul>
                                <li>
                                    <img src={Html}  alt="html"/>
                                    <div className="skillDetailText">
                                        <div className="skillDetailTextTitle">
                                            <p>
                                                <b>HTML</b>실무
                                            </p>
                                        </div>
                                    <p>태그를 이용한 마크업</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Css}  alt="css"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>CSS</b>실무
                                                </p>
                                            </div>
                                        <p>화면디자인 상세 조정</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Js} alt="js"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>JavaScript</b>실무
                                                </p>
                                            </div>
                                        <p>기본 문법 활용</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Angular} alt="angular"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>Angular</b>실무
                                                </p>
                                            </div>
                                        <p>Scope를 활용한 데이터 처리</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={ReactImage}  alt="react"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>React</b>실무
                                                </p>
                                            </div>
                                        <p>JSX, Hook, Router 이해</p>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>  

                    <div className="skillInfo">
                        <div className="imgText">
                            <img src={Back} alt="back"/>                                                    
                            <p>
                                <b>Backend</b><br></br>
                                화면구성 & SPA 프레임워크
                            </p>                            
                        </div>
                        <div className="skillDetail">
                            <ul>
                                <li>
                                    <img src={Java} alt="java"/>
                                    <div className="skillDetailText">
                                        <div className="skillDetailTextTitle">
                                            <p>
                                                <b>JAVA</b>실무
                                            </p>
                                        </div>
                                    <p>객체지향에 대한 이해</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={SpringBoot} alt="springboot"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>SpringBoot</b>실무
                                                </p>
                                            </div>
                                        <p>기본 환경 셋팅 및 라이브러리 활용</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Oracle} alt="oracle"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>OracleDB</b>기초
                                                </p>
                                            </div>
                                        <p>기본 SQL 작성</p>
                                    </div>
                                </li>                             
                            </ul>
                        </div>
                    </div>

                    <div className="skillInfo">
                        <div className="imgText">
                            <img src={Phone} alt="mobile"/>                                                    
                            <p>
                                <b>Mobile</b><br></br>
                                네이티브 & 하이브리드 앱 개발
                            </p>                            
                        </div>
                        <div className="skillDetail">
                            <ul>
                                <li>
                                    <img src={Flutter} alt="flutter"/>
                                    <div className="skillDetailText">
                                        <div className="skillDetailTextTitle">
                                            <p>
                                                <b>Flutter</b>실무
                                            </p>
                                        </div>
                                    <p>Android, iOS 동시 개발</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Kotlin} alt="kotlin"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>Kotlin</b>기초
                                                </p>
                                            </div>
                                        <p>Android 개발</p>
                                    </div>
                                </li>                                               
                            </ul>
                        </div>
                    </div>


                    <div className="skillInfo">
                        <div className="imgText">
                            <img src={Kit} alt="kit"/>                                                    
                            <p>
                                <b>Dev.etc</b><br></br>
                                개발 도구 & 버전 관리
                            </p>                            
                        </div>
                        <div className="skillDetail">
                            <ul>
                                <li>
                                    <img src={Server} alt="server"/>
                                    <div className="skillDetailText">
                                        <div className="skillDetailTextTitle">
                                            <p>
                                                <b>Window Server</b>실무
                                            </p>
                                        </div>
                                    <p>IIS 이용한 서버 구축</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Aws} alt="aws"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>AWS</b>기초
                                                </p>
                                            </div>
                                        <p>EC2서버 구축 및 운영</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Git} alt="git"/>
                                        <div className="skillDetailText">
                                            <div className="skillDetailTextTitle">
                                                <p>
                                                    <b>Git</b>실무
                                                </p>
                                            </div>
                                        <p>Git 서버 구축 & 버전 관리</p>
                                    </div>
                                </li>                               
                            </ul>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}
export default Intro;