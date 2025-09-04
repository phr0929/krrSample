import logo from '../logo.svg';
 
import sk from '../resource/sk.svg';
import skGray from '../resource/sk_gray.svg'; 
import stars from '../resource/stars.svg';
import circle from '../resource/circle.svg'; 
import krrLogo from '../resource/krr logo.svg';
import hanLogo from '../resource/han logo.svg';
import mathLogo from '../resource/math logo.svg';
import zemboLogo from '../resource/zembo logo.svg';
import krrImg from '../resource/krrImg.jpg';
import luluImg from '../resource/luluImg.jpg';
import eliivyImg from '../resource/eliivyImg.jpg';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './contents2026.css'
import instaLogo from '../resource/instaLogo.svg';
import youtubeLogo from '../resource/youtubeLogo.svg'; 
import blogLogo from '../resource/blogLogo.svg';
import { useLocation } from 'react-router-dom';  
 
import bg01 from './resource/bg01.svg'
import bg02 from './resource/bg02.svg'
 
import bgic1 from './resource/bgic1.svg'
import bgic2 from './resource/bgic2.svg'
import bgic3 from './resource/bgic3.svg'

import menuLulu from './resource/menuLulu.svg'
import menuHan from './resource/menuHan.svg'
import menuMath from './resource/menuMath.svg'
import menuEn from './resource/menuEn.svg'

import chLulu from './resource/chLulu.svg';

import chHan from './resource/chHan.svg';
import chMath from './resource/chMath.svg';
import chEn from './resource/chEn.svg';
import arrowBtn from './resource/arrowBtn.svg';

import parkBg from './resource/parkBg.svg'

function Main() {

  const navigate = useNavigate()
  const location = useLocation();
   
   
   
  return (
    <div className='mainCenterLayout26'>

      <div className='mainLayout26'>
        <div className='logoLayout26'>
          <img className='logoImg26' src={sk} alt=''/>
          <div className='logoBtnBar26'>
            <img src={instaLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.instagram.com/krr_edu_official/')}/>
            <img src={youtubeLogo} className='social-icon' alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            <img src={blogLogo} className='social-icon' style={{marginRight:0}}  alt='' onClick={()=>window.open('https://blog.naver.com/juseomkim')}/>
          </div>
        </div>
        <div className='nullDiv'/>
        <div className='mainContents26'>
            <div className='mainContentsTitle26'>
              {/* <div style={{margin:'0px 3px 2px 3px'}}>아이들이 먼저 찾는</div> 
              <div style={{margin:'0px 3px 2px 3px'}}>학습 콘텐츠</div>  */}
              <div style={{margin:'0px 3px 2px 3px'}}>섬김의 콘텐츠를</div> 
              <div style={{margin:'0px 3px 2px 3px'}}>직접 체험해 보세요!</div> 
            </div>
            <div className='mainContentsText26' style={{marginTop:-4}}>
              <div style={{margin:'0px 2px 2px 2px'}}>룰루랄라 즐겁게 학습하고</div>
              <div style={{margin:'0px 2px 2px 2px'}}>까르르 웃다 보면 엘리트로 성장하게 돼요.</div>
              {/* <div style={{margin:'0px 2px 2px 2px'}}>룰루랄라 즐겁게 학습하고</div>
              <div style={{margin:'0px 2px 2px 2px'}}>까르르 웃다 보면 엘리트로 성장하게 돼요.</div> */}
            </div>
            
            <div className='mainContentsMenuLayout26'> 
              <div className='mainMenuLayout26'>
                <div className='mainMenu26' onClick={()=>navigate('./Contents', {state:{idx:0}})}>
                  <div className='mainMenuImgBar26'>
              
                    <div className='chImgLayout26'>
                      <img className='chImg26' src={chLulu} alt=''/>
                    </div>
                  
                      {/* <img className='menuArrow26' src={arrowBtn} alt=''/> */}
                  </div>
                  
                  <div className='menuTextLayout26'>
                    <div>
                      룰루
                    </div>
                    <div>
                      만 2세 글놀이 수놀이
                    </div> 
                    <img className='menuArrow26' src={arrowBtn} alt=''/>
                  </div>

                  
                </div>

                <div className='mainMenu26'  style={{backgroundColor:'#fff4d9'}} onClick={()=>navigate('./Contents', {state:{idx:1}})}>
                  <div className='mainMenuImgBar26'>
              
                    <div className='chImgLayout26'>
                      <img className='chImg26' src={chHan} alt=''/>
                    </div>
                   
                  </div>
                  
                  <div className='menuTextLayout26'>
                    <div>
                      까르르 한글
                    </div>
                    <div>
                      만 3,4,5세 한글공부
                    </div> 
                    <img className='menuArrow26' src={arrowBtn} alt=''/>
                  </div>

                  
                </div>
              </div>

              <div className='mainMenuLayout26 mainMenuPaddingBottom26'>
                <div className='mainMenu26'  style={{backgroundColor:'#e8f9e4'}} onClick={()=>navigate('./Contents', {state:{idx:2}})}>
                  <div className='mainMenuImgBar26'>
              
                    <div className='chImgLayout26'>
                      <img className='chImg26' src={chMath} alt=''/>
                    </div>
                 
                  </div>
                
                  <div className='menuTextLayout26'>
                    <div>
                      까르르 수학
                    </div>
                    <div>
                      만 3,4,5세 수학공부
                    </div> 
                  
                  </div>
                   <img className='menuArrow26' src={arrowBtn} alt=''/>
                </div>


                <div className='mainMenu26'  style={{backgroundColor:'#e3fafc'}}onClick={()=>navigate('./Contents', {state:{idx:3}})}>
                  <div className='mainMenuImgBar26'>
              
                    <div className='chImgLayout26'>
                      <img className='chImg26' src={chEn} alt=''/>
                    </div>
                   
                  </div>
                  
                  <div className='menuTextLayout26'>
                    <div>
                      엘리아이비 영어
                    </div>
                    <div>
                      만 2,3,4,5세 영어공부
                    </div> 
                  </div>       
                    <img className='menuArrow26' src={arrowBtn} alt=''/>          
                </div>
              </div>

              <div className='bgMotion26'>
                <div>
                  <img className='bgIcon1' src={bgic1} alt=''/>  
                </div>
                
                <div>
                  <img className='bgIcon2' src={bgic2} alt=''/>  
                  <img className='bgIcon3' src={bgic3} alt=''/> 
                </div>
              </div>
               
            </div>
        </div>
        
      

        <div className='bgImage26'>
          <div>
            <img src={bg01} alt=''/>
          </div>
          <div>
            <img src={bg02} alt=''/>
          </div>
        </div>
      </div>
 



       
    {/* <div className='bottomLayout'>
        <div className='bottomLayoutIn'>
          <img src={skGray} alt=''/>
          <div className='bottomText'>
            <div>(주)섬김</div>
            <div>대표 : 임영수  │  사업자등록번호 : 886-86-00204</div>
            <div>대표번호 1533-2473</div>
            <div>©2023 by (주)섬김 All Rights Reserved.</div>
          </div>
          <div className='bottomBtn'>
            <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krrhangeul_official/')}/>
            <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} /> 
          </div>
        </div>
        
      </div>
    <img src={stars} alt='' className='stars' />
    <img src={circle} alt='' className='circle1'/>
    <img src={circle} alt='' className='circle2'/> */}
    
  </div>
  );
}

export default Main;
