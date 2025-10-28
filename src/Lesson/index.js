import '../App.css';
import krrLogo from '../resource/krr logo.svg';
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'; 
import '../script.css' 
import './lesson.css' 
import '../contents.css'

import bgimg from './resource/bgimg.png';
import m1 from './resource/m1.png';
import m2 from './resource/m2.png';
import m3 from './resource/m3.png';
import h1 from './resource/h1.png';
import h2 from './resource/h2.png';
import h3 from './resource/h3.png';
import lulu from './resource/lulu.png';
import skGray from '../resource/sk_gray.svg';
import instaLogo from '../resource/instaLogo.svg';
import youtubeLogo from '../resource/youtubeLogo.svg';
 
function Lesson() {

// const [issue, setIssue] = useState(() => {
//   return localStorage.getItem('nowIssue') ?? 7;
// });

const [issue, setIssue] = useState(9)
 
  
  const lessonList = [
    {issue:1, luluImg:'',luluLink:'1122123659',
              step1Img:'',step1Link:'1115722318',setp2Img:'',step2Link:'1115722625',step3Img:'',step3Link:'1115722891',
              mStep1Img:'',mStep1Link:'1115722209',mSetp2Img:'',mStep2Link:'1115722558',mStep3Img:'',mStep3Link:'1115722842',},
    {issue:2, luluImg:'',luluLink:'1122123890',
              step1Img:'',step1Link:'1115723080',setp2Img:'',step2Link:'1115723169',step3Img:'',step3Link:'1115723197',
              mStep1Img:'',mStep1Link:'1115723049',mSetp2Img:'',mStep2Link:'1115723134',mStep3Img:'',mStep3Link:'1115723134',},
    {issue:3, luluImg:'',luluLink:'1122124001',
              step1Img:'',step1Link:'1115723273',setp2Img:'',step2Link:'1115723338',step3Img:'',step3Link:'1115723399',
              mStep1Img:'',mStep1Link:'1115723246',mSetp2Img:'',mStep2Link:'1115723312',mStep3Img:'',mStep3Link:'1115723380',},
    {issue:4, luluImg:'',luluLink:'1122124172',
              step1Img:'',step1Link:'1115723458',setp2Img:'',step2Link:'1115723519',step3Img:'',step3Link:'1115723616',
              mStep1Img:'',mStep1Link:'1115723435',mSetp2Img:'',mStep2Link:'1115723798',mStep3Img:'',mStep3Link:'1115723890',},
    {issue:5, luluImg:'',luluLink:'1122124207',
              step1Img:'',step1Link:'1115727113',setp2Img:'',step2Link:'1115727182',step3Img:'',step3Link:'1115727260',
              mStep1Img:'',mStep1Link:'1115727290',mSetp2Img:'',mStep2Link:'1115727156',mStep3Img:'',mStep3Link:'1115727235',},
    {issue:6, luluImg:'',luluLink:'1122124240',
              step1Img:'',step1Link:'1115727358',setp2Img:'',step2Link:'1115727429',step3Img:'',step3Link:'1115727472',
              mStep1Img:'',mStep1Link:'1115727327',mSetp2Img:'',mStep2Link:'1115727387',mStep3Img:'',mStep3Link:'1115727454',},
    {issue:7, luluImg:'',luluLink:'1122124280',
              step1Img:'',step1Link:'1115727544',setp2Img:'',step2Link:'1115727640',step3Img:'',step3Link:'1115727712',
              mStep1Img:'',mStep1Link:'1115727494',mSetp2Img:'',mStep2Link:'1115727594',mStep3Img:'',mStep3Link:'1115727681',},
    {issue:8, luluImg:'',luluLink:'1122131259',
              step1Img:'',step1Link:'1122131130',setp2Img:'',step2Link:'1122131226',step3Img:'',step3Link:'1122137241',
              mStep1Img:'',mStep1Link:'1122131103',mSetp2Img:'',mStep2Link:'1122131184',mStep3Img:'',mStep3Link:'1122142901',},
    {issue:9, luluImg:'',luluLink:'1131143104',
              step1Img:'',step1Link:'1131142818',setp2Img:'',step2Link:'1131142933',step3Img:'',step3Link:'1131143036',
              mStep1Img:'',mStep1Link:'1131142782',mSetp2Img:'',mStep2Link:'1131142882',mStep3Img:'',mStep3Link:'1131142989',},
    {issue:10,luluImg:'',luluLink:'',
              step1Img:'',step1Link:'',setp2Img:'',step2Link:'',step3Img:'',step3Link:'',
              mStep1Img:'',mStep1Link:'',mSetp2Img:'',mStep2Link:'',mStep3Img:'',mStep3Link:'',},
    {issue:11,luluImg:'',luluLink:'',
              step1Img:'',step1Link:'',setp2Img:'',step2Link:'',step3Img:'',step3Link:'',
              mStep1Img:'',mStep1Link:'',mSetp2Img:'',mStep2Link:'',mStep3Img:'',mStep3Link:'',},
    {issue:12,luluImg:'',luluLink:'',
              step1Img:'',step1Link:'',setp2Img:'',step2Link:'',step3Img:'',step3Link:'',
              mStep1Img:'',mStep1Link:'',mSetp2Img:'',mStep2Link:'',mStep3Img:'',mStep3Link:'',},

  ]

 

  const handleGoLink=(link)=>{
    navigate(`../Home/${link}`)
  }

  // useEffect(()=>{   
  //  const saved = localStorage.getItem('nowIssue');
  //  if(saved !== null){
  //   setIssue(Number(saved));
  //  }    
  // },[])
  
  // const handleIssue = (is) =>{
  //    window.localStorage.setItem("nowIssue",is)
  //    setIssue(is)
  // }

  const handleGoVimeo=(link)=>{
     
   
  let width = window.screen.width * 0.8;
  let height = width * 0.5625; // 16:9 비율 유지
  let left = (window.screen.width - width) / 2;
  let top = (window.screen.height - height) / 2;

  let option = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=${width},height=${height},left=${left},top=${top}`;


    window.open('https://player.vimeo.com/video/'+link, '_blank', option)
   }
 
  const navigate = useNavigate();   

  return (
    <div className='lessonLayoutBox' >
      <div className='lessonBgLayout'>
        <img src={bgimg} alt=''/>
        <div className='lessonBgBottomColor'> 
        </div>
      </div>

      <div className='lessonLayout'>
        {/* <div className='titleBarLesson'>
          <img src={krrLogo} alt=''/> 
        </div>
        <div className='subTitleLesson'>
          <div>수업을 더 쉽고 알차게!</div>
          <div style={{width:7,height:1}}></div>
          <div>수업TIP 영상을 활용해 보세요.</div>
        </div> */}

        <div className='issueBarLesson noselect'>
          <div className={issue===1?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(1)}>1호</div>          
          <div className={issue===2?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(2)}>2호</div>          
          <div className={issue===3?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(3)}>3호</div>          
          <div className={issue===4?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(4)}>4호</div>          
          <div className={issue===5?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(5)}>5호</div>          
          <div className={issue===6?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(6)}>6호</div>
          <div className={issue===7?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(7)}>7호</div>          
          <div className={issue===8?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(8)}>8호</div>       
          {lessonList[8].luluLink!==''?
            <div className={issue===9?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(9)}>9호</div>
            :<div className='lessonIssueBtnNull' >9호</div>
          }

          {lessonList[9].luluLink!==''?
            <div className={issue===10?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(10)}>10호</div>
            :<div className='lessonIssueBtnNull' >10호</div>
          }

          {lessonList[10].luluLink!==''?
            <div className={issue===11?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(11)}>11호</div>
            :<div className='lessonIssueBtnNull' >11호</div>
          }

          {lessonList[11].luluLink!==''?
            <div className={issue===12?'lessonIssueBtnOn':'lessonIssuetnOff'} onClick={()=>setIssue(12)}>12호</div>
            :<div className='lessonIssueBtnNull' >12호</div>
          }

           
        </div>
          

         
 
          <div className='tipListTitleLesson' style={{marginRight:15}}>
            ✏️ {issue}호 한글 수업 TIP
          </div>
       
        {/* {issue<8?
            <div className='tipListContentsLesson'>
              2025년 {issue + 1}월에 진행되었던 줌교육 영상입니다.<br/>2026년 {issue + 1}월에 수업 TIP영상이 새로 공개됩니다.
            </div>
            :<></>
          } */}

         
 
    
          
          <div className='tipListLesson noselect'>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].step1Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>1단계 {issue}호</div>
              <img src={h1} alt=''/>
            </div>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].step2Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>2단계 {issue}호</div>
              <img src={h2} alt=''/>
            </div>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].step3Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>3단계 {issue}호</div>
              <img src={h3} alt=''/>
            </div>
          </div>


          <div className='tipListTitleLesson' style={{marginRight:15}}>
            📐 {issue}호 수학 수업 TIP
          </div>

          <div className='tipListLesson noselect' style={{paddingBottom:40}}>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].mStep1Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>1단계 {issue}호</div>
              <img src={m1} alt=''/>
            </div>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].mStep2Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>2단계 {issue}호</div>
              <img src={m2} alt=''/>
            </div>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].mStep3Link)}>
              <div className='tipItemLessonBtn'>▶</div>
              <div className='tipItemLessonIssue'>3단계 {issue}호</div>
              <img src={m3} alt=''/>
            </div>
 
          </div>
   <div className='tipListTitleLesson' style={{marginRight:15}}>
            ✏️ {issue}호 룰루 수업 TIP
          </div>
          <div className='tipListLessonLulu noselect' style={{marginBottom:70}}>
            <div className='tipItemLesson' onClick={()=>handleGoVimeo(lessonList[issue-1].luluLink)}>
              <div className='tipItemLessonBtn' style={{border:'1px solid #dcdcdc'}}>▶</div>
              <div className='tipItemLessonIssue' style={{color:'#e2288a',textShadow: '0px 0px 3px #fff'}}>
                {/* {issue}호 */}
              </div>
              <img src={lulu} alt='' style={{border:'1px solid #dcdcdc'}}/>
            </div>
            
          </div>

  


 
  <div className='bottomLayout'>
        <div className='bottomLayoutIn'>
          <img src={skGray} alt=''/>
          <div className='bottomText'>
            <div>(주)섬김</div>
            <div>대표 : 임영수  │  사업자등록번호 : 886-86-00204</div>
            <div>대표번호 1533-2473</div>
            <div>©2023 by (주)섬김 All Rights Reserved.</div>
          </div>
          <div className='bottomBtn'>
            <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krr_edu_official/')}/>
            <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
            {/* <img src={blogLogo} alt='' /> */}
          </div>
        </div>
        
      </div>
      </div> 
     

    </div>

  
  );
}

export default Lesson;
