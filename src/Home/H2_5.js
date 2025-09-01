 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/5/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/5/zembo2.png'
import bookVideo from './resource/5/h2video.png'
import book from './resource/step2book.png'
import video1 from './resource/5/h2_1.png'
import video2 from './resource/5/h2_2.png'
import video3 from './resource/5/h2_3.png'
import video4 from './resource/5/h2_4.png'
import video5 from './resource/5/h2_5.png'
import video6 from './resource/5/h2_6.png'

function H2_5() {
 
  const [bgColor,setBgColor] = useState('#7DCBF5')
  const [boxColor,setBoxColor] = useState('#41A9D6')
  const [textColor,setTextColor] = useState('#fff')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/TcmAzT_TEP8')
  const [issue,setIssue] = useState(5)
  const [studyContetns,setStudyContetns] = useState('이번 한글 시간에는 ‘라리’, ‘마미’, ‘바~비’ 글자를 자·모음 합성 원리로 익히고, 노래·리듬 읽기·빠진 글자 쓰기·말놀이 동시로 읽기와 쓰기를 연습했어요.')
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju59LjW4eY7tNqfARKGGvi-q')
  const linkList = [
    {page:4,link:'https://youtu.be/TcmAzT_TEP8',img:video1},
    {page:4,link:'https://youtu.be/GP1y00_97Mc',img:video2},
    {page:8,link:'https://youtu.be/LEdNtY2SsQQ',img:video3},
    {page:8,link:'https://youtu.be/uYIAMCJCn4M',img:video4},
    {page:14,link:'https://youtu.be/plqmzZ81shc',img:video5},
    {page:14,link:'https://youtu.be/fPKnV2Jxfjs',img:video6},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video7},
    // {page:16,link:'https://youtu.be/ZO7Bu_M8mFs',img:video8}, 
   ]

  const [zembo, setZembo] = useState({
    title:'개구쟁이 해리',
    title2:'바다 괴물이 되었어요',
    contents:'『개구쟁이 해리, 바다 괴물이 되었어요』는 해리가 바닷말을 뒤집어써 사람들에게 바다 괴물로 오해받는 소동을 그린 이야기입니다. 외모만 보고 판단해서는 안 된다는 것을 깨닫고, 가족과 이웃에게 따뜻하게 배려하는 법을 배우게 합니다.',
    img:zemboImg,
    link:'https://youtu.be/9_gXvGLtcC0'
  }) 

  const [code,setCode] = useState('jus649')

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
    <div className='contentsBoxHome' style={{backgroundColor:bgColor}}>
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
          <img src={bookVideo}  className='bookVideoImgHome' onClick={()=>handleGoLink(bookVideoLink)} alt='' style={{border:0}}/>
        </div> 
        <div>
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
          <div className='admissionCodeTitleHome'>🔑 쓰는한글 STEP2 입장코드</div>
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
          </div>   */}

          {/* <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[7].link)}>
            <img src={linkList[7].img} alt=''/> 
            <div>{linkList[7].page}p</div>
          </div>   */}
        </div>
        <div style={{textAlign:'center',margin:5}}>가정에서도 아이와 함께 영상을 시청해보며 학습을 이어가보세요!</div>
      </div>



       
    </div>

  </div>
  );
}

export default H2_5;
