import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisInputPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <div style={{ width: "1244px", height: "744px", left: "99px", top: "229px", position: "absolute", background: "rgba(218.36, 235.59, 254.02, 0.80)", borderRadius: "40px" }}></div>
      <div style={{ width: "984px", height: "94px", left: "207px", top: "383px", position: "absolute", color: "#0F172A", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>입력하신 텍스트나 이메일 내용을 실시간으로 검토하여 위험도를 분석합니다.</div>
      
      {/* 텍스트 입력 구역 */}
      <textarea 
        style={{ 
          width: "1095px", 
          height: "204px", 
          left: "173px", 
          top: "564px", 
          position: "absolute", 
          background: "white", 
          borderRadius: "40px",
          border: "none",
          outline: "none",
          padding: "25px 35px",
          boxSizing: "border-box",
          fontSize: "20px",
          fontFamily: "Inter",
          resize: "none"
        }}
        placeholder="여기에 위험도가 의심되는 텍스트나 메일 내용을 붙여넣으세요..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div style={{ width: "503px", height: "94px", left: "207px", top: "506px", position: "absolute", color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>분석할 내용을 입력하세요</div>
      
      {/* 🔥 분석하기 버튼: 다음 페이지로 작성된 텍스트를 전달합니다 */}
      <div 
        style={{ width: "329px", height: "110px", left: "908px", top: "819px", position: "absolute", background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", borderRadius: "40px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.3)" }}
        onClick={() => navigate('/analysis/result', { state: { text: inputText } })}
      >
        <span style={{ color: "white", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>분석하기</span>
      </div>
      
      <div style={{ width: "503px", height: "93px", left: "207px", top: "330px", position: "absolute", color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>피싱 분석 도구</div>
      
      <Navbar />
    </div>
  );
}

export default AnalysisInputPage;