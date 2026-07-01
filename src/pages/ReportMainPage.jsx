import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ReportMainPage() {
  const navigate = useNavigate();
  // 🔥 현재 어떤 카드가 선택되었는지 저장하는 상태 (기본값은 선택 없음)
  const [selectedType, setSelectedType] = useState(""); 

  // 🔥 제보 접수하기 버튼 클릭 시 실행되는 함수
  const handleReportSubmit = () => {
    if (!selectedType) {
      alert("제보 유형(전화, 문자, 이메일)을 먼저 선택해 주세요!");
      return;
    }
    // 선택한 유형 데이터를 다음 페이지로 넘겨줍니다.
    navigate('/report/detail', { state: { type: selectedType } });
  };

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <Navbar />
      
      <div style={{ width: "492px", height: "82px", left: "159px", top: "164px", position: "absolute", color: "#0F172A", fontSize: "36px", fontFamily: "Inter", fontWeight: 800 }}>
        사용자 제보 및 피싱 경험담
      </div>
      <div style={{ width: "781px", height: "71px", left: "123px", top: "268px", position: "absolute", color: "#0F172A", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
        사용자 여러분의 실제 피싱 경험담을 공유해 주세요. Trusty의 AI 모델이 더 정확하게 위험을 감지할 수 있도록 도와드립니다.
      </div>

      {/* =======================================================================
          🎨 [선택 효과 적용] 클릭하면 테두리가 생기며 확실하게 티가 나도록 구현
          ======================================================================= */}
      {/* 카드 1: 전화 */}
      <div 
        onClick={() => setSelectedType("phone")}
        style={{ 
          width: "363px", height: "334px", left: "123px", top: "367px", position: "absolute", 
          background: "rgba(218, 235, 254, 0.6)", borderRadius: "40px", cursor: "pointer",
          border: selectedType === "phone" ? "3px #0088FF solid" : "3px transparent solid", boxShadow: selectedType === "phone" ? "0 10px 25px -5px rgba(0, 136, 255, 0.15)" : "none", // 선택 시 파란색 테두리
          boxSizing: "border-box"
        }}
      ></div>
      
      {/* 카드 2: 문자 */}
      <div 
        onClick={() => setSelectedType("sms")}
        style={{ 
          width: "363px", height: "334px", left: "543px", top: "367px", position: "absolute", 
          background: "rgba(218, 235, 254, 0.6)", borderRadius: "40px", cursor: "pointer",
          border: selectedType === "sms" ? "3px #0088FF solid" : "3px transparent solid", boxShadow: selectedType === "sms" ? "0 10px 25px -5px rgba(0, 136, 255, 0.15)" : "none",
          boxSizing: "border-box"
        }}
      ></div>
      
      {/* 카드 3: 이메일 */}
      <div 
        onClick={() => setSelectedType("email")}
        style={{ 
          width: "363px", height: "334px", left: "1025px", top: "367px", position: "absolute", 
          background: "rgba(218, 235, 254, 0.6)", borderRadius: "40px", cursor: "pointer",
          border: selectedType === "email" ? "3px #0088FF solid" : "3px transparent solid", boxShadow: selectedType === "email" ? "0 10px 25px -5px rgba(0, 136, 255, 0.15)" : "none",
          boxSizing: "border-box"
        }}
      ></div>

      {/* 제보 접수하기 액션 버튼 */}
      <div 
        style={{ width: "434px", height: "110px", left: "503px", top: "782px", position: "absolute", background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", borderRadius: "20px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.3)" }}
        onClick={handleReportSubmit} // 🔥 함수 연결
      >
        <span style={{ color: "white", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>제보 접수하기</span>
      </div>

      {/* 텍스트 및 아이콘 레이어들 (클릭 이벤트 겹침 방지를 위해 pointerEvents: "none" 적용) */}
      <div style={{ pointerEvents: "none" }}>
        {/* 전화 제보 내용 */}
        <div style={{ width: "88px", height: "49px", left: "234px", top: "465px", position: "absolute", color: "#0F172A", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>전화</div>
        <div style={{ width: "266px", height: "63px", left: "186px", top: "544px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
          전화통화, ARS 통하로 기관/대출/수사 등을 받은 경우
        </div>
        {/* 색상 없는 기호 스타일 아이콘 - 글자 Y축 높이(top: 465px)에 일자로 정렬 */}
        <div style={{ left: "186px", top: "465px", position: "absolute", fontSize: "28px", color: "#0F172A", lineHeight: 1 }}>
          ☏
        </div>

        {/* 문자 제보 내용 */}
        <div style={{ width: "190px", height: "35px", left: "660px", top: "462px", position: "absolute", color: "#0F172A", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>문자(URL 포함)</div>
        <div style={{ width: "265px", height: "95px", left: "609px", top: "541px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
          문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
        </div>
        {/* 색상 없는 기호 스타일 아이콘 - 글자 Y축 높이(top: 462px)에 일자로 정렬 */}
        <div style={{ left: "612px", top: "462px", position: "absolute", fontSize: "26px", color: "#0F172A", lineHeight: 1 }}>
          🗪
        </div>

        {/* 이메일 제보 내용 */}
        <div style={{ width: "222px", height: "35px", left: "1136px", top: "458px", position: "absolute", color: "#0F172A", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>이메일(URL 포함)</div>
        <div style={{ width: "266px", height: "95px", left: "1084px", top: "537px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
          이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
        </div>
        {/* 색상 없는 기호 스타일 아이콘 - 글자 Y축 높이(top: 458px)에 일자로 정렬 */}
        <div style={{ left: "1086px", top: "458px", position: "absolute", fontSize: "28px", color: "#0F172A", lineHeight: 1 }}>
          ✉
        </div>
      </div>
    </div>
  );
}

export default ReportMainPage;