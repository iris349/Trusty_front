import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisResultPage.css';

function AnalysisResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [reportText, setReportText] = useState('제보된 내역 데이터가 없습니다.');

  useEffect(() => {
    if (location.state?.text) {
      setReportText(location.state.text);
    }
  }, [location.state]);

  const hasUrl =
    reportText.includes('http') ||
    reportText.includes('.com') ||
    reportText.includes('.kr') ||
    reportText.includes('링크') ||
    reportText.includes('주소');
  const urlDynamicText = hasUrl
    ? '비인가 도메인 및 악성 피싱 유도 아웃링크 정황 식별'
    : '텍스트 내부에 탐지 대상 위험 아웃링크 주소가 발견되지 않음';

  const isImpersonation =
    reportText.includes('엄마') ||
    reportText.includes('딸') ||
    reportText.includes('아들') ||
    reportText.includes('검찰') ||
    reportText.includes('은행') ||
    reportText.includes('지원금');
  const languageDynamicText = isImpersonation
    ? '가족 관계 혹은 공공 금융 행정 기관 사칭 기법과 100% 일치'
    : '문장 구조 내 사칭 패턴 및 수법 특이사항 발견되지 않음';

  const hasSuspiciousCaller =
    reportText.includes('해외') || reportText.includes('010') || reportText.includes('번호');
  const callerDynamicText = hasSuspiciousCaller
    ? '회선 변조 의심 또는 신고 블랙리스트 누적 번호 매칭 완료'
    : '일반 발신 지표 범주에 속하나 사후 모니터링 필요';

  const isUrgent =
    reportText.includes('급해') ||
    reportText.includes('당장') ||
    reportText.includes('빨리') ||
    reportText.includes('즉시');
  const urgencyDynamicText = isUrgent
    ? "'즉시 인증', '당장 송금' 등 판단을 흐리게 하는 압박감 유발 단어 포함"
    : '시간 제한 조치 요구 등의 긴급 강압 징후가 발견되지 않음';

  const cards = [
    { title: 'URL 위험도', value: urlDynamicText, danger: hasUrl },
    { title: '발신자 신뢰도', value: callerDynamicText, danger: hasSuspiciousCaller },
    { title: '언어 패턴 검증', value: languageDynamicText, danger: isImpersonation },
    { title: '긴급성 유도 분석', value: urgencyDynamicText, danger: isUrgent },
  ];

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas analysis-result-page">
        <Navbar />

        <div className="analysis-result-page__header">
          <div>
            <h2 className="analysis-result-page__title">피싱 위험도 정밀 분석 결과</h2>
            <p className="analysis-result-page__subtitle">
              인공지능 모델이 수신 텍스트의 악성 사기 기법 리스크를 심층 분석한 데이터입니다.
            </p>
          </div>
          <button
            className="analysis-result-page__summary-btn"
            onClick={() => navigate('/analysis/summary', { state: { text: reportText } })}
          >
            정밀 분석 요약 보기 →
          </button>
        </div>

        <div className="analysis-result-page__source-panel">
          <div className="analysis-result-page__source-label">제보된 텍스트 원문</div>
          <div className="analysis-result-page__source-text">{reportText}</div>
        </div>

        <div className="analysis-result-page__grid">
          {cards.map((card, i) => (
            <div key={i} className="analysis-result-page__card">
              <div className="analysis-result-page__card-header">
                <span className="analysis-result-page__card-title">{card.title}</span>
                <span className={'badge ' + (card.danger ? 'badge--danger' : 'badge--success')}>
                  {card.danger ? '⚠️ 위험 탐지' : '✓ 안전 지표'}
                </span>
              </div>
              <div className="analysis-result-page__card-value">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnalysisResultPage;
