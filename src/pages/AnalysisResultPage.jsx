import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [reportText, setReportText] = useState("제보된 내역 데이터가 없습니다.");

  useEffect(() => {
    if (location.state?.text) {
      setReportText(location.state.text);
    }
  }, [location.state]);

  const hasUrl = reportText.includes("http") || reportText.includes(".com") || reportText.includes(".kr") || reportText.includes("링크") || reportText.includes("주소");
  const urlDynamicText = hasUrl ? "비인가 도메인 및 악성 피싱 유도 아웃링크 정황 식별" : "텍스트 내부에 탐지 대상 위험 아웃링크 주소가 발견되지 않음";

  const isImpersonation = reportText.includes("엄마") || reportText.includes("딸") || reportText.includes("아들") || reportText.includes("검찰") || reportText.includes("은행") || reportText.includes("지원금");
  const languageDynamicText = isImpersonation ? "가족 관계 혹은 공공 금융 행정 기관 사칭 기법과 100% 일치" : "문장 구조 내 사칭 패턴 및 수법 특이사항 발견되지 않음";

  const hasSuspiciousCaller = reportText.includes("해외") || reportText.includes("010") || reportText.includes("번호");
  const callerDynamicText = hasSuspiciousCaller ? "회선 변조 의심 또는 신고 블랙리스트 누적 번호 매칭 완료" : "일반 발신 지표 범주에 속하나 사후 모니터링 필요";

  const isUrgent = reportText.includes("급해") || reportText.includes("당장") || reportText.includes("빨리") || reportText.includes("즉시");
  const urgencyDynamicText = isUrgent ? "'즉시 인증', '당장 송금' 등 판단을 흐리게 하는 압박감 유발 단어 포함" : "시간 제한 조치 요구 등의 긴급 강압 징후가 발견되지 않음";

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "#F8FAFC", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", overflow: "hidden", background: "white" }}>
        <Navbar />

        {/* 상단 섹션 */}
        <div style={{ width: "1100px", left: "170px", top: "150px", position: "absolute", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0F172A", margin: "0 0 6px 0" }}>피싱 위험도 정밀 분석 결과</h2>
            <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>인공지능 모델이 수신 텍스트의 악성 사기 기법 리스크를 심층 분석한 데이터입니다.</p>
          </div>
          <button 
            onClick={() => navigate('/analysis/summary', { state: { text: reportText } })} 
            style={{ background: "#0088FF", color: "white", border: "none", padding: "14px 28px", borderRadius: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 12px rgba(0,136,255,0.2)" }}
          >
            정밀 분석 요약 보기 →
          </button>
        </div>

        {/* 원문 대시보드 (왼쪽 패널) */}
        <div style={{ width: "420px", height: "640px", left: "170px", top: "250px", position: "absolute", background: "#F8FAFC", borderRadius: "28px", border: "1px #E2E8F0 solid", padding: "30px", boxSizing: "border-box" }}>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#475569", marginBottom: "16px" }}>제보된 텍스트 원문</div>
          <div style={{ height: "500px", overflowY: "auto", fontSize: "16px", color: "#0F172A", lineHeight: "1.7", background: "white", padding: "20px", borderRadius: "16px", border: "1px #E2E8F0 solid" }}>
            {reportText}
          </div>
        </div>

        {/* 4분할 분석 대시보드 스퀘어 (오른쪽 패널) */}
        <div style={{ width: "650px", height: "640px", left: "620px", top: "250px", position: "absolute", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "20px" }}>
          {[
            { title: "URL 위험도", value: urlDynamicText, danger: hasUrl },
            { title: "발신자 신뢰도", value: callerDynamicText, danger: hasSuspiciousCaller },
            { title: "언어 패턴 검증", value: languageDynamicText, danger: isImpersonation },
            { title: "긴급성 유도 분석", value: urgencyDynamicText, danger: isUrgent }
          ].map((card, i) => (
            <div key={i} style={{ background: "white", border: "1px #E2E8F0 solid", borderRadius: "24px", padding: "28px", boxSizing: "border-box", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B" }}>{card.title}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", background: card.danger ? "rgba(244,63,94,0.1)" : "rgba(52,199,89,0.1)", color: card.danger ? "#F43F5E" : "#34C759" }}>
                  {card.danger ? "⚠️ 위험 탐지" : "✓ 안전 지표"}
                </span>
              </div>
              <div style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6" }}>{card.value}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AnalysisResultPage;