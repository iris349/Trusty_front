import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ReportPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentType = location.state?.type || "sms"; 
  const fileInputRef = useRef(null);
  const [linkInput, setLinkInput] = useState("");
  const [selectedType, setSelectedType] = useState(currentType);

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "#F8FAFC", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", overflow: "hidden", background: "white" }}>
        <Navbar />

        {/* 타이틀 헤더 */}
        <div style={{ width: "1100px", left: "170px", top: "150px", position: "absolute" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0F172A", margin: "0 0 8px 0" }}>피싱 사기 제보하기</h2>
          <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>받으신 위험 메시지 유형을 선택하고 정보를 입력해 주세요.</p>
        </div>

        {/* 3가지 타입 셀렉터 카드 */}
        <div style={{ width: "1100px", left: "170px", top: "240px", position: "absolute", display: "flex", gap: "25px" }}>
          {[
            { id: "phone", title: "전화 제보", desc: "보이스피싱, ARS 금융기관 사칭 전화를 받은 경우" },
            { id: "sms", title: "문자 (URL 포함)", desc: "스미싱 인증번호 유도 및 택배 주소 사기 문자의 경우" },
            { id: "email", title: "이메일 피싱", desc: "포털 사이트 사칭 악성 링크 유도 메일을 받은 경우" }
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedType(item.id)}
              style={{
                flex: 1, height: "140px", background: "white", borderRadius: "24px", padding: "24px", boxSizing: "border-box",
                border: selectedType === item.id ? "2px #0088FF solid" : "1px #E2E8F0 solid",
                boxShadow: selectedType === item.id ? "0 10px 25px -5px rgba(0, 136, 255, 0.1)" : "none",
                cursor: "pointer", transition: "all 0.2s"
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: 700, color: selectedType === item.id ? "#0088FF" : "#1E293B", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.5" }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 입력 상세 정보 카드 폼 */}
        <div style={{ width: "1100px", left: "170px", top: "420px", position: "absolute", background: "white", borderRadius: "32px", border: "1px #E2E8F0 solid", padding: "40px", boxSizing: "border-box", boxShadow: "0 20px 40px -15px rgba(15,23,42,0.05)" }}>
          
          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", fontSize: "18px", fontWeight: 700, color: "#1E293B", marginBottom: "12px" }}>이메일 ID 또는 휴대폰 번호 링크 정보</label>
            <input 
              type="text"
              placeholder="여기에 의심스러운 URL 주소나 발신 IP 주소를 입력하세요..."
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              style={{ width: "100%", height: "60px", background: "#F8FAFC", borderRadius: "14px", border: "1px #E2E8F0 solid", outline: "none", padding: "0 20px", boxSizing: "border-box", fontSize: "16px" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "18px", fontWeight: 700, color: "#1E293B", marginBottom: "12px" }}>통화·문자 내역 증거 스크린샷 캡쳐</label>
            
            {/* 고급 업로드 드롭존 박스 (이미지 삭제 및 텍스트 중앙 정렬) */}
            <div style={{ width: "100%", height: "180px", background: "rgba(115, 236, 252, 0.04)", border: "2px dashed #73ECFC", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative" }}>
              <div style={{ color: "#0088FF", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>증거 파일 드래그 또는 마우스 선택</div>
              <div style={{ color: "#94A3B8", fontSize: "13px" }}>필수 포함 정보: 발신 전화번호, 수신 일자 및 규격 시각</div>
              
              <button 
                onClick={() => fileInputRef.current.click()}
                style={{ marginTop: "16px", background: "#0F172A", color: "white", border: "none", padding: "8px 20px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
              >
                파일 찾기
              </button>
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={(e) => { if(e.target.files[0]) alert(`${e.target.files[0].name} 파일 탑재 완료`); }} />
            </div>
          </div>

          {/* 최종 제보 제출 버튼 */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "35px" }}>
            <button 
              onClick={() => { alert("제보가 안전하게 접수되었습니다."); navigate('/'); }}
              style={{ width: "200px", height: "56px", background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", border: "none", borderRadius: "16px", color: "white", fontSize: "18px", fontWeight: 700, cursor: "pointer", boxShadow: "0 10px 20px -5px rgba(0, 136, 255, 0.2)" }}
            >
              제보 등록하기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReportPage;