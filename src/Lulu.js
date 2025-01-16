import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';
import krrStepOn0 from './resource/krrStep0.svg';
import krrStepOn1 from './resource/krrStep1.svg';
import krrStepOn2 from './resource/krrStep2.svg';
import krrStepOn3 from './resource/krrStep3.svg';
import eliivyStepOn0 from './resource/eliivyStep0.svg';
import eliivyStepOn1 from './resource/eliivyStep1.svg';
import eliivyStepOn2 from './resource/eliivyStep2.svg';
import eliivyStepOn3 from './resource/eliivyStep3.svg';
import pptOn from './resource/ic_ppt_on.svg';
import pptOff from './resource/ic_ppt_off.svg';
import workbookOn from './resource/ic_workbook_on.svg';
import workbookOff from './resource/ic_workbook_off.svg';
import gameOn from './resource/ic_game_on.svg';
import gameOff from './resource/ic_game_off.svg';  
import bg from './resource/bg.svg';
import stars from './resource/stars.svg';
import circle from './resource/circle.svg';

import t0111 from './resource/thumbnail/Lulu/littles/1-1-1.jpg';
import t0112 from './resource/thumbnail/Lulu/littles/1-1-2.jpg';
import t0113 from './resource/thumbnail/Lulu/littles/1-1-3.jpg';
import t0114 from './resource/thumbnail/Lulu/littles/1-1-4.jpg';
import t0115 from './resource/thumbnail/Lulu/littles/1-1-5.jpg';
import t0121 from './resource/thumbnail/Lulu/littles/1-2-1.jpg';
import t0122 from './resource/thumbnail/Lulu/littles/1-2-2.jpg';
import t0123 from './resource/thumbnail/Lulu/littles/1-2-3.jpg';
import t0124 from './resource/thumbnail/Lulu/littles/1-2-4.jpg';
import t0125 from './resource/thumbnail/Lulu/littles/1-2-5.jpg';
import t0131 from './resource/thumbnail/Lulu/littles/1-3-1.jpg';
import t0132 from './resource/thumbnail/Lulu/littles/1-3-2.jpg';
import t0133 from './resource/thumbnail/Lulu/littles/1-3-3.jpg';
import t0134 from './resource/thumbnail/Lulu/littles/1-3-4.jpg';
import t0135 from './resource/thumbnail/Lulu/littles/1-3-5.jpg';
import t0141 from './resource/thumbnail/Lulu/littles/1-4-1.jpg';
import t0142 from './resource/thumbnail/Lulu/littles/1-4-2.jpg';
import t0143 from './resource/thumbnail/Lulu/littles/1-4-3.jpg';
import t0144 from './resource/thumbnail/Lulu/littles/1-4-4.jpg';
import t0145 from './resource/thumbnail/Lulu/littles/1-4-5.jpg';
import t0511 from './resource/thumbnail/Lulu/littles/5-1-1.jpg';
import t0512 from './resource/thumbnail/Lulu/littles/5-1-2.jpg';
import t0513 from './resource/thumbnail/Lulu/littles/5-1-3.jpg';
import t0514 from './resource/thumbnail/Lulu/littles/5-1-4.jpg';
import t0515 from './resource/thumbnail/Lulu/littles/5-1-5.jpg';
import t0521 from './resource/thumbnail/Lulu/littles/5-2-1.jpg';
import t0522 from './resource/thumbnail/Lulu/littles/5-2-2.jpg';
import t0523 from './resource/thumbnail/Lulu/littles/5-2-3.jpg';
import t0524 from './resource/thumbnail/Lulu/littles/5-2-4.jpg';
import t0525 from './resource/thumbnail/Lulu/littles/5-2-5.jpg';
import t0531 from './resource/thumbnail/Lulu/littles/5-3-1.jpg';
import t0532 from './resource/thumbnail/Lulu/littles/5-3-2.jpg';
import t0533 from './resource/thumbnail/Lulu/littles/5-3-3.jpg';
import t0534 from './resource/thumbnail/Lulu/littles/5-3-4.jpg';
import t0535 from './resource/thumbnail/Lulu/littles/5-3-5.jpg';
import t0541 from './resource/thumbnail/Lulu/littles/5-4-1.jpg';
import t0542 from './resource/thumbnail/Lulu/littles/5-4-2.jpg';
import t0543 from './resource/thumbnail/Lulu/littles/5-4-3.jpg';
import t0544 from './resource/thumbnail/Lulu/littles/5-4-4.jpg';
import t0545 from './resource/thumbnail/Lulu/littles/5-4-5.jpg';

