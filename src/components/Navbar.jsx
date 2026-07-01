import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? "#0088FF" : "#475569",
      fontSize: "24px",
      fontFamily: "Inter",
      fontWeight: isActive ? 700 : 500,
      cursor: "pointer",
      transition: "color 0.2s ease"
    };
  };

  return (
    <div style={{ width: "1440px", left: "0px", top: "40px", position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1000 }}>
      <div style={{ width: "1100px", display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "60px" }}>
        
        {/* 로고 */}
        <div onClick={() => navigate('/')} style={{ color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 800, cursor: "pointer", letterSpacing: "-0.5px" }}>
          Trusty
        </div>
        
        {/* 메뉴 링크 구역 */}
        <div onClick={() => navigate('/')} style={getMenuStyle('/')}>홈</div>
        <div onClick={() => navigate('/report')} style={getMenuStyle('/report')}>제보창</div>
        
        {/* 💡 커뮤니티 홈 리스트가 즉시 초기화되어 보이도록 state 전달 */}
        <div onClick={() => navigate('/community', { state: { fromNavbar: true } })} style={getMenuStyle('/community')}>
          커뮤니티창
        </div>
        
        <div onClick={() => navigate('/search-history')} style={getMenuStyle('/search-history')}>피싱 이력 조회</div>
        
        {/* 우측 로그인 영역 */}
        <div 
          onClick={() => navigate('/login')} 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "6px", 
            marginLeft: "auto", 
            cursor: "pointer" 
          }}
        >
          <span style={{ color: "#475569", fontSize: "22px", fontFamily: "Inter", fontWeight: 500 }}>
            로그인
          </span>
          {/* 문 기호를 제거하고 깔끔한 진입 화살표 특수문자로 수정 */}
          <span style={{ color: "#475569", fontSize: "22px", lineHeight: 1, userSelect: "none" }}>
            ➔
          </span>
        </div>
      </div>
      
      {/* 구분선 */}
      <div style={{ width: "1100px", height: "1px", background: "#E2E8F0", marginTop: "24px" }}></div>
    </div>
  );
}

export default Navbar;