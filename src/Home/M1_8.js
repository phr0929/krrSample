 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/8/mimg.png'

import bookVideo from './resource/8/m1video.png'
import book from './resource/step1mbook.png'
import video1 from './resource/8/m1_1.png'
import video2 from './resource/8/m1_2.png'
import video3 from './resource/8/m1_3.png'
import video4 from './resource/8/m1_4.png' 
import video5 from './resource/8/m1_5.png'
import video6 from './resource/8/m1_6.png' 
import video7 from './resource/8/m1_7.png' 
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'

function M1_8() {
 
  const [bgColor,setBgColor] = useState('#fed643')
  const [boxColor,setBoxColor] = useState('#1f314d')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/9VDFUarAuuU')
  const [issue,setIssue] = useState(8)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 트럭 캐릭터와 짐의 수를 보며 1~10까지 같은 수끼리 찍짓고, 칸 채우기·연결하기 활동으로 같은 수 찾기와 수-양 대응 감각을 키웠어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju622vPxNZK8mGQcww-9Ls3o')
  const linkList = [
    {page:2, link:'https://youtu.be/9VDFUarAuuU',img:video1},
    {page:5, link:'https://youtu.be/3dCufDHE0ZI',img:video2},
    {page:5, link:'https://youtu.be/gM_fwYaB-KY',img:video3},
    {page:5, link:'https://youtu.be/DQFrydrl5p0',img:video4},
    {page:14,link:'https://youtu.be/UvcjRP8R1YU',img:video5},
    {page:15,link:'https://youtu.be/XCP1J6M1niM',img:video6},
    {page:16,link:'https://youtu.be/YihjmBFZzRc',img:video7},
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
        1단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''className='bookImgHome' style={{border:0}}/>
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome' style={{border:0}}/>
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
  

        <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
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

          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}p</div>
          </div>    */}
          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[2].link)}>
            <img src={linkList[2].img} alt=''/> 
            <div>{linkList[2].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>    */}
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M1_8;