import character from './resource/character.mp4';
import luluCharacter from './resource/luluCharacter.mp4';
import krrLogo from './resource/krr logo.svg';
import hanLogo from './resource/han logo.svg';
import mathLogo from './resource/math logo.svg'
import zemboLogo from './resource/zembo logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'
import instaLogo from './resource/instaLogo.svg';
import youtubeLogo from './resource/youtubeLogo.svg';
import blogLogo from './resource/blogLogo.svg';
import testWorkbook1 from './resource/test1.png';
import testWorkbook2 from './resource/test2.png';
import testWorkbook3 from './resource/test3.png';
import { useLocation } from 'react-router-dom';

function Lulu() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const stepIdx = location?.state?.idx!==undefined?location?.state?.idx:0;

  const [isHovering, setIsHovering] = useState(1);
  // 룰루 -> 1
  // 까르르 -> 2
  // 룰루 -> 3
  const [scrollDown,setScrollDown] = useState(true); 
  const [scrollY,setScrollY] = useState(0);
  const [dialog,setDialog] = useState(false);
  const [dialogTitle,setDialogTitle] = useState('');
  const [dialogImg,setDialogImg] = useState(null);
  const [navDialog,setNavDialog] = useState(false);
  const [step,setStep] = useState(stepIdx) 
 
  const [ctgr,setCtgr] = useState(10)
  // 1학기 -> 0
  // 7호 -> 70
  // 8호 -> 80
  // 잼보 -> 100
  
  //1호 -> 10
  //4호 -> 20

  const handleDialog=(title,img)=>{
    setDialog(true);
    setDialogTitle(title);
    setDialogImg(img)
  }

  
  const musicList = [
    {ctgr:100,css:'yellowbox',img:t0111,vimeo:'863486872',title:'처음 나의 모습은?'},
    {ctgr:100,css:'pinkbox',  img:t0111,vimeo:'863486872',title:'귤농장 노래'},
  ]
  const contentsList = [

    // Step1 -> 1호
    {week:1,css:'pinkbox',  ctgr:10,title:'1주차 월요일',img:t0111,vimeo:'814084830',game:'',ppt:'',workbook:''},
    {week:1,css:'yellowbox',ctgr:10,title:'1주차 화요일',img:t0112,vimeo:'814084830',game:'',ppt:'',workbook:''},
    {week:1,css:'pinkbox',  ctgr:10,title:'1주차 수요일',img:t0113,vimeo:'814084767',game:'',ppt:'',workbook:''},
    {week:1,css:'yellowbox',ctgr:10,title:'1주차 목요일',img:t0114,vimeo:'814084767',game:'',ppt:'',workbook:''},
    {week:1,css:'pinkbox',  ctgr:10,title:'1주차 금요일',img:t0115,vimeo:'814084767',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:10,title:'2주차 월요일',img:t0121,vimeo:'814089365',game:'',ppt:'',workbook:''},
    {week:2,css:'pinkbox',  ctgr:10,title:'2주차 화요일',img:t0122,vimeo:'814089365',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:10,title:'2주차 수요일',img:t0123,vimeo:'814089406',game:'',ppt:'',workbook:''},
    {week:2,css:'pinkbox',  ctgr:10,title:'2주차 목요일',img:t0124,vimeo:'814089406',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:10,title:'2주차 금요일',img:t0125,vimeo:'814089406',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:10,title:'3주차 월요일',img:t0131,vimeo:'814089716',game:'',ppt:'',workbook:''},
    {week:3,css:'yellowbox',ctgr:10,title:'3주차 화요일',img:t0132,vimeo:'814089716',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:10,title:'3주차 수요일',img:t0133,vimeo:'814089754',game:'',ppt:'',workbook:''},
    {week:3,css:'yellowbox',ctgr:10,title:'3주차 목요일',img:t0134,vimeo:'814089754',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:10,title:'3주차 금요일',img:t0135,vimeo:'814089754',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:10,title:'4주차 월요일',img:t0141,vimeo:'814089793',game:'',ppt:'',workbook:''},
    {week:4,css:'pinkbox',  ctgr:10,title:'4주차 화요일',img:t0142,vimeo:'814089793',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:10,title:'4주차 수요일',img:t0143,vimeo:'814089821',game:'',ppt:'',workbook:''},
    {week:4,css:'pinkbox',  ctgr:10,title:'4주차 목요일',img:t0144,vimeo:'814089821',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:10,title:'4주차 금요일',img:t0145,vimeo:'814089821',game:'',ppt:'',workbook:''},


    // Step1 -> 4호
    {week:1,css:'pinkbox',  ctgr:20,title:'1주차 월요일',img:t0511,vimeo:'841119499',game:'',ppt:'',workbook:''},
    {week:1,css:'yellowbox',ctgr:20,title:'1주차 화요일',img:t0512,vimeo:'841119499',game:'',ppt:'',workbook:''},
    {week:1,css:'pinkbox',  ctgr:20,title:'1주차 수요일',img:t0513,vimeo:'841119583',game:'',ppt:'',workbook:''},
    {week:1,css:'yellowbox',ctgr:20,title:'1주차 목요일',img:t0514,vimeo:'841119583',game:'',ppt:'',workbook:''},
    {week:1,css:'pinkbox',  ctgr:20,title:'1주차 금요일',img:t0515,vimeo:'841119583',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:20,title:'2주차 월요일',img:t0521,vimeo:'841119644',game:'',ppt:'',workbook:''},
    {week:2,css:'pinkbox',  ctgr:20,title:'2주차 화요일',img:t0522,vimeo:'841119644',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:20,title:'2주차 수요일',img:t0523,vimeo:'841119739',game:'',ppt:'',workbook:''},
    {week:2,css:'pinkbox',  ctgr:20,title:'2주차 목요일',img:t0524,vimeo:'841119739',game:'',ppt:'',workbook:''},
    {week:2,css:'yellowbox',ctgr:20,title:'2주차 금요일',img:t0525,vimeo:'841119739',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:20,title:'3주차 월요일',img:t0531,vimeo:'842162035',game:'',ppt:'',workbook:''},
    {week:3,css:'yellowbox',ctgr:20,title:'3주차 화요일',img:t0532,vimeo:'842162035',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:20,title:'3주차 수요일',img:t0533,vimeo:'842162188',game:'',ppt:'',workbook:''},
    {week:3,css:'yellowbox',ctgr:20,title:'3주차 목요일',img:t0534,vimeo:'842162188',game:'',ppt:'',workbook:''},
    {week:3,css:'pinkbox',  ctgr:20,title:'3주차 금요일',img:t0535,vimeo:'842162188',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:20,title:'4주차 월요일',img:t0541,vimeo:'842168055',game:'',ppt:'',workbook:''},
    {week:4,css:'pinkbox',  ctgr:20,title:'4주차 화요일',img:t0542,vimeo:'842168055',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:20,title:'4주차 수요일',img:t0543,vimeo:'842175681',game:'',ppt:'',workbook:''},
    {week:4,css:'pinkbox',  ctgr:20,title:'4주차 목요일',img:t0544,vimeo:'842175681',game:'',ppt:'',workbook:''},
    {week:4,css:'yellowbox',ctgr:20,title:'4주차 금요일',img:t0545,vimeo:'842175681',game:'',ppt:'',workbook:''},

 
      
 
     
   ]


    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
 
    

  window.addEventListener('scroll', (e) => {
     
  
    if(window.scrollY>scrollY){
      setScrollDown(false) 
      setScrollY(window.scrollY)
    }else{ 
      setScrollDown(true) 
      setScrollY(window.scrollY)
    }
     
   
  });

  const handleMenuMousOver = (idx) => {
    setScrollDown(true)
    setIsHovering(idx)
  }
    
  const handleStepChange = (idx,link) => {
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }  

  const handleNavStepChange = (idx,link) => {
    setNavDialog(false)
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }


  const handleMouseOut = (idx) => {
    
    if(scrollY>=90){
      // setScrollDown(false)
    }

    setIsHovering(idx)
  }

  const handleGoVimeo = (link) => {
    window.open('https://vimeo.com/'+link,"_top")
  }
  
  const handleGame = (code) => {
    window.open(code,'pop')
  }

  const handleCtgrCk = (idx) => {
    if(idx<=100){
      setCtgr(idx)
    }else{
      setCtgr(100)
    }

    window.scrollTo(0,0)  
    setScrollY(0)
  }

  useEffect(() => {
    if(dialog){

      document.body.style= `overflow: hidden`;
      return () => document.body.style = `overflow: auto`
    }
  }, [dialog])
  
 
   
  return (
    <div className='mainLayout'>
      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' />

          <div className='menuBarMenu'> 

            <div onMouseOver={()=>handleMenuMousOver(1)}
                onClick={()=>handleStepChange(step,'../Lulu')}
                className={isHovering===1?'titleMenuOnLulu':'titleMenuOff'}>룰루
            </div>
            <div onMouseOver={()=>handleMenuMousOver(2)}
                className={isHovering===2?'titleMenuOnLulu':'titleMenuOff'}
                onClick={()=>handleStepChange(1,'../Krr')}>까르르한글수
            </div>
            <div onMouseOver={()=>handleMenuMousOver(3)}
                     className={isHovering===3?'titleMenuOnLulu':'titleMenuOff'}
                onClick={()=>handleStepChange(4,'../ElliIvy')}>ElliIvy
            </div>
            
            <div className='goSkBtn goSkLulu' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
          </div>

          <div className='navMenuBar'>
            <div className='navTitleLulu'>
              룰루
            </div>
            <div className='navMenu bgPink' onClick={()=>setNavDialog(true)}>
              <div className='navLine'></div>
              <div className='navLine'></div>
              <div className='navLine'></div>
            </div>
          </div>
        </div>
      </div> 
      {isHovering===1?
          <div className={scrollY<90 || scrollDown?'subMenu subMenuOn':'subMenu subMenuOff'}>
                {/* <div style={{minWidth:465}}/> */}
                
                <div onClick={()=>handleStepChange(0,'../Lulu')}  className={step===0?'sm subMenuItemOn':'subMenuItemOff'}>
                  <img src={krrStepOn0} alt=''/>
                  <div className='menuText'>LITTLES</div>
                  <div className='menuLine lineOn0'/>
                  
                </div>
             

                {/* <video  className='subMenuCharacter'  autoPlay muted loop style={{marginLeft:315}}>
                  <source src={luluCharacter} type="video/mp4"></source>
                </video> */}
          </div>
          :isHovering===2?
          <div className={scrollY<90 || scrollDown ?'subMenu subMenuOn':'subMenu subMenuOff'}>
              {/* <div style={{minWidth:355}}/> */}
              
              <div onClick={()=>handleStepChange(1,'../Krr')}  className={step===1?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn1} alt=''/>
                <div className='menuText'>STEP1</div>
                <div className='menuLine lineOn1'/>
              </div>
            

              <div onClick={()=>handleStepChange(2,'../Krr')}   className={step===2?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn2} alt=''/>
                <div className='menuText'>STEP2</div>
                <div className='menuLine lineOn2'/>
                
              </div>
            

              <div onClick={()=>handleStepChange(3,'../Krr')}   className={step===3?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn3} alt=''/>
                <div className='menuText'>STEP3</div>
                <div className='menuLine lineOn3'/>
                
              </div>
            
               {/* <video  className='subMenuCharacter'  autoPlay muted loop style={{marginLeft:205}}>
                <source src={character} type="video/mp4"></source>
              </video> */}

          </div>
          :
          <div className={scrollY<90 || scrollDown ?'subMenu subMenuOn':'subMenu subMenuOff'}>
              {/* <div style={{minWidth:300}}/> */}
              
              <div onClick={()=>handleStepChange(4,'../ElliIvy')}  className={step===4?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn0} alt=''/>
                <div className='menuText'>LITTLES</div>
                <div className='menuLine lineOn0'/>
              </div>
            

              <div onClick={()=>handleStepChange(5,'../ElliIvy')}   className={step===5?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn1} alt=''/>
                <div className='menuText'>STEP1</div>
                <div className='menuLine lineOn1'/>
                
              </div>
            

              <div onClick={()=>handleStepChange(6,'../ElliIvy')}   className={step===6?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn2} alt=''/>
                <div className='menuText'>STEP2</div>
                <div className='menuLine lineOn2'/>
                
              </div>

              <div onClick={()=>handleStepChange(7,'../ElliIvy')}   className={step===7?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn3} alt=''/>
                <div className='menuText'>STEP3</div>
                <div className='menuLine lineOn3'/>
                
              </div>


              {/* <img className='subMenuCharacter' src={character} alt='' style={{marginLeft:150}}/> */}
          </div>
      
      }
      
      
      <div onMouseOver={()=>handleMouseOut(1)} className='centerLayout'>
  
        
      
        
          <div className='centerLayoutIn'>
 
            <div className='ctgrLayout'>
              <div onClick={()=>handleCtgrCk(10)} className={ctgr===10?'ctgrItemOnLulu ctgrItem':'ctgrItemOff ctgrItem'}>
                1호
              </div>
              <div onClick={()=>handleCtgrCk(20)} className={ctgr===20?'ctgrItemOnLulu ctgrItem':'ctgrItemOff ctgrItem'}>
                4호
              </div>
{/*               
              <div onClick={()=>handleCtgrCk(100)} className={ctgr===100?'ctgrItemOnLulu ctgrItem':'ctgrItemOff ctgrItem'}>
                잼보
              </div> 
               */}
              
            </div>
 
 

            {ctgr<100?
              <div className='list'>
                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===1).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                      
                      
                  
                      <div className='contentsImgBox'> 
                        <a href={`https://player.vimeo.com/video/${val.vimeo}`} target='_bank'>
                          <img src={val.img} alt='' style={{width:190}}/>
                        </a>
                      </div>
                    
                      <div className='contentsTitle' style={{height:75}}>
                        {val.title}
                      </div>
                      
                      {/* <div className='contentsBtn'>
                        {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                        {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        }
                      </div> */}
                    </div>
                  )}
                </div>
                <div className='listTitle colorPink'>
                  룰루 STEP{step}-{ctgr===10?1:2}호 {'<2주차>'}
                </div>


                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===2).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
              
                      <div className='contentsImgBox'> 
                        <a href={`https://player.vimeo.com/video/${val.vimeo}`} target='_bank'>
                          <img src={val.img} alt='' style={{width:190}}/>
                        </a>
                      </div>
                    
                      <div className='contentsTitle' style={{height:75}}>
                        {val.title}
                      </div>
                      
                      {/* <div className='contentsBtn'>
                        {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                        {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        }
                      </div> */}
                    </div>
                  )}
                </div>
                <div className='listTitle colorPink'>
                  룰루 STEP{step}-{ctgr===10?1:2}호 {'<3주차>'}
                </div>


                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===3).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                  
                    <div className='contentsImgBox'> 
                      <a href={`https://player.vimeo.com/video/${val.vimeo}`} target='_bank'>
                        <img src={val.img} alt='' style={{width:190}}/>
                      </a>
                    </div>
                  
                    <div className='contentsTitle' style={{height:75}}>
                      {val.title}
                    </div>
                    
                    {/* <div className='contentsBtn'>
                      {val.game!==''?
                        <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                        :<img src={gameOff} alt='' />
                      }
                      {val.ppt!==''?
                        <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                        :<img src={pptOff} alt='' />
                      }
                      {val.workbook!==''?
                        <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                        :<img src={workbookOff} alt='' />
                      }
                    </div> */}
                  </div>
                  )}
                </div>
                <div className='listTitle colorPink'>
                  룰루 STEP{step}-{ctgr===10?1:2}호 {'<4주차>'}
                </div>

                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===4).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                  
                    <div className='contentsImgBox'> 
                      <a href={`https://player.vimeo.com/video/${val.vimeo}`} target='_bank'>
                        <img src={val.img} alt='' style={{width:190}}/>
                      </a>
                    </div>
                  
                    <div className='contentsTitle' style={{height:75}}>
                      {val.title}
                    </div>
                    
                    {/* <div className='contentsBtn'>
                      {val.game!==''?
                        <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                        :<img src={gameOff} alt='' />
                      }
                      {val.ppt!==''?
                        <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                        :<img src={pptOff} alt='' />
                      }
                      {val.workbook!==''?
                        <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                        :<img src={workbookOff} alt='' />
                      }
                    </div> */}
                  </div>
                  )}
                </div>
              </div>
              : 
              <div className='musicListLayout'>             
                {musicList.filter((vval,vidx)=>vval.ctgr===step+ctgr).map((val,idx)=>
                  <div className={`musicList ${val.css}`} key={idx}>
                    <img className='musicItem' src={val.img} alt=''/>
                    
                    <div className='musicTitle'>
                      {val.title}
                    </div>
                  </div>
                )}
              </div>
            }
                  
                       

              <div className='bottomLayout'>
                <div className='bottomLayoutIn'>
                  <img src={skGray} alt=''/>
                  <div className='bottomText'>
                    <div>(주)섬김 │ 대표 : 임영수</div> 
                    <div>사업자등록번호 : 886-86-00204</div>
                    <div>대표번호 1533-2473</div>
                    <div>©2023 by (주)섬김 All Rights Reserved.</div>
                  </div>
                  <div className='bottomBtn'>
                    <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krrhangeul_official/')}/>
                    <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
                    {/* <img src={blogLogo} alt='' /> */}
                  </div>
                </div>
                
              </div>
        
      
          </div>        
           
        {/* <div style={{width:'100vw',height:50,backgroundColor:'#fff',position:'relative',zIndex:1000,padding:30,boxSizing:'border-box',borderTop:'1px solid #dcdcdc'}}>
          ㅇㅇ
        </div> */}
      </div>


      {/* <img src={bg} alt='' style={{width:"100%",height:'100%',position:'fixed',bottom:0,zIndex:10,objectFit:'cover'}} /> */}
      <img src={stars} alt='' className='stars' />
      <img src={circle} alt='' className='circle1'/>
      <img src={circle} alt='' className='circle2'/>
        
      {dialog?
      <div className='dialogBg' onClick={()=>setDialog(false)}>
        <div onClick={(e)=>e.stopPropagation()} className='dialogLayout'>
          <div className='dialogStatusBar'>
            <div className='dialogStatusTitle'>
              {dialogTitle}
            </div>
            <div className='dialogStatusCancel' onClick={()=>setDialog(false)}>X</div>
          </div>
          <div className='dialogImgBox'>  
           <img src={dialogImg} alt=''/>
          </div>
        </div>
        
      </div>
      :''}

    {navDialog===true?
      <div className={navDialog?'navDialog navDialogOn':'navDialog navDialogOff'}> 
        <div className='navDialogStatusBar'>
          <div className='navDialogImgBar'>
            <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' />
          </div>

          <div className='navDialogStatusCancel bgPink' onClick={()=>setNavDialog(false)}>
            <div className='navCancelLine1'></div>
            <div className='navCancelLine2'></div>
          </div>
             
        </div>
        <div className='navDialogMenu'>  
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitle colorPink' onClick={()=>handleNavStepChange(0,'../Lulu')}>안녕! 룰루</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(0,'../Lulu')}  className={step===0?'navDialogMenuStepOn navStepLuluOn':'navDialogMenuStepOff'}>LITTLES</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(1,'../Krr')}>까르르한글수</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(1,'../Krr')}   className={step===1?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'} >STEP1</div>
              <div onClick={()=>handleNavStepChange(2,'../Krr')}   className={step===2?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(3,'../Krr')}   className={step===3?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(4,'../ElliIvy')}>ElliIvy English</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(4,'../ElliIvy')}  className={step===4?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>LITTLES</div>
              <div onClick={()=>handleNavStepChange(5,'../ElliIvy')}  className={step===5?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP1</div>
              <div onClick={()=>handleNavStepChange(6,'../ElliIvy')}  className={step===6?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(7,'../ElliIvy')}  className={step===7?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div>
       
        </div>
      </div> :''}


    </div>
  );
}

export default Lulu;
