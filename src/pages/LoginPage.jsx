import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function LoginPage() {
  const [rememberId, setRememberId] = useState(false);
  const [rememberPw, setRememberPw] = useState(false);

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "#F8FAFC", overflow: "hidden" }}>
      <Navbar />

      {/* 중앙 로그인 카드 프레임 */}
      <div style={{
        width: "550px",
        padding: "50px 40px",
        background: "white",
        borderRadius: "24px",
        border: "1px #E2E8F0 solid",
        boxShadow: "0 20px 40px -15px rgba(15,23,42,0.05)",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        
        {/* 카드 내부 상단 타이틀 */}
        <div style={{ fontSize: "28px", fontWeight: 700, color: "#0F172A", marginBottom: "35px", fontFamily: "Inter" }}>
          로그인
        </div>

        {/* 인풋 영역 컨테이너 */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
          
          {/* 아이디 입력창 */}
          <div style={{ width: "100%", height: "56px", background: "white", borderRadius: "12px", border: "1px #E2E8F0 solid", display: "flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "18px", color: "#94A3B8", marginRight: "12px", userSelect: "none" }}>👤</span>
            <input 
              type="text" 
              placeholder="아이디를 입력하세요." 
              style={{ flex: 1, border: "none", outline: "none", fontSize: "16px", color: "#0F172A", fontFamily: "Inter" }}
            />
          </div>

          {/* 비밀번호 입력창 - 자물쇠 색상을 회색으로 변경, 기존 푸른 테두리와 배경색 유지 */}
          <div style={{ width: "100%", height: "56px", background: "rgba(218, 235, 254, 0.3)", borderRadius: "12px", border: "1px #0088FF solid", display: "flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "18px", color: "#94A3B8", marginRight: "12px", userSelect: "none" }}>🔒</span>
            <input 
              type="password" 
              placeholder="비밀번호를 입력하세요." 
              style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "16px", color: "#0F172A", fontFamily: "Inter" }}
            />
          </div>
        </div>

        {/* 체크박스 라인 */}
        <div style={{ width: "100%", display: "flex", gap: "20px", justifyContent: "flex-start", marginBottom: "30px", paddingLeft: "4px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", color: "#475569", fontFamily: "Inter" }}>
            <input type="checkbox" checked={rememberId} onChange={() => setRememberId(!rememberId)} style={{ width: "16px", height: "16px", cursor: "pointer" }} />
            아이디 저장
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", color: "#475569", fontFamily: "Inter" }}>
            <input type="checkbox" checked={rememberPw} onChange={() => setRememberPw(!rememberPw)} style={{ width: "16px", height: "16px", cursor: "pointer" }} />
            비밀번호 저장
          </label>
        </div>

        {/* 로그인 버튼 */}
        <button style={{
          width: "100%",
          height: "56px",
          background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)",
          border: "none",
          borderRadius: "14px",
          color: "white",
          fontSize: "18px",
          fontWeight: 700,
          fontFamily: "Inter",
          cursor: "pointer",
          boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.25)",
          marginBottom: "28px"
        }}>
          로그인
        </button>

        {/* 하단 찾기 및 가입 링크 구역 */}
        <div style={{ display: "flex", alignItems: "center", justifyItems: "center", fontSize: "15px", fontFamily: "Inter", color: "#64748B" }}>
          <span style={{ cursor: "pointer" }}>아이디/비밀번호 찾기</span>
          <span style={{ margin: "0 16px", color: "#E2E8F0" }}>|</span>
          <span style={{ cursor: "pointer", color: "#0088FF", fontWeight: 600 }}>회원가입</span>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;