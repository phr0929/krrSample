 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import h5img from './resource/5/h5img.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import contents0 from './resource/5/h5Step3Thumbnail0.png'
import contents1 from './resource/5/h5Step3Thumbnail1.png'
import book from './resource/5/h5Step3Book.png'
import videoThumbnail1 from './resource/5/h5Step3_2p_1.png'
import videoThumbnail2 from './resource/5/h5Step3_2p_2.png'
import videoThumbnail3 from './resource/5/h5Step3_6p_1.png'
import videoThumbnail4 from './resource/5/h5Step3_6p_2.png'
import videoThumbnail5 from './resource/5/h5Step3_6p_3.png'
import videoThumbnail6 from './resource/5/h5Step3_12p_1.png'
import videoThumbnail7 from './resource/5/h5Step3_15p_1.png'

function H3_5() {
 
   
   
   
  return (
  <div className='mainCenterLayoutHome'>
    <div className='imgBoxHome'>
      {/* <div className='stepInfoHome' style={{border:'3px solid #7DCBF5'}}>한글 1단계 5호</div> */}
      <div className='contentsLinkBtnHome' style={{right:0}}>
        <div className='contentsLinkHome' style={{right:0}}>▶</div>
        <div className='contentsLinkTextHome'>영상 시청</div>
      </div>
      <img src={h5img} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome'>
      <div className='titleHome'>
        까르르한글 가정안내문<br/>
        3단계 5호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
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
            ‘타다’처럼 소리는 같지만 뜻이 다른 동음이의어를 다양한 문장으로 표현하며 어휘력과 표현력을 길렀어요. 움직임 낱말도 익히며 동사의 개념을 배웠답니다. 
        </div>   
      
      
      </div>
      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
        
        <div></div>
        <div>쓰는한글 APP</div>
        <div></div>
      </div>
      <div className='writeHangeulHome'> 
         
      
        <div className='downloadTitleHome'>⬇️ 쓰는한글 다운로드 링크</div>

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
          <div className='admissionCodeTitleHome'>🔑 쓰는한글 STEP1 입장코드</div>
          <div className='admissionCodeTextHome'>
            <span>k</span>
            <span>w</span>            
            <span>k</span>
            <span>1</span>
            <span>5</span>
            <span>9</span>
          </div>
        </div>

         
      </div>


      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
        
        <div></div>
        <div>이달의 잼보 동화</div>
        <div></div>
      </div>
      <div className='zemboBoxHome'> 
          
        <img src={contents0} alt='' style={{cursor:'pointer'}}/>
         <div>
            <div style={{fontWeight:700,marginBottom:10,marginTop:5}}>📘 내 친구는 절대로 유니콘이 아냐!</div> 
            <div>『나는 우리 집 왕』은 가족의 사랑을 독차지하던 고양이가 새로운 가족 개를 맞이하면서 벌어지는 이야기입니다.
                이 책은 우리 아이들에게 함께하는 즐거움과 나누는 기쁨의 가치를 알려줍니다.</div>
         </div>
      </div>
 

      
      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
        
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
            <div>2p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail3} alt=''/> 
            <div>6p</div>
          </div>
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail4} alt=''/> 
            <div>6p</div>
          </div>
        </div>

         <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail5} alt=''/> 
            <div>6p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail6} alt=''/> 
            <div>12p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail7} alt=''/> 
            <div>15p</div>
          </div> 
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>



      

      
      {/* <div className='noteHome'>
          이번 호수에서는 받침이 없는 글자들이 어떻게 만들어지는지
           집중적으로 배웠답니다. '가, 나, 다, 라'처럼 쉬운 글자부터
            '마, 바, 사, 아', 그리고 '자, 차, 카, 타', '파, 하'까지
             영상을 보면서 글자들이 합쳐지는 과정을 눈으로 확인하고,
              선생님과 함께 재미있는 질문 놀이를 통해 글자를 머리에 쏙쏙 넣었어요.
               특히, 시작하는 낱말을 크게 소리 내어 말하는 연습을 하면서
                글자를 더욱 쉽게 기억할 수 있도록 도왔답니다.      
      </div> */}
    </div>

  </div>
  );
}

export default H3_5;
