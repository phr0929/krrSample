 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/2/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/2/zembo1.png'
import bookVideo from './resource/2/h1video.png'
import book from './resource/step1book.png'
import video1 from './resource/2/h1_1.png'
import video2 from './resource/2/h1_2.png'
import video3 from './resource/2/h1_3.png'
import video4 from './resource/2/h1_4.png' 

function H1_2() {
  const [bgColor,setBgColor] = useState('#dfe986')
  const [boxColor,setBoxColor] = useState('#bcd365')
  const [textColor,setTextColor] = useState('#a7bc4b')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/OuzZo0Rm3So')
  const [issue,setIssue] = useState(2)
  const [studyContetns,setStudyContetns] = useState(`이번 한글 시간에는 입 모양을 관찰하며 'ㅏ, ㅓ, ㅗ, ㅜ' 단모음 발성을 연습하고, 비눗방울이 겹치는 영상과 플래시 카드를 통해 'ㅑ, ㅕ, ㅛ, ㅠ' 겹모음의 형태와 소리를 익혔어요. 블록으로 글자를 만들고 신체로 표현하며 한글을 놀이처럼 즐겼어요.`);
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju4Bj_l8XaUz20OPhMyAI0Jb')
  const linkList = [
    {page:4,link:'https://youtu.be/OuzZo0Rm3So',img:video1},
    {page:4,link:'https://youtu.be/BW4PIsVs62w',img:video2},
    {page:8,link:'https://youtu.be/Nlh2XYpiTyM',img:video3},
    {page:13,link:'https://youtu.be/41a0KcnRCa0',img:video4},
   ]

  const [zembo, setZembo] = useState({
    title:'친구끼리 사이좋게!',
    title2:'',
    contents:`『친구끼리 사이좋게!』는 눈사람을 만들다가 다투게 된 '피피'와 '포시'가 갈등을 해결하고 화해하는 과정을 담은 이야기입니다. 친구의 입장을 이해하고 먼저 사과하며 서로 양보하는 마음과 올바른 사회성을 기르도록 돕습니다.`,
    img:zemboImg,
    link:'https://youtu.be/zbhdd5woovk'
  }) 

  const [code,setCode] = useState('kwk159')

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
        1단계 {issue}호
      </div> 
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        <div></div>
        <div>학습 내용</div>
        <div></div>
      </div>
      <div className='noteHome'>  
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginBottom:20,marginTop:10}}>        
          <img src={book} alt='' className='bookImgHome' style={{border:0}}/>
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome'/>
        </div> 
        <div style={{whiteSpace: "pre-line"}}>
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
        <div style={{marginTop:15,marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
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

export default H1_2;
