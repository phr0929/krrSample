 
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import './home.css'
import { useLocation } from 'react-router-dom';  
import himg from './resource/6/himg.png'
import appstore from '../resource/appstore.png'
import playstore from '../resource/playstore.png'
import zemboImg from './resource/6/zembo1.png'
import bookVideo from './resource/6/h1video.png'
import book from './resource/6/h1book.png'
import video1 from './resource/6/h1_1.png'
import video2 from './resource/6/h1_2.png'
import video3 from './resource/6/h1_3.png'
import video4 from './resource/6/h1_4.png'
import video5 from './resource/6/h1_5.png'
import video6 from './resource/6/h1_6.png'
import video7 from './resource/6/h1_7.png'
import video8 from './resource/6/h1_8.png'
import video9 from './resource/6/h1_9.png'
import video10 from './resource/6/h1_10.png'
import video11 from './resource/6/h1_11.png'

function H1_6() {
  const [bgColor,setBgColor] = useState('#FFEBB4')
  const [boxColor,setBoxColor] = useState('#FFDA94')
  const [textColor,setTextColor] = useState('#3A3023')
   
  const [bookVideoLink,setBookVideoLink] = useState('https://youtu.be/UzZHp3BjovM')
  const [issue,setIssue] = useState(6)
  const [studyContetns,setStudyContetns] = useState('이번 한글 시간에는 ‘거~허’ 글자를 활용해 단어 만들기를 하고, 문장과 문장의 끝맺음 표현을 익히며 말놀이로 문해력을 키웠어요.');
  const [playListLink,setPlayListLink] = useState('https://www.youtube.com/playlist?list=PLanHTJ4pYju7aMHzcMGXue-crMNwYaA1I')
  const linkList = [
    {page:2,link:'https://youtu.be/J40_E12Ki_8',img:video1},
    {page:5,link:'https://youtu.be/dm_LDkLmTyQ',img:video2},
    {page:5,link:'https://youtu.be/16sJv0tZg0M',img:video3},
    {page:5,link:'https://youtu.be/IwCbZb43UP4',img:video4},
    {page:10,link:'https://youtu.be/194HSeACVb8',img:video5},
    {page:10,link:'https://youtu.be/vxYyVuVBUwk',img:video6},
    {page:10,link:'https://youtu.be/cQUtuubXdv0',img:video7},
    {page:10,link:'https://youtu.be/pxNQWkzISHM',img:video8}, 
    {page:14,link:'https://youtu.be/UzZHp3BjovM',img:video9}, 
    {page:14,link:'https://youtu.be/zsY-61bBKGY',img:video10}, 
    {page:14,link:'https://youtu.be/HUi6L8tTXaI',img:video11}, 
   ]

  const [zembo, setZembo] = useState({
    title:'개구쟁이 해리',
    title2:'꽃무늬 옷은 싫어요',
    contents:'『개구쟁이 해리, 꽃무늬 옷은 싫어요』는 해리가 할머니에게 받은 생일 선물이 마음에 들지 않아 몰래 버리려다 새로운 옷을 발견하게 되는 이야기입니다. 이 책은 아이들이 마음에 들지 않는 물건도 누군가에게는 소중할 수 있음을 알고, 존중하고 배려하는 태도를 배우게 해줍니다.',
    img:zemboImg,
    link:'https://youtu.be/G94CUD-fxLw'
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

          <div className='videoBoxImgHome' onClick={()=>handleGoLink(linkList[10].link)}>
            <img src={linkList[10].img} alt=''/> 
            <div>{linkList[10].page}p</div>
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

export default H1_6;
