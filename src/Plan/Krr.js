
import '../index';  
import { useLocation } from 'react-router-dom'; 
import React, { useEffect ,Suspense} from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import hanYear1 from './resource/krrHanYear1.pdf'
import axios from 'axios';

function Krr() {
  
  
  const navigate = useNavigate();
  const location = useLocation();
   
  
 
   
  const downloadPdf = () => {
    axios({
      url: hanYear1, // 다운로드할 PDF 파일의 URL
      method: 'GET',
      responseType: 'blob', // 응답 데이터는 Blob 형식
    })
      .then(response => {
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        // 서버에서 받은 응답 데이터를 Blob 객체로 감싸고, 그 객체를 사용하여 다운로드할 수 있는 URL 생성

		const link = document.createElement('a');
        // 'a' 요소를 생성하여 link라는 이름의 상수에 할당 (이 요소는 다운로드 링크를 나타냄)
        
        link.href = downloadUrl;
        // 'a' 요소의 href 속성을 다운로드할 URL인 downloadUrl로 설정
        
        link.setAttribute('download', '이름.pdf');
        // 'a' 요소의 download 속성을 설정하여 파일 이름을 지정
        
        document.body.appendChild(link);
        // 'a' 요소를 문서의 본문(body)에 추가
        
        link.click();
        // 'a' 요소를 클릭하여 다운로드를 시작
        
        link.remove();
        // 'a' 요소를 문서에서 제거
      })
      .catch(error => {
        console.error('Error while downloading the PDF:', error);
      });
  }
  return (
    <div className='main'>
      <div style={{padding:15,display:'flex',textAlign:'center',flexDirection:'column',justifyContent:'center'}}>
        <div style={{display:'flex',textAlign:'center',justifyContent:'center',fontSize:20}}>
          krr
        </div>
        <div style={{display:'flex',width:'100%',textAlign:'center'}}>
          <div style={{padding:15}} onClick={()=>downloadPdf()}>연간계획안</div>
          <div style={{padding:15,color:'#969696'}}>월간계획안</div>
        </div>
     </div>

     
    <div>
      <div style={{display:'flex'}}>
        <div style={{margin:10}}>
          <div style={{width:150,height:150,backgroundColor:'#ff00ff'}}></div>
          <div style={{textAlign:'center',marginTop:10}}>이름이름이름</div>
        </div>

        <div style={{margin:10}}>
          <div style={{width:150,height:150,backgroundColor:'#ff00ff'}}></div>
          <div style={{textAlign:'center',marginTop:10}}>이름이름이름</div>
        </div>

        <div style={{margin:10}}>
          <div style={{width:150,height:150,backgroundColor:'#ff00ff'}}></div>
          <div style={{textAlign:'center',marginTop:10}}>이름이름이름</div>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default Krr;
