 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import h5img from './resource/5/h5img.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/5/h5Step3Thumbnail0.png'
import bookVideo from './resource/5/h5Step3Thumbnail1.png'
import book from './resource/5/h5Step3Book.png'
import videoThumbnail1 from './resource/5/h5Step3_2p_1.png'
import videoThumbnail2 from './resource/5/h5Step3_2p_2.png'
import videoThumbnail3 from './resource/5/h5Step3_6p_1.png'
import videoThumbnail4 from './resource/5/h5Step3_6p_2.png'
import videoThumbnail5 from './resource/5/h5Step3_6p_3.png'
import videoThumbnail6 from './resource/5/h5Step3_12p_1.png'
import videoThumbnail7 from './resource/5/h5Step3_15p_1.png'

function H3_5() {
 
   
  const [issue,setIssue] = useState(5);
  const [studyContetns,setStudyContetns] = useState('‘타다’처럼 소리는 같지만 뜻이 다른 동음이의어를 다양한 문장으로 표현하며 어휘력과 표현력을 길렀어요. 움직임 낱말도 익히며 동사의 개념을 배웠답니다.');
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju6Kvi2CMk5Z9Z9WIVABTbeZ')
  const linkList = [
    {page:2,link:'https://youtu.be/d-dIHC2ZMxc',img:videoThumbnail1},
    {page:2,link:'https://youtu.be/Zx9_dbJfX5s',img:videoThumbnail2},
    {page:6,link:'https://youtu.be/qWlV8FV1bWw',img:videoThumbnail3},
    {page:6,link:'https://youtu.be/HpB_W_VJfK4',img:videoThumbnail4},
    {page:6,link:'https://youtu.be/c8ATFeHtDqQ',img:videoThumbnail5},
    {page:12,link:'https://youtu.be/hpibGfrC2Yw',img:videoThumbnail6},
    {page:15,link:'https://youtu.be/Ehys4757e0M',img:videoThumbnail7},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:videoThumbnail8}, 
   ]

  const [zembo, setZembo] = useState({
    title:'내 친구는 절대로 유니콘이 아냐!',
    title2:'',
    contents:'『내 친구는 절대로 유니콘이 아냐!』는 유니콘처럼 보이지만 유니콘이 아닌 다양한 모습의 친구를 통해 펼쳐지는 상상 가득한 이야기입니다. 이 책은 우리 아이들이 다양한 모습 속에 담긴 특별함을 발견하고, 나와 다른 친구를 인정하는 마음을 배우게 해줍니다.',
    img:zemboImg,
    link:'https://youtu.be/ymXC0rjBCEc'
  }) 

  const [code,setCode] = useState('bds978');

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
      <img src={h5img} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome'>
      <div className='titleHome'>
        까르르한글 가정안내문<br/>
        3단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
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
          <div className='admissionCodeTitleHome'>🔑 쓰는한글 STEP3 입장코드</div>
          <div className='admissionCodeTextHome'>
            <span>{code[0]}</span>
            <span>{code[1]}</span>            
            <span>{code[2]}</span>
            <span>{code[3]}</span>
            <span>{code[4]}</span>
            <span>{code[5]}</span>
          </div>
        </div>

         
      </div>


      <div className='boxTitleHome' style={{backgroundColor:'#41A9D6'}}>
        
        <div></div>
        <div>이달의 잼보 동화</div>
        <div></div>
      </div>
       <div className='zemboBoxHome'>  

        <img src={zembo.img} alt='' style={{cursor:'pointer'}} onClick={()=>handleGoLink(zembo.link)}/>
        <div>
          <div style={{fontWeight:700,marginBottom:zembo.title2===''?10:0,marginTop:5}}>📗 {zembo.title}</div> 
          {zembo.title2===''?<></>:<div style={{fontWeight:700,marginBottom:10,marginTop:0}}>{zembo.title2}</div>}
          <div>{zembo.contents}</div>
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

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[6].link)}>
            <img src={linkList[6].img} alt=''/> 
            <div>{linkList[6].page}p</div>
          </div>  

          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>   */}
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
