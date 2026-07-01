import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // background: "white" 추가하여 뒤쪽 본문/이미지가 비치지 않도록 방지
    <div style={{ width: "1440px", left: "0px", top: "0px", position: "absolute", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", display: "inline-flex", zIndex: 9999, background: "white" }}>
      <div style={{ width: "1280px", height: "100px", justifyContent: "flex-start", alignItems: "center", gap: "143px", display: "inline-flex" }}>
        
        {/* 로고 */}
        <div style={{ width: "151px", color: "black", fontSize: "36px", fontFamily: "Inter", fontWeight: 400 }}>
          Trusty
        </div>
        
        {/* 홈 메뉴 */}
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          홈
        </Link>
        
        {/* 제보창 */}
        <Link to="/report" style={{ textDecoration: "none", color: "black", width: "97px", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          제보창
        </Link>
        
        {/* 커뮤니티창 */}
        <Link to="/community" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          커뮤니티창
        </Link>
        
        {/* 로그인 */}
        <Link to="/login" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          로그인
        </Link>
        
        <img style={{ width: "50px", height: "50px" }} src="https://placehold.co/50x50" alt="profile" />
      </div>
      <div style={{ alignSelf: "stretch", height: "0px", outline: "1px black solid", outlineOffset: "-0.50px" }}></div>
    </div>
  );
}

export default Navbar;