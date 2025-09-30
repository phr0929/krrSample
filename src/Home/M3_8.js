 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/8/mimg.png'

import bookVideo from './resource/8/m3video.png'
import book from './resource/step3mbook.png'
import video1 from './resource/8/m3_1.png'
import video2 from './resource/8/m3_2.png'
import video3 from './resource/8/m3_3.png'
import video4 from './resource/8/m3_4.png' 
import video5 from './resource/8/m3_5.png' 
import video6 from './resource/8/m3_6.png'

function M3_8() {
 
  const [bgColor,setBgColor] = useState('#fed643')
  const [boxColor,setBoxColor] = useState('#1f314d')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/L06S3l1oP1k')
  const [issue,setIssue] = useState(8)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 10수 막대와 1수 막대를 합쳐 큰 수를 세고, 수막대↔수백판을 대응시키며 달력의 빈칸 채우기·순서 배열·변화 기계 놀이로 규칙성을 발견했어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju58MmYpcruihpvGqU6Lr72M')
  const linkList = [
    {page:2, link:'https://youtu.be/L06S3l1oP1k',img:video1},
    {page:2, link:'https://youtu.be/zpxNRBQrrwI',img:video2},
    {page:4, link:'https://youtu.be/p5_z9TNf8OY',img:video3},
    {page:4, link:'https://youtu.be/Ah_rstaA3v4',img:video4},
    {page:11,link:'https://youtu.be/uoJxrKuhah4',img:video5}, 
    {page:12,link:'https://youtu.be/yqHDLq8DXE4',img:video6},
    // {page:13,link:'https://youtu.be/kDh2NaJSzRE',img:video5},
    // {page:16,link:'https://youtu.be/AjF_sRd3Q2I',img:video6},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video7},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video8}, 
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
        3단계 {issue}호
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

    
         <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
            
            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
              <img src={linkList[4].img} alt=''/> 
              <div>{linkList[4].page}p</div>
            </div>  

            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
              <img src={linkList[5].img} alt=''/> 
              <div>{linkList[5].page}p</div>
            </div>    
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M3_8;
