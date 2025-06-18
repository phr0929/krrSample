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
import arrowDown from './resource/arrowDown.svg';
import bgWave from './resource/bgWave.svg'
 
import bg01 from './resource/bg01.svg'
import bg02 from './resource/bg02.svg'
 
import bgic1 from './resource/bgic1.svg'
import bgic2 from './resource/bgic2.svg'
import bgic3 from './resource/bgic3.svg'

import menuLulu from './resource/menuLulu.svg'
import menuHan from './resource/menuHan.svg'
import menuMath from './resource/menuMath.svg'
import menuEn from './resource/menuEn.svg'

import chLulu3 from './resource/chLulu3.svg';

import chHan3 from './resource/chHan3.svg';
import chMath3 from './resource/chMath3.svg';
import chEn3 from './resource/chEn3.svg';

import chLulu2 from './resource/chLulu2.svg';
import chHan2 from './resource/chHan2.svg';
import chMath2 from './resource/chMath2.svg';
import chEn2 from './resource/chEn2.svg';
import arrowBtn from './resource/arrowBtn.svg';
import t0511 from '../resource/thumbnail/Lulu/littles/5-1-1.jpg';
import parkBg from './resource/parkBg.svg'
import balloonLulu from './resource/balloonLulu.svg'
import balloonMath from './resource/balloonMath.svg'
import balloonHan from './resource/balloonHan.svg'
import balloonEn from './resource/balloonEn.svg'

function Hangeul() {

  const navigate = useNavigate()
  const location = useLocation();

  const [subject,setSubject] = useState('Krr');
   
  const handleSubject = (sj) => {
    setSubject(sj)
    navigate(`../2026sample/${sj}`)
  } 
   
  return (
    <div className='mainCenterLayout26' style={{backgroundColor:'#CCEDFF',}}>

      <div className='mainLayout26' style={{alignItems:'center',position:'relative',zIndex:400}}>
        <div className='logoLayout26'>
          <img className='logoImg26' src={sk} alt='' onClick={()=>navigate('../2026sample')}/>
          <div className='logoBtnBar26'>
            <img src={instaLogo}  alt='' onClick={()=>window.open('https://www.instagram.com/juseom_kim/')}/>
            <img src={youtubeLogo}  alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            <img src={blogLogo} style={{marginRight:0}}  alt='' onClick={()=>window.open('https://blog.naver.com/juseomkim')}/>
          </div>
        </div>

       <div style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',alignItems:'center',position:'fixed'}}>
          <div style={{ backgroundColor:'#CCEDFF',display:'flex',flexDirection:'column',alignItems:'center',width:'fit-content',maxWidth:'calc(100% - 30px)'}}>
            <div className='nullDiv'/>
            <div className='ctgrBar26' style={{marginTop:20}}> 
              <div className={subject==='Lulu'?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject('Lulu')}>룰루</div>
              <div className={subject==='Krr'?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject('Krr')}>한글</div>
              <div className={subject==='Math'?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject('Math')}>수학</div>
              <div className={subject==='ElliIvy'?'ctgrOn26':'ctgrOff26'} onClick={()=>handleSubject('ElliIvy')}>영어</div>
            </div> 
          </div>


          <div style={{width:'100%', display:'flex',justifyContent:'center',paddingBottom:20,background:'linear-gradient(to bottom, #CCEDFF 0%, rgba(204, 237, 255, 0) 100%)'}}>
             <img src={arrowDown} alt='' className='ctgrBarImg26'/>
          </div>
        </div> 
        
        <div className='nullDiv3'/> 
        
       

  
         <div className='contentBox26'>
            <div className='contentTitle26'>1단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26Han'>월·화</div>
              <div className='weekBarDay26Han'>수·목</div>
              <div className='weekBarDay26Han'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>1주</div>
              <div className='contentName26Han'>한글 1</div>
              <div className='contentName26Han'>한글 2</div>
              <div className='contentName26Han'>잼보 1</div> 
            </div>
              <div className='contentBar26'>
               <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>2주</div>
              <div className='contentName26Han'>한글 3</div>
              <div className='contentName26Han'>한글 4</div>
              <div className='contentName26Han'>잼보 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>3주</div>
              <div className='contentName26Han'>한글 5</div>
              <div className='contentName26Han'>한글 6</div>
              <div className='contentName26Han'>잼보 3</div>  
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#FDCE56', borderColor:'#FDCE56'}}>4주</div>
              <div className='contentName26Han'>한글 7</div>
              <div className='contentName26Han'>한글 8</div>
              <div className='contentName26Han'>잼보 4</div> 
            </div>
          </div> 
 


    

  
         <div className='contentBox26'>
            <div className='contentTitle26'>2단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26Han'>월·화</div>
              <div className='weekBarDay26Han'>수·목</div>
              <div className='weekBarDay26Han'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>1주</div>
              <div className='contentName26Han'>한글 1</div>
              <div className='contentName26Han'>한글 2</div>
              <div className='contentName26Han'>잼보 1</div> 
            </div>
              <div className='contentBar26'>
               <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>2주</div>
              <div className='contentName26Han'>한글 3</div>
              <div className='contentName26Han'>한글 4</div>
              <div className='contentName26Han'>잼보 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>3주</div>
              <div className='contentName26Han'>한글 5</div>
              <div className='contentName26Han'>한글 6</div>
              <div className='contentName26Han'>잼보 3</div>  
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#B6D86E', borderColor:'#B6D86E'}}>4주</div>
              <div className='contentName26Han'>한글 7</div>
              <div className='contentName26Han'>한글 8</div>
              <div className='contentName26Han'>잼보 4</div> 
            </div>
          </div> 
 
 

  
         <div className='contentBox26'>
            <div className='contentTitle26'>3단계 - 1호</div>
            <div className='weekBar26'>
              <div className='weekBarTitle26' ></div>
              <div className='weekBarDay26Han'>월·화</div>
              <div className='weekBarDay26Han'>수·목</div>
              <div className='weekBarDay26Han'>금</div>
            </div>
            <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>1주</div>
              <div className='contentName26Han'>한글 1</div>
              <div className='contentName26Han'>한글 2</div>
              <div className='contentName26Han'>잼보 1</div> 
            </div>
              <div className='contentBar26'>
               <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>2주</div>
              <div className='contentName26Han'>한글 3</div>
              <div className='contentName26Han'>한글 4</div>
              <div className='contentName26Han'>잼보 2</div> 
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>3주</div>
              <div className='contentName26Han'>한글 5</div>
              <div className='contentName26Han'>한글 6</div>
              <div className='contentName26Han'>잼보 3</div>  
            </div>
              <div className='contentBar26'>
              <div className='week26' style={{backgroundColor:'#8EBEE0', borderColor:'#8EBEE0'}}>4주</div>
              <div className='contentName26Han'>한글 7</div>
              <div className='contentName26Han'>한글 8</div>
              <div className='contentName26Han'>잼보 4</div> 
            </div>
          </div>  
       

        <div className='nullDiv2'/>
        
        
       
      </div>

   

        
      <div className='contentPageBg26'>
       <div className='contentPageBg26Ch'>
          <img src={chLulu3} alt=''/>
          <img src={chHan3} alt='' />
          <img src={chMath3} alt=''/>
          <img src={chEn3} alt=''  />
       </div>

       <div className='contentPageBg26Park'>

         <img src={parkBg} alt=''/>
       </div>
      </div>

 
    
  </div>
  );
}

export default Hangeul;
