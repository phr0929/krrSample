 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/1/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/1/zembo3.png'
import bookVideo from './resource/1/h3video.png'
import book from './resource/step3book.png'
import video1 from './resource/1/h3_1.png'
import video2 from './resource/1/h3_2.png'
import video3 from './resource/1/h3_3.png' 
import video4 from './resource/1/h3_4.png' 
import video5 from './resource/1/h3_5.png'
import video6 from './resource/1/h3_6.png'
import video7 from './resource/1/h3_7.png' 
import video8 from './resource/1/h3_8.png' 
import video9 from './resource/1/h3_9.png' 
import video10 from './resource/1/h3_10.png' 

function H3_1() {
  const [bgColor,setBgColor] = useState('#8ad05c')
  const [boxColor,setBoxColor] = useState('#62ba51')
  const [textColor,setTextColor] = useState('#fffbcf')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/8qAXyqoJ7XU')
  const [issue,setIssue] = useState(1)
  const [studyContetns,setStudyContetns] = useState(`이번 한글 시간에는 '산토끼' 노래의 가사를 바꿔 부르며 받침(ㄱ, ㄴ, ㄹ, ㅁ)의 소리 특징을 재미있게 익혔어요. 길 따라가기와 글자 쓰기 활동을 통해 받침이 있는 낱말을 정확히 읽고 쓰는 문해력을 강화했어요.`);
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju4-wO-VVR1fMMmD53_t9_CF')
  const linkList = [
    {page:2,  link:'https://youtu.be/8qAXyqoJ7XU',img:video1},
    {page:2,  link:'https://youtu.be/Z7gm-Oh7vMA',img:video2},
    {page:2,  link:'https://youtu.be/p9iaQ1j8Ebk',img:video3},
    {page:2,  link:'https://youtu.be/_VHLS7m9oNs',img:video4},
    {page:6,  link:'https://youtu.be/xLaMIgcywk8',img:video5},
    {page:7,  link:'https://youtu.be/lq0kviwmwys',img:video6},
    {page:7,  link:'https://youtu.be/1li0XwcBMR4',img:video7},
    {page:7,  link:'https://youtu.be/ZqFMx7bV4kY',img:video8}, 
    {page:13, link:'https://youtu.be/MlRiLOvo8lA',img:video9}, 
    {page:13, link:'https://youtu.be/JaVAisxfKsc',img:video10},  
  ]

  const [zembo, setZembo] = useState({
    title:'오늘은 나도 슈퍼 영웅!',
    title2:'',
    contents:`『오늘은 나도 슈퍼 영웅!』은 특별한 능력은 없지만, 친구의 힘든 마음을 따뜻하게 도와주는 평범한 아이 밀리의 이야기를 통해, 진짜 영웅은 착한 마음과 지혜로운 행동에 있다는 것을 보여주는 그림책입니다. 이 책은 아이들이 자기 안의 특별함을 발견하고, 더불어 살아가는 태도를 배우도록 도와줍니다.`,
    img:zemboImg,
    link:'https://youtu.be/b_Bie-Tw4To'
  }) 

  const [code,setCode] = useState('bds978')

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
      <img src={himg} alt='' className='mainImgHome'/>
    </div>
    <div className='contentsBoxHome'style={{backgroundColor:bgColor}}>
      <div className='titleHome' style={{color:textColor}}>
        까르르한글 가정안내문<br/>
        3단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt='' className='bookImgHome' style={{border:0}}/>
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

        <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>
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

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>
        </div>

        <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
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

export default H3_1;
