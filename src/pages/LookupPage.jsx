// src/pages/LookupPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LookupPage() {
  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      {/* 검색창 입력 배경 */}
      <div style={{ width: "1054px", height: "77px", left: "207px", top: "417px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "40px" }}></div>
      <div style={{ width: "903px", height: "47px", left: "258px", top: "241px", position: "absolute", color: "black", fontSize: "20px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>
        메일 아이디나 핸드폰 번호를 입력하여 신고 이력 및 위험 여부를 실시간으로 확인하세요
      </div>
      <div style={{ width: "358px", height: "46px", left: "227px", top: "374px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>
        이메일 ID 또는 휴대폰 번호
      </div>
      
      {/* 검색 버튼 */}
      <div style={{ width: "1054.75px", height: "77.48px", left: "206.65px", top: "535.85px", position: "absolute", background: "#73ECFC", borderRadius: "40px", cursor: "pointer" }}></div>
      <div style={{ width: "93.23px", height: "37.45px", left: "662.70px", top: "552.64px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, pointerEvents: "none" }}>
        검색
      </div>
      
      <div style={{ width: "503px", height: "90px", left: "540px", top: "177px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>
        피싱 이력 조회
      </div>
      <div style={{ width: "447px", height: "52px", left: "441px", top: "705px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>
        검색 결과를 확인해 보세요
      </div>
      
      {/* 하단 검색 결과 리스트 구역 */}
      <div style={{ width: "1267px", height: "228px", left: "58px", top: "796px", position: "absolute", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "17px", display: "inline-flex" }}>
        {/* 첫 번째 결과 열: user@example.com */}
        <div style={{ alignSelf: "stretch", height: "80px", background: "rgba(218.36, 235.59, 254.02, 0.80)", borderRadius: "40px" }}></div>
        {/* 두 번째 결과 열: 010-1234-5678 */}
        <div style={{ alignSelf: "stretch", height: "80px", background: "rgba(218.36, 235.59, 254.02, 0.80)", borderRadius: "40px" }}></div>
        
        {/* 결과 텍스트 데이터 매핑 */}
        <div style={{ width: "210px", height: "24px", left: "127px", top: "30px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>user@example.com</div>
        <div style={{ width: "171px", height: "24px", left: "132px", top: "122px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>010-1234-5678</div>
        <div style={{ width: "137px", height: "24px", left: "384px", top: "33px", position: "absolute", color: "#FB1919", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>신고됨(위험)</div>
        <div style={{ width: "137px", height: "24px", left: "384px", top: "121px", position: "absolute", color: "#34C759", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>신고됨(안전)</div>
        
        {/* 상세보기 액션 버튼 */}
        <div style={{ width: "107px", height: "19px", left: "964px", top: "33px", position: "absolute", color: "#FF8D28", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400, cursor: "pointer" }}>상세보기</div>
        <div style={{ width: "107px", height: "19px", left: "964px", top: "121px", position: "absolute", color: "#FF8D28", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400, cursor: "pointer" }}>상세보기</div>
      </div>
      
      {/* 상단 네비게이션 메뉴바 */}
      <Navbar />
    </div>
  );
}

export default LookupPage;