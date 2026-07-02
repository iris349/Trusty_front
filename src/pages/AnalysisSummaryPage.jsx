import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const reportText = location.state?.text || "";

  // 예시 데이터 (디자인 시스템 컬러 매핑에 맞게 정돈)
  const mockScores = {
    url: "85%",
    pattern: "89%",
    reliability: "30%",
    urgency: "95%",
    total: "92%" // 최종 위험도 퍼센트
  };

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "#F8FAFC", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", overflow: "hidden", background: "white" }}>
        <Navbar />
        
        {/* =======================================================================
            📊 [상단 섹션] 분석창과 동일한 헤더 타이틀 구조 및 뒤로가기 버튼
            ======================================================================= */}
        <div style={{ width: "1100px", left: "170px", top: "150px", position: "absolute", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0F172A", margin: "0 0 6px 0" }}>피싱 위험도 정밀 요약 리포트</h2>
            <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>각 탐지 지표별 정량적 위험도 점수와 종합 대응 가이드라인입니다.</p>
          </div>
          <button 
            onClick={() => navigate('/analysis/result', { state: { text: reportText } })} 
            style={{ background: "#64748B", color: "white", border: "none", padding: "14px 24px", borderRadius: "14px", fontSize: "16px", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 12px rgba(100,116,139,0.15)" }}
          >
            ← 기본 분석 창으로
          </button>
        </div>

        {/* =======================================================================
            📈 [중단 섹션] 4개 지표 카드 (분석창 우측 4분할 카드와 디자인 싱크 맞춤)
            ======================================================================= */}
        <div style={{ width: "1100px", left: "170px", top: "250px", position: "absolute", display: "flex", gap: "20px" }}>
          
          {/* 1. URL 위험도 */}
          <div style={{ width: "260px", height: "180px", background: "white", borderRadius: "24px", border: "1px #E2E8F0 solid", padding: "28px", boxSizing: "border-box", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B" }}>URL 위험도</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ color: "#F43F5E", fontSize: "32px", fontWeight: 800 }}>{mockScores.url}</span>
              <div style={{ width: "110px", height: "8px", background: "#F1F5F9", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: mockScores.url, height: "100%", background: "#F43F5E" }}></div>
              </div>
            </div>
          </div>

          {/* 2. 언어 패턴 검증 */}
          <div style={{ width: "260px", height: "180px", background: "white", borderRadius: "24px", border: "1px #E2E8F0 solid", padding: "28px", boxSizing: "border-box", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B" }}>언어 패턴</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ color: "#F43F5E", fontSize: "32px", fontWeight: 800 }}>{mockScores.pattern}</span>
              <div style={{ width: "110px", height: "8px", background: "#F1F5F9", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: mockScores.pattern, height: "100%", background: "#F43F5E" }}></div>
              </div>
            </div>
          </div>

          {/* 3. 발신자 신뢰도 */}
          <div style={{ width: "260px", height: "180px", background: "white", borderRadius: "24px", border: "1px #E2E8F0 solid", padding: "28px", boxSizing: "border-box", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B" }}>발신자 신뢰도</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ color: "#34C759", fontSize: "32px", fontWeight: 800 }}>{mockScores.reliability}</span>
              <div style={{ width: "110px", height: "8px", background: "#F1F5F9", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: mockScores.reliability, height: "100%", background: "#34C759" }}></div>
              </div>
            </div>
          </div>

          {/* 4. 긴급성 유도 분석 */}
          <div style={{ width: "260px", height: "180px", background: "white", borderRadius: "24px", border: "1px #E2E8F0 solid", padding: "28px", boxSizing: "border-box", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B" }}>긴급성 유도</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ color: "#F43F5E", fontSize: "32px", fontWeight: 800 }}>{mockScores.urgency}</span>
              <div style={{ width: "110px", height: "8px", background: "#F1F5F9", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: mockScores.urgency, height: "100%", background: "#F43F5E" }}></div>
              </div>
            </div>
          </div>

        </div>

        {/* =======================================================================
            🎯 [하단 섹션] 최종 위험도 및 종합 요약 리포트 (통합 패널형 대시보드 변환)
            ======================================================================= */}
        <div style={{ width: "1100px", height: "450px", left: "170px", top: "460px", position: "absolute", background: "#F8FAFC", borderRadius: "28px", border: "1px #E2E8F0 solid", padding: "40px", boxSizing: "border-box", display: "flex", gap: "50px" }}>
          
          {/* 📊 최종 위험도 대형 퍼센트 스코어 노출 구역 (좌측 배치) */}
          <div style={{ width: "320px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "24px", border: "1px #E2E8F0 solid", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            <span style={{ color: "#475569", fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>최종 피싱 위험도</span>
            <span style={{ color: "#F43F5E", fontSize: "84px", fontWeight: 900, lineHeight: "1" }}>{mockScores.total}</span>
            <span style={{ color: "#F43F5E", fontSize: "13px", fontWeight: 700, marginTop: "14px", background: "rgba(244,63,94,0.1)", padding: "4px 10px", borderRadius: "20px" }}>⚠️ 위험 등급 피싱 의심</span>
          </div>

          {/* 수직 구분선 대신 세련된 Border 영역 처리 및 상세 가이드 정렬 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
            {/* 상세 분석 요약 */}
            <div style={{ background: "white", padding: "24px", borderRadius: "24px", border: "1px #E2E8F0 solid", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
              <div style={{ color: "#0F172A", fontSize: "18px", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <span style={{ width: "4px", height: "16px", background: "#0088FF", borderRadius: "2px", marginRight: "8px", display: "inline-block" }}></span>
                상세 분석 요약
              </div>
              <div style={{ color: "#475569", fontSize: "15px", lineHeight: "1.6", fontWeight: 500 }}>
                입력된 데이터 분석 결과 사칭 유도 수치 정보가 종합 평점 {mockScores.total}로 매우 높은 위험 수준을 보이고 있습니다. 인가되지 않은 도메인 자산의 URL 접근 기록이 확인되었으며, 문장 내부 사칭 템플릿과의 높은 일치율이 식별되었습니다.
              </div>
            </div>

            {/* 권장 조치 사항 */}
            <div style={{ background: "white", padding: "24px", borderRadius: "24px", border: "1px #E2E8F0 solid", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
              <div style={{ color: "#0F172A", fontSize: "18px", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <span style={{ width: "4px", height: "16px", background: "#F59E0B", borderRadius: "2px", marginRight: "8px", display: "inline-block" }}></span>
                권장 조치 사항
              </div>
              <div style={{ color: "#475569", fontSize: "15px", lineHeight: "1.6", fontWeight: 500 }}>
                1. 메세지 내부에 포함된 웹 링크(URL)를 절대 클릭하지 마십시오.<br />
                2. 발신번호를 스팸 처리 및 블랙리스트에 제보하여 추가 피해를 방지하십시오.<br />
                3. 기관 사칭이 의심되므로 수사기관 혹은 공식 고객센터를 통해 진위 여부를 재차 확인하십시오.
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default AnalysisSummaryPage;