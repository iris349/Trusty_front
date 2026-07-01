import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisSummaryPage() {
  const navigate = useNavigate();

  // 예시 데이터 (나중에 백엔드 연동 시 변수로 교체하기 쉽게 세팅)
  const mockScores = {
    url: "85%",
    pattern: "89%",
    reliability: "30%",
    urgency: "95%",
    total: "92%" // 최종 위험도 퍼센트
  };

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      
      {/* =======================================================================
          📈 [상단 섹션] 4개 지표 카드 내부에 그래프/퍼센트가 들어갈 공간 확보
          ======================================================================= */}
      <div style={{ position: "absolute", left: "98px", top: "186px", display: "flex", gap: "45px" }}>
        
        {/* 1. URL 위험도 */}
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", position: "relative", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", left: "25px", top: "25px", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>URL 위험도</span>
          {/* 그래프가 들어갈 공간 타겟 구역 */}
          <div style={{ position: "absolute", left: "25px", top: "75px", width: "210px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#FB1919", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>{mockScores.url}</span>
            <div style={{ width: "100px", height: "10px", background: "#E2E8F0", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
              <div style={{ width: mockScores.url, height: "100%", background: "#FB1919" }}></div>
            </div>
          </div>
        </div>

        {/* 2. 언어 패턴 */}
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", position: "relative", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", left: "25px", top: "25px", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>언어 패턴</span>
          <div style={{ position: "absolute", left: "25px", top: "75px", width: "210px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#FB1919", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>{mockScores.pattern}</span>
            <div style={{ width: "100px", height: "10px", background: "#E2E8F0", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
              <div style={{ width: mockScores.pattern, height: "100%", background: "#FB1919" }}></div>
            </div>
          </div>
        </div>

        {/* 3. 발신자 신뢰도 */}
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", position: "relative", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", left: "25px", top: "25px", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>발신자 신뢰도</span>
          <div style={{ position: "absolute", left: "25px", top: "75px", width: "210px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#34C759", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>{mockScores.reliability}</span>
            <div style={{ width: "100px", height: "10px", background: "#E2E8F0", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
              <div style={{ width: mockScores.reliability, height: "100%", background: "#34C759" }}></div>
            </div>
          </div>
        </div>

        {/* 4. 긴급성 유도 */}
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", position: "relative", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", left: "25px", top: "25px", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>긴급성 유도</span>
          <div style={{ position: "absolute", left: "25px", top: "75px", width: "210px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#FB1919", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>{mockScores.urgency}</span>
            <div style={{ width: "100px", height: "10px", background: "#E2E8F0", borderRadius: "5px", position: "relative", overflow: "hidden" }}>
              <div style={{ width: mockScores.urgency, height: "100%", background: "#FB1919" }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* =======================================================================
          🎯 [하단 섹션] 최종 위험도 퍼센트 및 상세 분석 요약, 권장 조치 사항 매핑
          ======================================================================= */}
      <div style={{ width: "1176px", height: "519px", left: "98px", top: "417px", position: "absolute", background: "#F1F4F9", borderRadius: "50px", border: "1px #E2E8F0 solid" }}>
        
        <div style={{ left: "45px", top: "35px", position: "absolute", color: "#0F172A", fontSize: "32px", fontFamily: "Inter", fontWeight: 700 }}>
          피싱 위험도 분석 결과
        </div>

        {/* 복귀 버튼 */}
        <div 
          style={{ right: "45px", top: "35px", position: "absolute", color: "#64748B", fontSize: "18px", fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigate('/analysis/result')}
        >
          ← 기본 분석 창으로
        </div>

        {/* 📊 최종 위험도 대형 퍼센트 스코어 노출 구역 (좌측 배치) */}
        <div style={{ left: "45px", top: "160px", position: "absolute", width: "350px", height: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "30px" }}>
          <span style={{ color: "#0F172A", fontSize: "22px", fontFamily: "Inter", fontWeight: 600, marginBottom: "10px" }}>최종 피싱 위험도</span>
          <span style={{ color: "#FB1919", fontSize: "80px", fontFamily: "Inter", fontWeight: 800 }}>{mockScores.total}</span>
          <span style={{ color: "#FB1919", fontSize: "20px", fontFamily: "Inter", fontWeight: 600, marginTop: "5px" }}>[ 위험 등급 ]</span>
        </div>

        {/* 수직 구분선 (정확한 센터링 배치를 위해 중심축 정렬 조정) */}
        <div style={{ width: "310px", height: "0px", left: "450px", top: "130px", position: "absolute", transform: "rotate(90deg)", transformOrigin: "top left", outline: "1px #E2E8F0 solid" }} ></div>
        
        {/* 🛠️ 우측 상세내용 배치가 꼬이지 않도록 left 좌표값을 실선 너머인 500px 구역으로 고정 */}
        {/* 상세 분석 요약 */}
        <div style={{ left: "500px", top: "125px", position: "absolute", width: "620px" }}>
          <div style={{ color: "#22D3EE", fontSize: "27px", fontFamily: "Inter", fontWeight: 600, marginBottom: "15px" }}>상세 분석 요약</div>
          <div style={{ color: "#020617", fontSize: "18px", fontFamily: "Inter", lineHeight: "1.6" }}>
            입력된 데이터 분석 결과 사칭 유도 수치 정보가 종합 평점 {mockScores.total}로 매우 높은 위험 수준을 보이고 있습니다. 인가되지 않은 도메인 자산의 URL 접근 기록이 확인되었으며, 단어 번역 구조가 사칭 템플릿과 일치합니다.
          </div>
        </div>

        {/* 권장 조치 사항 */}
        <div style={{ left: "500px", top: "315px", position: "absolute", width: "620px" }}>
          <div style={{ color: "#FFCC33", fontSize: "27px", fontFamily: "Inter", fontWeight: 600, marginBottom: "15px" }}>권장 조치 사항</div>
          <div style={{ color: "#020617", fontSize: "18px", fontFamily: "Inter", lineHeight: "1.6" }}>
            1. 메세지 내부에 포함된 웹 링크(URL)를 절대 클릭하지 마십시오.<br />
            2. 발신번호를 스팸 처리 및 블랙리스트에 제보하여 추가 피해를 방지하십시오.<br />
            3. 출처가 불분명한 인증 요청이 올 경우 수사기관 혹은 공식 고객센터를 통해 진위 여부를 파악하십시오.
          </div>
        </div>

      </div>
      
      <Navbar />
    </div>
  );
}

export default AnalysisSummaryPage;