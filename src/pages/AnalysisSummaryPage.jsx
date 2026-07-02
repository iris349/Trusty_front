import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisSummaryPage.css';

function AnalysisSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const reportText = location.state?.text || '';

  // 예시 데이터 (디자인 시스템 컬러 매핑에 맞게 정돈)
  const mockScores = {
    url: '85%',
    pattern: '89%',
    reliability: '30%',
    urgency: '95%',
    total: '92%', // 최종 위험도 퍼센트
  };

  const metricCards = [
    { label: 'URL 위험도', value: mockScores.url, tone: 'danger' },
    { label: '언어 패턴', value: mockScores.pattern, tone: 'danger' },
    { label: '발신자 신뢰도', value: mockScores.reliability, tone: 'success' },
    { label: '긴급성 유도', value: mockScores.urgency, tone: 'danger' },
  ];

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas analysis-summary-page">
        <Navbar />

        <div className="analysis-summary-page__header">
          <div>
            <h2 className="analysis-summary-page__title">피싱 위험도 정밀 요약 리포트</h2>
            <p className="analysis-summary-page__subtitle">
              각 탐지 지표별 정량적 위험도 점수와 종합 대응 가이드라인입니다.
            </p>
          </div>
          <button
            className="analysis-summary-page__back-btn"
            onClick={() => navigate('/analysis/result', { state: { text: reportText } })}
          >
            ← 기본 분석 창으로
          </button>
        </div>

        <div className="analysis-summary-page__metrics">
          {metricCards.map((m) => (
            <div key={m.label} className="metric-card">
              <span className="metric-card__label">{m.label}</span>
              <div className="metric-card__row">
                <span className={'metric-card__value metric-card__value--' + m.tone}>{m.value}</span>
                <div className="metric-card__bar-track">
                  <div
                    className={'metric-card__bar-fill metric-card__bar-fill--' + m.tone}
                    style={{ width: m.value }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="analysis-summary-page__final">
          <div className="analysis-summary-page__score-panel">
            <span className="analysis-summary-page__score-label">최종 피싱 위험도</span>
            <span className="analysis-summary-page__score-value">{mockScores.total}</span>
            <span className="badge badge--danger analysis-summary-page__score-tag">
              ⚠️ 위험 등급 피싱 의심
            </span>
          </div>

          <div className="analysis-summary-page__detail-col">
            <div className="analysis-summary-page__detail-card">
              <div className="analysis-summary-page__detail-heading">
                <span className="analysis-summary-page__heading-bar analysis-summary-page__heading-bar--blue" />
                상세 분석 요약
              </div>
              <div className="analysis-summary-page__detail-body">
                입력된 데이터 분석 결과 사칭 유도 수치 정보가 종합 평점 {mockScores.total}로 매우 높은
                위험 수준을 보이고 있습니다. 인가되지 않은 도메인 자산의 URL 접근 기록이 확인되었으며,
                문장 내부 사칭 템플릿과의 높은 일치율이 식별되었습니다.
              </div>
            </div>

            <div className="analysis-summary-page__detail-card">
              <div className="analysis-summary-page__detail-heading">
                <span className="analysis-summary-page__heading-bar analysis-summary-page__heading-bar--amber" />
                권장 조치 사항
              </div>
              <div className="analysis-summary-page__detail-body">
                1. 메세지 내부에 포함된 웹 링크(URL)를 절대 클릭하지 마십시오.
                <br />
                2. 발신번호를 스팸 처리 및 블랙리스트에 제보하여 추가 피해를 방지하십시오.
                <br />
                3. 기관 사칭이 의심되므로 수사기관 혹은 공식 고객센터를 통해 진위 여부를 재차
                확인하십시오.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisSummaryPage;
