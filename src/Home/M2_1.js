 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/1/mimg.png'

import bookVideo from './resource/1/m2video.png'
import book from './resource/step2mbook.png'
import video1 from './resource/1/m2_1.png'
import video2 from './resource/1/m2_2.png'
import video3 from './resource/1/m2_3.png'
import video4 from './resource/1/m2_4.png' 
import video5 from './resource/1/m2_5.png' 
import video6 from './resource/1/m2_6.png'
import video7 from './resource/1/m2_7.png'
import video8 from './resource/1/m2_8.png' 
import video9 from './resource/1/m2_9.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'

function M2_1() {
 
  const [bgColor,setBgColor] = useState('#8ad05c')
  const [boxColor,setBoxColor] = useState('#62ba51')
  const [textColor,setTextColor] = useState('#fffbcf')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/FZQ4_ecC9bg')
  const [issue,setIssue] = useState(1)
  const [studyContetns,setStudyContetns] = useState(`이번 수학 시간에는 신체, 계절, 크기, 직업 등 다양한 속성에 따라 사물을 분류하고 공통점을 찾는 연습을 했어요. '크다·작다' 게임과 연상 퀴즈를 통해 사물의 속성을 논리적으로 파악하고 범주화하는 능력을 키웠어요.`)
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju6sz7ncbW-OZajPC0PvyYAN')
  const linkList = [
    {page:2,  link:'https://youtu.be/FZQ4_ecC9bg',img:video1},
    {page:3,  link:'https://youtu.be/YS78rISJBwQ',img:video2},
    {page:6,  link:'https://youtu.be/gaseYCtHRYU',img:video3},
    {page:6,  link:'https://youtu.be/xlRewkko6c4',img:video4},
    {page:6,  link:'https://youtu.be/mbCrl-2zsXs',img:video5}, 
    {page:6,  link:'https://youtu.be/hLl2efreicU',img:video6},
    {page:6,  link:'https://youtu.be/IFkDcazji4c',img:video7},
    {page:6,  link:'https://youtu.be/0tTnGOc6KC4',img:video8},
    {page:14, link:'https://youtu.be/7S2M6iEk9jk',img:video9},  
   ]
   
  const handleGoLink=(link)=>{
    window.open(link)
  }

   
  return (
  <div className='mainCenterLayoutHome'>
    <div className='imgBoxHome'>
      {/* <div className='stepInfoHome' style={{border:'3px solid #7DCBF5'}}>한글 1단계 5호</div> */}
      <div className='contentsLinkBtnHome' style={{right:0}} onClick={()=>handleGoLink(playListLink)}>
        <div className='contentsLinkHome' style={{right:0}}>▶</div>
        <div className='contentsLinkTextHome' style={{color:'#fff'}}>영상 시청</div>
      </div>
      <img src={mimg} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome' style={{backgroundColor:bgColor}}>
      <div className='titleHome' style={{color:textColor}}>
        까르르수학 가정안내문<br/>
        2단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''className='bookImgHome'/>
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome'/>
        </div> 
        <div>
            {studyContetns}
        </div>   
      
      
      </div>

       <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
        <div></div>
        <div>까르르한글수 APP</div>
        <div></div>
      </div>
      <div className='writeHangeulHome'> 
         
      
        <div className='downloadTitleHome'>⬇️ 까르르한글수 다운로드 링크</div>

        <div className='downloadBarHome'>
          <div className='downloadBtnHome'
              onClick={()=>window.open('https://apps.apple.com/kr/app/%EC%93%B0%EB%8A%94%ED%95%9C%EA%B8%80/id6633439192')}>
              <img src={appstore} alt=''/>
              <div>AppStore</div>
            </div>
          <div className='downloadBtnHome'
              onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.seomgim.korean&pcampaignid=web_share')}>
              <img src={playstore} alt=''/>
              <div>PlayStore</div>
          </div>
        </div> 
        <div className='admissionCodeHome'>
          <div className='admissionCodeTitleHome'>🔑 까르르한글수 가입 코드</div>
          <div>가입 코드는 각 원에 문의해 주세요.</div>
         
        </div>

         
      </div>


       <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
        <div></div>
        <div>교재 연계 영상</div>
        <div></div>
      </div>
      <div className='videoBoxHome'> 
        <div style={{fontWeight:700}}>🎥 영상으로 이어지는 즐거운 학습</div>
        <div style={{marginTop:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[0].link)}>
            <img src={linkList[0].img} alt=''/> 
            <div>{linkList[0].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[1].link)}>
            <img src={linkList[1].img} alt=''/> 
            <div>{linkList[1].page}p</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[2].link)}>
            <img src={linkList[2].img} alt=''/> 
            <div>{linkList[2].page}p</div>            
          </div>  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>   
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
          
      

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
            <img src={linkList[4].img} alt=''/> 
            <div>{linkList[4].page}p</div>
          </div>  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}p</div>
          </div>   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>  
        </div>


        <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[8].link)}>
            <img src={linkList[8].img} alt=''/> 
            <div>{linkList[8].page}p</div>
          </div>  
 
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_1;
