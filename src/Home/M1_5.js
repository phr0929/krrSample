 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import m5img from './resource/5/m5img.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import contents0 from './resource/5/h5Step1Thumbnail0.png'
import contents1 from './resource/5/m5Step1Thumbnail1.png'
import book from './resource/5/m5Step1Book.png'
import videoThumbnail1 from './resource/5/m5Step1_2p_1.png'
import videoThumbnail2 from './resource/5/m5Step1_8p_1.png'
import videoThumbnail3 from './resource/5/m5Step1_13p_1.png'
import videoThumbnail4 from './resource/5/m5Step1_13p_2.png'
import videoThumbnail5 from './resource/5/m5Step1_13p_3.png' 
import videoThumbnail6 from './resource/5/m5Step1_16p_1.png'

function M1_5() {
 
   
   
   
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
        1단계 5호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:'#61C1BA'}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt=''style={{width:100,height:'fit-content',borderRadius:10,border:'1px solid #dcdcdc',}}/>
          <img src={contents1} alt='' style={{width:140,height:'fit-content',borderRadius:10,marginLeft:-50,border:'1px solid #dcdcdc'}}/>
        </div> 
        <div>
            1부터 10까지 숫자를 동물 캐릭터로 기억하고, 블록과 숫자를 짝지으며 수량과 순서를 놀이로 익혔답니다.
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
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail1} alt=''/> 
            <div>2p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail2} alt=''/> 
            <div>8p</div>
          </div>  

        </div>

         <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail3} alt=''/> 
            <div>13p</div>
          </div>
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail4} alt=''/> 
            <div>13p</div>
          </div>
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail5} alt=''/> 
            <div>13p</div>
          </div>   
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail6} alt=''/> 
            <div>16p</div>
          </div>   
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>


    </div>

  </div>
  );
}

export default M1_5;
