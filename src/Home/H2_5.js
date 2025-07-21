 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import h5img from './resource/5/h5img.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import contents0 from './resource/5/h5Step2Thumbnail0.png'
import contents1 from './resource/5/h5Step2Thumbnail1.png'
import book from './resource/5/h5Step2Book.png'
import videoThumbnail1 from './resource/5/h5Step2_4p_1.png'
import videoThumbnail2 from './resource/5/h5Step2_4p_2.png'
import videoThumbnail3 from './resource/5/h5Step2_8p_1.png'
import videoThumbnail4 from './resource/5/h5Step2_8p_2.png'
import videoThumbnail5 from './resource/5/h5Step2_14p_1.png'
import videoThumbnail6 from './resource/5/h5Step2_14p_2.png'

function H2_5() {
 
   
   
   
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
        2단계 5호
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
            자음과 모음이 만나 ‘라리’, ‘마미’, ‘바~비’가 되는 과정을 소리 내며 익히고, 노래와 챈트, 말놀이 동시로 글자의 구조를 재미있게 배웠어요.
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
            <div style={{fontWeight:700,marginBottom:0,marginTop:5}}>📗 개구쟁이 해리</div> 
          
            <div style={{fontWeight:700,marginBottom:10,marginTop:0}}>바다 괴물이 되었어요</div> 
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
            <div>4p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail2} alt=''/> 
            <div>4p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail3} alt=''/> 
            <div>8p</div>
          </div>
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail4} alt=''/> 
            <div>8p</div>
          </div>
        </div>

         <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          
          <div className='videoBoxImgHome'>
            <img src={videoThumbnail5} alt=''/> 
            <div>14p</div>
          </div>  

          <div className='videoBoxImgHome'>
            <img src={videoThumbnail6} alt=''/> 
            <div>14p</div>
          </div>  
 
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>



       
    </div>

  </div>
  );
}

export default H2_5;
