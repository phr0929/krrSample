 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/12/mimg.png'

import bookVideo from './resource/12/m3video.png'
import book from './resource/step3mbook.png'
import video1 from './resource/12/m3_1.png'
import video2 from './resource/12/m3_2.png'
import video3 from './resource/12/m3_3.png'
import video4 from './resource/12/m3_4.png' 
import video5 from './resource/12/m3_5.png' 
import video6 from './resource/12/m3_6.png'
import video7 from './resource/12/m3_7.png' 
import video8 from './resource/12/m3_8.png'
import video9 from './resource/12/m3_9.png'
import video10 from './resource/12/m3_10.png' 

function M3_12() {
 
  const [bgColor,setBgColor] = useState('#dbedf7')
  const [boxColor,setBoxColor] = useState('#acc2e2')
  const [textColor,setTextColor] = useState('#294f5e')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/X_Ua_NYz1rY')
  const [issue,setIssue] = useState(12)
  const [studyContetns,setStudyContetns] = useState('이번 수학 시간에는 크기, 길이, 높이, 부피의 보존 개념을 탐구하고 사건과 시간의 흐름(계열화)을 논리적으로 정리했어요. 쌓여있는 도형의 개수를 유추하거나 시계와 요일을 보는 법을 익히며 입체적 사고와 시간 관리 능력을 길렀어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju4P527HYqb-Snqb9e4-yMMG')
  const linkList = [
    {page:2,     link:'https://youtu.be/4-lzhrLbbqI',img:video1},
    {page:4,     link:'https://youtu.be/X_Ua_NYz1rY',img:video2},
    {page:6,     link:'https://youtu.be/64drEgs69o4',img:video3},
    {page:7,     link:'https://youtu.be/nC6ya_NlgGg',img:video4},
    {page:8,     link:'https://youtu.be/oAbHA4ikUxc',img:video5}, 
    {page:9,     link:'https://youtu.be/pGJWp4oyXYE',img:video6},
    {page:12,    link:'https://youtu.be/4Q9v7TXtX9A',img:video7}, 
    {page:13,    link:'https://youtu.be/PnbPPsw5xAo',img:video8}, 
    {page:14,    link:'https://youtu.be/CT5-Vq9thPk',img:video9}, 
    {page:16,    link:'https://youtu.be/NTIPBd8hTcQ',img:video10}, 
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

           
        </div>

    
         <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>  
            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
              <img src={linkList[4].img} alt=''/> 
              <div>{linkList[4].page}p</div>
            </div>  

            <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[5].link)}>
              <img src={linkList[5].img} alt=''/> 
              <div>{linkList[5].page}p</div>
            </div>    
        </div>

        <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  
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

export default M3_12;
