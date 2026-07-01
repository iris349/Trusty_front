// src/pages/ReportPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ReportPage() {
  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      {/* 상세 정보 입력 박스 */}
      <div style={{ width: "680px", height: "90px", left: "121px", top: "585px", position: "absolute", background: "white", borderRadius: "17px", border: "2px #D9D9D9 solid" }}></div>
      <div style={{ width: "287px", height: "34px", left: "121px", top: "489px", position: "absolute", color: "black", fontSize: "30px", fontFamily: "Inter", fontWeight: 600 }}>제보 상세 정보 입력</div>
      
      {/* 파일 업로드 드롭존 영역 */}
      <div style={{ width: "1176px", height: "182px", left: "121px", top: "744px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "24px" }}></div>
      <div style={{ width: "38px", height: "53px", left: "448px", top: "793px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "7.92px", height: "11.04px", left: "23.75px", top: "6.63px", position: "absolute", outline: "2px black solid" }}></div>
        <div style={{ width: "7.92px", height: "11.04px", left: "23.75px", top: "6.63px", position: "absolute", outline: "2px black solid" }}></div>
        <div style={{ width: "22.17px", height: "39.75px", left: "9.50px", top: "6.63px", position: "absolute", outline: "2px black solid" }}></div>
        <div style={{ width: "9.50px", height: "6.63px", left: "4.75px", top: "26.50px", position: "absolute", outline: "2px black solid" }}></div>
      </div>
      
      {/* 폼 텍스트 레이블 및 가이드라인 */}
      <div style={{ width: "524px", height: "32px", left: "121px", top: "551px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 500 }}>이메일*문자 내 링크/IP 주소</div>
      <div style={{ width: "248px", height: "34px", left: "121px", top: "710px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 500 }}>통화*문자 내역 캡쳐</div>
      <div style={{ width: "308px", height: "28px", left: "500px", top: "809px", position: "absolute", color: "#0088FF", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>파일 드래그 또는 선택</div>
      <div style={{ width: "586px", height: "29px", left: "348px", top: "852px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>필수 정보: 발신 전화번호, 수신일자 및 시각, 수신 표시</div>
      
      {/* 파일 찾기 버튼 */}
      <div style={{ width: "246px", height: "70px", left: "976px", top: "805px", position: "absolute", background: "#73ECFC", borderRadius: "20px", cursor: "pointer" }}></div>
      <div style={{ width: "119px", height: "24px", left: "1051px", top: "828px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 600, pointerEvents: "none" }}>파일 찾기</div>
      
      {/* 제보 유형 선택 그룹 배경 (전화 / 문자 / 이메일) */}
      <div style={{ width: "1209px", height: "351px", left: "88px", top: "119px", position: "absolute" }}>
        <div style={{ width: "362.70px", height: "349.95px", left: "0px", top: "1.05px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px" }}></div>
        <div style={{ width: "363.70px", height: "349.95px", left: "419.65px", top: "0px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px", border: "3px #73ECFC solid" }}></div>
        <div style={{ width: "362.70px", height: "349.95px", left: "846.30px", top: "1.05px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px" }}></div>
      </div>
      
      {/* 카드 1: 전화 */}
      <div style={{ width: "88px", height: "49px", left: "187px", top: "199px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>전화</div>
      <div style={{ width: "266px", height: "63px", left: "139px", top: "278px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>전화통화, ARS 통하로 기관/대출/수사 등을 받은 경우</div>
      <div style={{ width: "41px", height: "50px", left: "139px", top: "194px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "33.32px", height: "38.54px", left: "5.55px", top: "2.61px", position: "absolute", background: "black" }}></div>
      </div>
      
      {/* 카드 2: 문자(URL 포함) */}
      <div style={{ width: "190px", height: "35px", left: "611px", top: "199px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>문자(URL 포함)</div>
      <div style={{ width: "265px", height: "95px", left: "560px", top: "278px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
      <div style={{ width: "42px", height: "42px", left: "554px", top: "189px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "35px", height: "34.99px", left: "3.50px", top: "3.51px", position: "absolute", background: "black" }}></div>
      </div>
      
      {/* 카드 3: 이메일(URL 포함) */}
      <div style={{ width: "222px", height: "35px", left: "1030px", top: "199px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>이메일(URL 포함)</div>
      <div style={{ width: "266px", height: "95px", left: "978px", top: "278px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
      <div style={{ width: "46px", height: "55px", left: "974px", top: "187px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "38.33px", height: "36.67px", left: "3.83px", top: "9.17px", position: "absolute", background: "black" }}></div>
      </div>
      
      {/* 상단 네비게이션 메뉴바 */}
      <Navbar />
    </div>
  );
}

export default ReportPage;