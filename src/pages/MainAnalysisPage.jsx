import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MainAnalysisPage.css';

function MainAnalysisPage() {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState('');

  const handleAnalyze = () => {
    if (!textInput.trim()) {
      alert('분석할 문자나 메일 내용을 입력해 주세요!');
      return;
    }
    navigate('/analysis/result', { state: { text: textInput } });
  };

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas main-analysis-page">
        <Navbar />

        <div className="main-analysis-page__hero">
          <div className="main-analysis-page__badge">🛡️ AI 연동 실시간 피싱 감지 시스템</div>

          <h1 className="main-analysis-page__headline">
            의심스러운 메시지, <br />
            <span className="main-analysis-page__brand">Trusty</span> 로 검증하세요.
          </h1>

          <p className="main-analysis-page__subcopy">
            AI 기반 심층 분석으로 스미싱과 피싱 위험을 <br />
            정확하고 신속하게 확인해드립니다.
          </p>
        </div>

        <div className="main-analysis-page__form-card">
          <div className="main-analysis-page__form-header">
            <span className="main-analysis-page__form-title">분석할 텍스트 원문 입력</span>
            <span className="main-analysis-page__form-note">
              * 개인정보를 유도하는 문자/메일 내용을 그대로 붙여넣으세요.
            </span>
          </div>

          <textarea
            className="main-analysis-page__textarea"
            placeholder="수신된 문자 메시지 원문 또는 의심스러운 메일 본문 내용을 여기에 붙여넣으세요. (예: 엄마 나 핸드폰 액정 깨져서 문자했는데 이 링크로...)"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />

          <div className="main-analysis-page__form-actions">
            <div className="main-analysis-page__analyze-btn" onClick={handleAnalyze}>
              <span className="main-analysis-page__analyze-btn-text">분석하기</span>
            </div>
          </div>
        </div>

        <div className="main-analysis-page__footer">
          <div className="main-analysis-page__footer-links">
            <div className="main-analysis-page__footer-link" onClick={() => navigate('/search-history')}>
              🔍 최근 피싱 블랙리스트 이력 조회하기
            </div>
            <div className="main-analysis-page__footer-link" onClick={() => navigate('/report')}>
              🚨 새로운 피해 사례 직접 제보하기
            </div>
          </div>
          <div className="main-analysis-page__footer-copyright">© 2026 Trusty Security. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default MainAnalysisPage;
