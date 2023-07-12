import React, { useEffect, useState } from 'react';
import './MainContent.css';
import { useInView } from 'react-intersection-observer';


const MainContent = () => {

  // background 이미지가 최초 렌더링 후 나타나게 할 스크립트
  const [showBg, setShowBg] = useState(false);

  // 해당 엘리먼트가 보이는지를 확인하는 스크립트
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  // 이 아래는 타임아웃 버전
  const [isVisibleTO, setIsVisibleTO] =useState(false);
  const [isVisibleTO2, setIsVisibleTO2] =useState(false);

  const { ref: targetBox, inView } = useInView({
    /* Optional options */
    threshold: 0.2, // 50% 이상이 보이는지를 체크합니다.
  });

  const { ref: targetBoxTO, inView: inViewTO } = useInView({
    /* Optional options */
    threshold: 0.2, // 50% 이상이 보이는지를 체크합니다.
  });

  const { ref: targetBox2, inView: inView2 } = useInView({
    /* Optional options */
    threshold: 0.1, // 50% 이상이 보이는지를 체크합니다.
  });

  const { ref: targetBoxTO2, inView: inViewTO2 } = useInView({
    /* Optional options */
    threshold: 0.1, // 50% 이상이 보이는지를 체크합니다.
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  React.useEffect(() => {
    if (inViewTO) {
      setTimeout(() => {
        setIsVisibleTO(true);
      }, 300);
    }
  }, [inViewTO]);

  React.useEffect(() => {
    if (inView2) {
      setTimeout(() => {
        setIsVisible2(true);
      }, 300);
    }
  }, [inView2]);

  React.useEffect(() => {
    if (inViewTO2) {
      setIsVisibleTO2(true);
    }
  }, [inViewTO2]);

  useEffect(() => {
    setTimeout(() => {
      setShowBg(true);
    }, 100);
  }, []);

  return (
    <div className='MainContent'>
      <div className="maincontent-header">
        <h1 className='maincontent-title'>Junior Web Developer</h1>
        <p className='maincontent-item'>항상 배우는 것에 즐거움을 느끼는 <span>&lt;웹 개발자 /&gt;</span> 입니다.</p>
        <div className='maincontent-profile'>
          <img src="/img/AvatarProfile.svg" alt="profileImage" />
        </div>
        <div className='maincontent-btn-wrapper'>
          <button style={{fontWeight: '700'}} className='maincontent-btn'>MORE</button>
        </div>
      </div>
      <div className='background-img-box'>
        <div className={`background ${showBg ? 'show' : ''}`}>
          <img src="/img/backimg2.png" alt="backimg2" />
          <img src="/img/backimg.png" alt="backimg" />
        </div>
      </div>
      <div className='maincontent-about'>
        <h1 className='about-title'>👋 Introduce</h1>
        <div className="about-content-wrapper">
          <div ref={targetBox} className={`about-profile ${isVisible ? 'show' : ''}`}>
            <img src="/img/profileImg.jpg" alt="ProfileImage" />
          </div>
          <div className='y-line'></div>
          <div ref={targetBoxTO} className={`about-content ${isVisibleTO ? 'show' : ''}`}>
            <div className='about-item'>
              <img className='about-icon' src="/img/person-fill.svg" alt="person-fill" />
              <div className='about-txt'>
                <h2>이름</h2>
                <p>김승빈</p>
              </div>
            </div>
            <div className='about-item'>
              <img className='about-icon' src="/img/calendar-fill.svg" alt="calendar-fill" />
              <div className='about-txt'>
                <h2>생년월일</h2>
                <p>93년 1월 23일</p>
              </div>
            </div>
            <div className='about-item'>
              <img className='about-icon' src="/img/geo-alt-fill.svg" alt="geo-alt-fill" />
              <div className='about-txt'>
                <h2>주소지</h2>
                <p>대전시 서구</p>
              </div>
            </div>
            <div className='about-item'>
              <img className='about-icon' src="/img/telephone-fill.svg" alt="telephone-fill" />
              <div className='about-txt'>
                <h2>연락처</h2>
                <p>010-8274-8823</p>
              </div>
            </div>
            <div className='about-item'>
              <img className='about-icon' src="/img/envelope-fill.svg" alt="envelope-fill" />
              <div className='about-txt'>
                <h2>이메일</h2>
                <p>sbk930123@naver.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduce-wrapper">
        <div ref={targetBox2} className={`introduce ${isVisible2 ? 'show' : ''}`}>
          <h2 style={{color: '#333333', marginBottom: '40px'}}>expressing myself ... &nbsp;&nbsp;<span className='ani-pointer'>👇</span></h2>
          <h1 style={{marginBottom: '10px'}}>"진취적 도전"</h1>
          <p>
            코드나 기술 문제로 포기하는 것이 아닌,
            계속해서 문제를 해결하고 그 과정에서
            얻는 성취감으로부터 동기부여를 얻습니다.
          </p>
          <h1 style={{marginTop: '40px', marginBottom: '10px'}}>"끈기있는 여정"</h1>
          <p>제 끈기는 저를 항상 다음 단계로 이끌고, 저의 개발 여정을 끝까지 완주하게 합니다.</p>
          <h1 style={{marginTop: '40px', marginBottom: '10px'}}>"함께하는 즐거움"</h1>
          <p>
            혼자서는 불가능한 것을 함께라면 이룰 수 있다는 것을 믿습니다. 
            이런 환경에서 함께 문제를 해결하고, 서로의 지식과 경험을 공유하며 함께 성장하는 것은
            이 분야에서 일하는 데 있어 가장 큰 보람 중 하나라고 생각합니다.
          </p>
          <h1 style={{marginTop: '40px', marginBottom: '10px'}}>"개발 역량"</h1>
          <p>
            항상 편안한 영역에 머무르는 것보다는 새로운 기술을 배우거나, 
            복잡한 문제를 해결하는 것에 도전하는 것이 저에게 큰 만족감을 줍니다. 
            이런 도전이 저를 더 성장시키고, 제 개발 역량을 넓혀가는 데에 중요한 역할을 합니다.
          </p>
        </div>
        <div ref={targetBoxTO2} className={`skill ${isVisibleTO2 ? 'show' : ''}`}>
          <h2 style={{color: '#333333', marginTop: '30px'}}>SKILL ... &nbsp;&nbsp;<span className='ani-pointer2'>💻</span> </h2>
          <div className="skill-list-wrapper">
            <ul className='skill-list'>
              <span>Front-End</span>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/html5-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML5</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/css3-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS3</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/react-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REACT</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/vuedotjs-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VUE.JS</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/javascript-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAVASCRIPT</li>
            </ul>
            <ul className='skill-list'>
              <span>Back-End</span>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/nodedotjs-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NODE.JS</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/express-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/firebase-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FIREBASE</li>
            </ul>
            <ul className='skill-list'>
              <span>Tool</span>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/git-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GIT</li>
              <li className="skill-item">⋅&nbsp;&nbsp;<img src="/img/github-color.svg" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GITHUB</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default MainContent;