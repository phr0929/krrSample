 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import mimg from './resource/10/mimg.png'

import bookVideo from './resource/10/m2video.png'
import book from './resource/step2mbook.png'
import video1 from './resource/10/m2_1.png'
import video2 from './resource/10/m2_2.png'
import video3 from './resource/10/m2_3.png'
import video4 from './resource/10/m2_4.png' 
import video5 from './resource/10/m2_5.png' 
import video6 from './resource/10/m2_6.png' 
import video7 from './resource/10/m2_7.png' 

function M2_10() {
 
  const [bgColor,setBgColor] = useState('#e9f3ff')
  const [boxColor,setBoxColor] = useState('#acc2e2')
  const [textColor,setTextColor] = useState('#294f5e')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/HAGDBNSzAq4')
  const [issue,setIssue] = useState(10)
  const [studyContetns,setStudyContetns] = useState('평면도형과 입체도형 퍼즐을 맞추며 도형 감각을 익히고, 색과 모양의 배열 규칙을 찾아 패턴 인식력을 키웠어요. 서로 다른 동물의 부분을 합쳐 새로운 동물을 만드는 활동으로 추리력과 조직력을 발달시켰어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju4hRRD5_D7jjm9OXZMYvMQT')
  const linkList = [
    {page:3, link:'https://youtu.be/pemovonoiiA',img:video1},
    {page:3, link:'https://youtu.be/gT17vECbCy0',img:video2},
    {page:3, link:'https://youtu.be/veh96tfjmYI',img:video3},
    {page:8, link:'https://youtu.be/TkzC8WU1d1A',img:video4},
    {page:9, link:'https://youtu.be/Vvjs7Gusy1k',img:video5}, 
    {page:9, link:'https://youtu.be/1nsEzfCCSLU',img:video6},     
    {page:13,link:'https://youtu.be/HAGDBNSzAq4',img:video7}, 
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
          
 
        </div>


        <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
{/*   
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[8].link)}>
            <img src={linkList[8].img} alt=''/> 
            <div>{linkList[8].page}p</div>
          </div>   */}
 
        </div>
  
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_10;
