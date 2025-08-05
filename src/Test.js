import testimg1 from './resource/testimg1.png';
import testimg2 from './resource/testimg2.png';
import testimg3 from './resource/testimg3.png';
import testimg4 from './resource/testimg4.png';
import './contents.css';
import { useState } from 'react';
import sound1 from './resource/sound.mp3';

import sound2 from './resource/sound2.mp3';

import sound3 from './resource/sound3.mp3';


function Test() {

   const [btn,setBtn] = useState(0);
   const [soundBtn,setSoundBtn] = useState(0);

   const handleBtnCk = (idx) => {
    setBtn(idx);
   }

  const handleBtnSoundCk = (idx) => {
    setSoundBtn(idx);
   }
   
   const pop =()=>{
    
    const sound = document.getElementById("click-sound");
    sound.currentTime = 0; // 여러 번 눌러도 처음부터 재생되도록
    sound.play();
   }

  return (
  <div style={{display:'flex',alignItems:'center',width:'100%', justifyContent:'center',position:'relative',flexDirection:'column',}}>
    
    <div style={{height:40,paddingTop:20,boxSizing:'border-box',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:btn===0?'#323232':'#fff',color:btn===0?'#fff':'#323232',fontSize:14,fontWeight:btn===0?700:400}} onClick={()=>handleBtnCk(0)}>효과1</div>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:btn===1?'#323232':'#fff',color:btn===1?'#fff':'#323232',fontSize:14,fontWeight:btn===1?700:400}} onClick={()=>handleBtnCk(1)}>효과2</div>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:btn===2?'#323232':'#fff',color:btn===2?'#fff':'#323232',fontSize:14,fontWeight:btn===2?700:400}} onClick={()=>handleBtnCk(2)}>효과3</div>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:btn===3?'#323232':'#fff',color:btn===3?'#fff':'#323232',fontSize:14,fontWeight:btn===3?700:400}} onClick={()=>handleBtnCk(3)}>효과4</div>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:btn===4?'#323232':'#fff',color:btn===4?'#fff':'#323232',fontSize:14,fontWeight:btn===4?700:400}} onClick={()=>handleBtnCk(4)}>효과5</div>
    </div>
    <div style={{height:70,boxSizing:'border-box',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:soundBtn===0?'#323232':'#fff',color:soundBtn===0?'#fff':'#323232',fontSize:14,fontWeight:soundBtn===0?700:400}} onClick={()=>handleBtnSoundCk(0)}>효과음1</div>
      <div style={{border:'1px solid #dcdcdc',borderRadius:10,padding:'5px 10px 5px 10px',margin:4,fontFamily:'Noto Sans KR',backgroundColor:soundBtn===1?'#323232':'#fff',color:soundBtn===1?'#fff':'#323232',fontSize:14,fontWeight:soundBtn===1?700:400}} onClick={()=>handleBtnSoundCk(1)}>효과음2</div>
    </div>

    <div style={{height:30,width:'100%',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
      체크버튼을 클릭해 보세요!
    </div>
    <div style={{position:'absolute',display:'flex',zIndex:500,width:'90%',maxWidth:280,height:'auto',top:170,justifyContent:'center',padding:10,boxSizing:'border-box'}}>
      <img src={testimg2} alt='' style={{width:55,height:55}}/>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        <img src={testimg3} alt='' style={{width:55,height:55,marginRight:5}}/>
        <img src={testimg4} alt='' style={{width:55,height:55,}} onClick={()=>pop()}
        className={btn===0?'testbtn':btn===1?'testbtn1':btn===2?'testbtn2':btn===3?'testbtn3':'testbtn4'}/>
      </div>
    </div>
    <img src={testimg1} alt='' style={{position:'absolute',display:'flex',zIndex:400,width:280,height:'auto',top:160,borderRadius:20, border:'10px solid #000'}}/>
    <audio id="click-sound" src={soundBtn===0?sound1:sound3} preload="auto"></audio>
  </div>
  );
}

export default Test;
