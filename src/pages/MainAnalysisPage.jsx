import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainAnalysisPage() {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState("");

  const handleAnalyze = () => {
    if (!textInput.trim()) {
      alert("분석할 문자나 메일 내용을 입력해 주세요!");
      return;
    }
    // 정밀 분석 결과 페이지로 입력값 전달하며 이동
    navigate('/analysis/result', { state: { text: textInput } });
  };

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "#F8FAFC", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", overflow: "hidden", background: "white" }}>
        
        {/* 공통 네비게이션 바 */}
        <Navbar />

        <div style={{ width: "100%", position: "absolute", top: "180px", left: "0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          
          {/* 배지 태그 */}
          <div style={{ background: "rgba(115, 236, 252, 0.2)", color: "#0088FF", padding: "8px 18px", borderRadius: "30px", fontSize: "16px", fontFamily: "Inter", fontWeight: 700, marginBottom: "20px", display: "inline-block" }}>
            🛡️ AI 연동 실시간 피싱 감지 시스템
          </div>

          {/* 메인 헤드카피 */}
          <h1 style={{ fontSize: "52px", fontFamily: "Inter", fontWeight: 800, color: "#0F172A", margin: "0 0 16px 0", lineHeight: "1.3", letterSpacing: "-1px" }}>
            의심스러운 메시지, <br />
            <span style={{ background: "linear-gradient(90deg, #0088FF 0%, #73ECFC 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trusty</span> 로 검증하세요.
          </h1>

          {/* 서브 카피 */}
          <p style={{ fontSize: "20px", fontFamily: "Inter", fontWeight: 400, color: "#64748B", margin: "0", lineHeight: "1.6" }}>
            AI 기반 심층 분석으로 스미싱과 피싱 위험을 <br />
            정확하고 신속하게 확인해드립니다.
          </p>
        </div>

        {/* =======================================================================
            🔍 메인 분석 폼 대시보드 카드 영역 (Absolute 레이아웃 최적화)
           ======================================================================= */}
        {/* 뒷배경 입체감 섀도우 박스 */}
        <div style={{ width: "1100px", height: "380px", left: "170px", top: "490px", position: "absolute", background: "white", borderRadius: "40px", boxShadow: "0px 25px 50px -12px rgba(15, 23, 42, 0.08)", border: "1px #E2E8F0 solid", display: "flex", flexDirection: "column", padding: "40px", boxSizing: "border-box" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "22px", fontFamily: "Inter", fontWeight: 700, color: "#1E293B" }}>
              분석할 텍스트 원문 입력
            </span>
            <span style={{ fontSize: "14px", fontFamily: "Inter", color: "#94A3B8" }}>
              * 개인정보를 유도하는 문자/메일 내용을 그대로 붙여넣으세요.
            </span>
          </div>

          {/* 대형 텍스트 입력 에어리어 */}
          <textarea 
            placeholder="수신된 문자 메시지 원문 또는 의심스러운 메일 본문 내용을 여기에 붙여넣으세요. (예: 엄마 나 핸드폰 액정 깨져서 문자했는데 이 링크로...)"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            style={{ 
              width: "100%", 
              height: "170px", 
              background: "#F8FAFC", 
              borderRadius: "20px", 
              border: "1px #E2E8F0 solid",
              outline: "none",
              padding: "20px",
              boxSizing: "border-box",
              fontSize: "18px",
              fontFamily: "Inter",
              color: "#334155",
              resize: "none",
              lineHeight: "1.6"
            }}
          />

          {/* 하단 분석하기 실행 레이어 버튼 */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
            <div 
              onClick={handleAnalyze}
              style={{ 
                width: "260px", 
                height: "64px", 
                background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", 
                borderRadius: "20px", 
                cursor: "pointer", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.3)",
                transition: "all 0.2s ease"
              }}
            >
              <span style={{ color: "white", fontSize: "20px", fontFamily: "Inter", fontWeight: 700, letterSpacing: "0.5px" }}>
                분석하기
              </span>
            </div>
          </div>

        </div>

        {/* =======================================================================
            ✨ 하단 포인트 디자인 배너 (Quick 링크 스팟)
           ======================================================================= */}
        <div style={{ width: "1100px", left: "170px", top: "910px", position: "absolute", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px #F1F5F9 solid", paddingTop: "25px" }}>
          <div style={{ display: "flex", gap: "40px" }}>
            <div onClick={() => navigate('/search-history')} style={{ color: "#475569", fontSize: "16px", fontFamily: "Inter", fontWeight: 500, cursor: "pointer" }}>
              🔍 최근 피싱 블랙리스트 이력 조회하기
            </div>
            <div onClick={() => navigate('/report')} style={{ color: "#475569", fontSize: "16px", fontFamily: "Inter", fontWeight: 500, cursor: "pointer" }}>
              🚨 새로운 피해 사례 직접 제보하기
            </div>
          </div>
          <div style={{ color: "#94A3B8", fontSize: "14px", fontFamily: "Inter" }}>
            © 2026 Trusty Security. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainAnalysisPage;