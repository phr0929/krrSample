 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import m5img from './resource/5/m5img.png'
import bookVideo from './resource/5/m5Step2Thumbnail1.png'
import book from './resource/5/m5Step2Book.png'
import videoThumbnail1 from './resource/5/m5Step2_2p_1.png'
import videoThumbnail2 from './resource/5/m5Step2_2p_2.png'
import videoThumbnail3 from './resource/5/m5Step2_5p_1.png'
import videoThumbnail4 from './resource/5/m5Step2_7p_1.png'
import videoThumbnail5 from './resource/5/m5Step2_7p_2.png' 
import videoThumbnail6 from './resource/5/m5Step2_13p_1.png'
function M2_5() {
 
   
  const [issue,setIssue] = useState(5);
  const [studyContetns,setStudyContetns] = useState('숫자에 색깔이나 사물을 연결하며 다양한 수 개념을 익히고, 구슬이나 블록을 이용해 수의 크기를 비교하고 세는 능력을 키웠어요.');
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju7CtmfKnVbcHB67UAV-jn_y')
  const linkList = [
    {page:2,link:'https://youtu.be/TecJLVF4UGY',img:videoThumbnail1},
    {page:2,link:'https://youtu.be/8lcpywPir78',img:videoThumbnail2},
    {page:5,link:'https://youtu.be/x1dRnw_AT4c',img:videoThumbnail3},
    {page:7,link:'https://youtu.be/UyVp04Dh8Yk',img:videoThumbnail4},
    {page:7,link:'https://youtu.be/6MxdkDdU-8U',img:videoThumbnail5},
    {page:13,link:'https://youtu.be/aDSh6SdCPOg',img:videoThumbnail6},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:videoThumbnail7},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:videoThumbnail8}, 
   ]
   
  const handleGoLink=(link)=>{
    window.open(link)
  }

   
   
   
  return (
  <div className='mainCenterLayoutHome'>
    <div className='imgBoxHome'>
      {/* <div className='stepInfoHome' style={{border:'3px solid #7DCBF5'}}>한글 1단계 5호</div> */}
      <div className='contentsLinkBtnHome' style={{right:0}}>
        <div className='contentsLinkHome' style={{right:0}}>▶</div>
        <div className='contentsLinkTextHome'>영상 시청</div>
      </div>
      <img src={m5img} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome' style={{backgroundColor:'#B7EDEA'}}>
      <div className='titleHome' style={{color:'#323232'}}>
        까르르수학 가정안내문<br/>
        2단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:'#61C1BA'}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''style={{width:100,height:'fit-content',borderRadius:10,border:'1px solid #dcdcdc',}}/>
          <img src={bookVideo} alt='' style={{width:140,height:'fit-content',borderRadius:10,marginLeft:-50,border:'1px solid #dcdcdc'}}/>
        </div> 
        <div>
          {studyContetns}
        </div>   
      
      
      </div>
       <div className='boxTitleHome' style={{backgroundColor:'#61C1BA'}}>
        
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
          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>    */}
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M2_5;
