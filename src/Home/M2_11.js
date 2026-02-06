 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/11/mimg.png'

import bookVideo from './resource/11/m2video.png'
import book from './resource/step2mbook.png'
import video1 from './resource/11/m2_1.png'
import video2 from './resource/11/m2_2.png'
import video3 from './resource/11/m2_3.png'
import video4 from './resource/11/m2_4.png' 
import video5 from './resource/11/m2_5.png' 
import video6 from './resource/11/m2_6.png'
import video7 from './resource/11/m2_7.png'
import video8 from './resource/11/m2_8.png'
import video9 from './resource/11/m2_9.png' 
import video10 from './resource/11/m2_10.png' 

function M2_11() { 
  
  const [bgColor,setBgColor] = useState('#f9ffbd')
  const [boxColor,setBoxColor] = useState('#adce5d')
  const [textColor,setTextColor] = useState('#fc654f')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/9p4Yn6Oqx08')
  const [issue,setIssue] = useState(11)
  const [studyContetns,setStudyContetns] = useState(`이번 수학 시간에는 자, 그래프, 수직선 등 다양한 도구에 수를 표시하며 수량 개념을 통합적으로 이해했어요. 사물과 숫자를 더하고 빼며 암산력을 키우고, 규칙에 따라 길을 찾는 활동으로 패턴 인식력을 발달시켰어요.`)
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju55sHpcSAvhYDfJLClB8Sdr')
  const linkList = [
    {page:2,  link:'https://youtu.be/hZu36VduKik',img:video1},
    {page:2,  link:'https://youtu.be/9p4Yn6Oqx08',img:video2},
    {page:5,  link:'https://youtu.be/-oK3Uh64mdk',img:video3},
    {page:5,  link:'https://youtu.be/pOKl_VmV_F4',img:video4},
    {page:5,  link:'https://youtu.be/BTxS42Dtby4',img:video5},  
    {page:8,  link:'https://youtu.be/7TekSAqEOpI',img:video6},  
    {page:8,  link:'https://youtu.be/ITv-v1lmUEs',img:video7},  
    {page:11, link:'https://youtu.be/4pZ8Y1n9Y6I',img:video8},  
    {page:11, link:'https://youtu.be/DBd70yUAgwk',img:video9},  
    {page:15, link:'https://youtu.be/jcx4iKDCntM',img:video10},  
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
        <div className='contentsLinkTextHome'>영상 시청</div>
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
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome' style={{border:0}}/>
        </div> 
        <div>
            {studyContetns}
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
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[2].link)}>
            <img src={linkList[2].img} alt=''/> 
            <div>{linkList[2].page}p</div>            
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>   

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
            <img src={linkList[4].img} alt=''/> 
            <div>{linkList[4].page}p</div>
          </div>   
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
            <img src={linkList[5].img} alt=''/> 
            <div>{linkList[5].page}p</div>            
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>   
        </div>

        <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>  
 

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[8].link)}>
            <img src={linkList[8].img} alt=''/> 
            <div>{linkList[8].page}p</div>
          </div>    
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[9].link)}>
            <img src={linkList[9].img} alt=''/> 
            <div>{linkList[9].page}p</div>
          </div>  
           
        </div>

        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_11;
