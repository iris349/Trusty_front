import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function SearchHistoryPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const [historyList, setHistoryList] = useState([
    { id: 1, target: "user@example.com", status: "위험", text: "신고됨(위험)", color: "#FB1919", detailText: "user@example.com 번호로 온 의심 사례 신고 기록 데이터입니다." },
    { id: 2, target: "010-1234-5678", status: "안전", text: "신고됨(안전)", color: "#34C759", detailText: "010-1234-5678 연락처 검증 결과 정상 기관으로 확인된 안전 기록 데이터입니다." }
  ]);

  const handleSearch = () => {
    if (!searchInput.trim()) {
      alert("이메일 ID 또는 휴대폰 번호를 입력해 주세요!");
      return;
    }
    navigate('/analysis/result', { state: { text: searchInput } });
  };

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "white", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", overflow: "hidden" }}>
        
        {/* 공통 상단 네비게이션 바 */}
        <Navbar />

        {/* 타이틀 텍스트 */}
        <div style={{ width: "100%", height: "90px", left: "0px", top: "177px", position: "absolute", color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 700, textAlign: "center" }}>
          피싱 이력 조회
        </div>

        <div style={{ width: "903px", height: "47px", left: "258px", top: "241px", position: "absolute", color: "#0F172A", fontSize: "20px", fontFamily: "Inter", fontWeight: 400, textAlign: "center" }}>
          메일 아이디나 핸드폰 번호를 입력하여 신고 이력 및 위험 여부를 실시간으로 확인하세요
        </div>

        <div style={{ width: "358px", height: "46px", left: "227px", top: "374px", position: "absolute", color: "#0F172A", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>
          이메일 ID 또는 휴대폰 번호
        </div>

        {/* 텍스트 입력 인풋창 */}
        <input 
          type="text"
          placeholder="이메일 주소 또는 전화번호를 입력하고 엔터를 누르세요..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => { if(e.key === 'Enter') handleSearch(); }}
          style={{ 
            width: "1054px", 
            height: "77px", 
            left: "207px", 
            top: "417px", 
            position: "absolute", 
            background: "rgba(217, 217, 217, 0.50)", 
            borderRadius: "40px",
            border: "none",
            outline: "none",
            padding: "0 35px",
            boxSizing: "border-box",
            fontSize: "22px",
            fontFamily: "Inter"
          }}
        />

        {/* 검색 버튼 */}
        <div 
          onClick={handleSearch}
          style={{ width: "1054.75px", height: "77.48px", left: "206.65px", top: "535.85px", position: "absolute", background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", borderRadius: "40px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.3)" }}
        >
          <div style={{ color: "white", fontSize: "24px", fontFamily: "Inter", fontWeight: 700, userSelect: "none" }}>검색</div>
        </div>
        
        <div style={{ width: "447px", height: "52px", left: "441px", top: "705px", position: "absolute", color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 400, textAlign: "center" }}>
          검색 결과를 확인해 보세요
        </div>
        
        {/* 🛠️ [구조 전면 교정] 하단 조회 결과 리스트 박스 레이아웃 (위치 뒤틀림 영구 차단) */}
        <div style={{ width: "1267px", left: "86px", top: "796px", position: "absolute", display: "flex", flexDirection: "column", gap: "17px" }}>
          {historyList.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                width: "100%", 
                height: "80px", 
                background: "rgba(218, 235, 254, 0.80)", 
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                padding: "0 50px",
                boxSizing: "border-box"
              }}
            >
              {/* 조회 대상 (전화번호/이메일) */}
              <div style={{ width: "300px", color: "#0F172A", fontSize: "22px", fontFamily: "Inter", fontWeight: 500 }}>
                {item.target}
              </div>
              
              {/* 상태 텍스트 (위험/안전) */}
              <div style={{ width: "200px", color: item.color, fontSize: "22px", fontFamily: "Inter", fontWeight: 700 }}>
                {item.text}
              </div>
              
              {/* 상세보기 링크 액션 (우측 끝 정렬) */}
              <div 
                onClick={() => navigate('/analysis/result', { state: { text: item.detailText } })}
                style={{ marginLeft: "auto", color: "#FF8D28", fontSize: "22px", fontFamily: "Inter", fontWeight: 600, cursor: "pointer" }}
              >
                상세보기
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default SearchHistoryPage;