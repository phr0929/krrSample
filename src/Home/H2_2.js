 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/2/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/2/zembo2.png'
import bookVideo from './resource/2/h2video.png'
import book from './resource/step2book.png'
import video1 from './resource/2/h2_1.png'
import video2 from './resource/2/h2_2.png'
import video3 from './resource/2/h2_3.png'
import video4 from './resource/2/h2_4.png'
import video5 from './resource/2/h2_5.png'
import video6 from './resource/2/h2_6.png'
import video7 from './resource/2/h2_7.png'
import video8 from './resource/2/h2_8.png'
import video9 from './resource/2/h2_9.png'
import video10 from './resource/2/h2_10.png'
import video11 from './resource/2/h2_11.png'
import video12 from './resource/2/h2_12.png'
import video13 from './resource/2/h2_13.png'

function H2_2() {
  const [bgColor,setBgColor] = useState('#dfe986')
  const [boxColor,setBoxColor] = useState('#bcd365')
  const [textColor,setTextColor] = useState('#a7bc4b')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/hRcGn5DzK-w')
  const [issue,setIssue] = useState(2)
  const [studyContetns,setStudyContetns] = useState(`이번 한글 시간에는 자음 이야기 영상과 노래를 통해 자음의 이름과 순서를 배우고, '변해라 얍!' 놀이로 자음의 모양 변화를 이해했어요. '누굴까요' 챈트와 낱말 퀴즈를 풀며 자음(ㄱ~ㄹ)으로 시작하는 단어를 익히고 기초 문해력을 다졌어요.`);
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju6e1dwOzfvQaznx-nWWVhxI')
  const linkList = [
    {page:2,  link:'https://youtu.be/hRcGn5DzK-w',img:video1},
    {page:13, link:'https://youtu.be/tIkZRQ_nb0E',img:video2},
    {page:13, link:'https://youtu.be/mLiujAX4bJI',img:video3},
    {page:13, link:'https://youtu.be/S1z1n3Ictl4',img:video4}, 
    {page:14, link:'https://youtu.be/gfXKrESLwdg',img:video5},
    {page:14, link:'https://youtu.be/8M5oKb8vx_8',img:video6},
    {page:14, link:'https://youtu.be/SeXE-IaCCN0',img:video7},
    {page:15, link:'https://youtu.be/47pqd2Esxog',img:video8}, 
    {page:15, link:'https://youtu.be/pSiIikQ2RIo',img:video9},
    {page:15, link:'https://youtu.be/0ZTOXkeAFng',img:video10},
    {page:16, link:'https://youtu.be/Yr51BQJl0Is',img:video11},
    {page:16, link:'https://youtu.be/GqvgZSP04fg',img:video12}, 
    {page:16, link:'https://youtu.be/o_t4HHqEzS8',img:video13}, 
   ]

  const [zembo, setZembo] = useState({
    title:'내 의자에 북극곰이 앉아 있어!',
    title2:'',
    contents:`『내 의자에 북극곰이 앉아 있어!』는 생쥐가 자신의 의자에 무단으로 앉은 북극곰을 다양한 방법으로 설득하는 과정을 그린 이야기입니다. 이 책은 아이들이 소유 개념을 익히고, 자신의 권리를 존중받는 동시에 다른 사람의 것도 존중하는 태도를 배우도록 도와줍니다.`,
    img:zemboImg,
    link:'1171999135'
  }) 

  const [code,setCode] = useState('jus649')

  const handleGoLink=(link)=>{
    window.open(link)
  }
     const handleGoVimeo=(link)=>{
     
   
    let width = window.screen.width * 0.8;
    let height = width * 0.5625; // 16:9 비율 유지
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;

    let option = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=${width},height=${height},left=${left},top=${top}`;


    window.open('https://player.vimeo.com/video/'+link, '_blank', option)
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
        2단계 {issue}호
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
        <img src={zembo.img} alt='' style={{cursor:'pointer'}} onClick={()=>handleGoVimeo(zembo.link)}/>
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


      </div>


      <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>


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



      <div style={{marginBottom:15,display:'flex',flexDirection:'row',justifyItems:'center'}}>
          

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[10].link)}>
            <img src={linkList[10].img} alt=''/> 
            <div>{linkList[10].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[11].link)}>
            <img src={linkList[11].img} alt=''/> 
            <div>{linkList[11].page}p</div>
          </div>  

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[12].link)}>
            <img src={linkList[12].img} alt=''/> 
            <div>{linkList[12].page}p</div>
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

export default H2_2;
