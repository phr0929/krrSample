 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/1/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/1/zembo1.png'
import bookVideo from './resource/1/h1video.png'
import book from './resource/step1book.png'
import video1 from './resource/1/h1_1.png'
import video2 from './resource/1/h1_2.png'
import video3 from './resource/1/h1_3.png'
import video4 from './resource/1/h1_4.png'
import video5 from './resource/1/h1_5.png' 

function H1_1() {

   const handleGoVimeo=(link)=>{
     
   
  let width = window.screen.width * 0.8;
  let height = width * 0.5625; // 16:9 비율 유지
  let left = (window.screen.width - width) / 2;
  let top = (window.screen.height - height) / 2;

  let option = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=${width},height=${height},left=${left},top=${top}`;


    window.open('https://player.vimeo.com/video/'+link, '_blank', option)
   }
   
  const [bgColor,setBgColor] = useState('#8ad05c')
  const [boxColor,setBoxColor] = useState('#62ba51')
  const [textColor,setTextColor] = useState('#fffbcf')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/4psJSFjuzMo')
  const [issue,setIssue] = useState(1)
  const [studyContetns,setStudyContetns] = useState(`이번 한글 시간에는 입 모양을 관찰하고 팔 동작 체조를 따라 하며 'ㅏ, ㅓ, ㅗ, ㅜ' 단모음의 소리와 형태를 감각적으로 익혔어요. 블록으로 글자를 꾸미고 챈트(노래)를 부르며 낱말의 시작 소리를 찾는 연습을 했어요.`);
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju65XaQVnthbFtIgVIBu563c')
  const linkList = [
    {page:2, link:'https://youtu.be/3BqBJk2D184',img:video1},
    {page:5, link:'https://youtu.be/4psJSFjuzMo',img:video2},
    {page:10,link:'https://youtu.be/EZEPl_WOz3U',img:video3},
    {page:16,link:'https://youtu.be/2qMUmkjrNd8',img:video4},
    {page:16,link:'https://youtu.be/dyOmQI1b7CU',img:video5},   
   ]

  const [zembo, setZembo] = useState({
    title:'뽀뽀를 하면',
    title2:'',
    contents:`『뽀뽀를 하면』은 다양한 동물들이 서로 뽀뽀하는 따뜻한 장면을 통해 '사랑'이라는 감정을 배우는 이야기입니다. 상대방을 이해하고 배려하는 마음을 키우며, 서로의 다름과 차이를 존중하는 평화로운 정서를 익히게 합니다.`,
    img:zemboImg,
    link:'1163870863'
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
          <img src={bookVideo}  onClick={()=>handleGoLink(bookVideoLink)} alt='' className='bookVideoImgHome' style={{border:0}}/>
        </div> 
        <div style={{whiteSpace: "pre-line"}}>
          {studyContetns}
        </div>   
      
      
      </div>
      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
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
            <span>{code[0]}</span>
            <span>{code[1]}</span>            
            <span>{code[2]}</span>
            <span>{code[3]}</span>
            <span>{code[4]}</span>
            <span>{code[5]}</span>
          </div>
        </div>

         
      </div>


      <div className='boxTitleHome' style={{backgroundColor:boxColor}}>
        
        <div></div>
        <div>이달의 잼보 동화</div>
        <div></div>
      </div>
      <div className='zemboBoxHome'> 
        <img src={zembo.img} alt='' style={{cursor:'pointer'}}  onClick={()=>handleGoVimeo(zembo.link)}/>
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
        </div>

         <div style={{marginBottom:10,display:'flex',flexDirection:'row',justifyItems:'center'}}>
    
    
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[3].link)}>
            <img src={linkList[3].img} alt=''/> 
            <div>{linkList[3].page}p</div>
          </div>  
          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[4].link)}>
            <img src={linkList[4].img} alt=''/> 
            <div>{linkList[4].page}p</div>
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

export default H1_1;
