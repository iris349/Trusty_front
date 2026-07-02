import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportMainPage.css';

function ReportMainPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('');

  const handleReportSubmit = () => {
    if (!selectedType) {
      alert('제보 유형(전화, 문자, 이메일)을 먼저 선택해 주세요!');
      return;
    }
    navigate('/report/detail', { state: { type: selectedType } });
  };

  return (
    <div className="report-main-page">
      <Navbar />

      <div className="report-main-page__title">사용자 제보 및 피싱 경험담</div>
      <div className="report-main-page__desc">
        사용자 여러분의 실제 피싱 경험담을 공유해 주세요. Trusty의 AI 모델이 더 정확하게 위험을
        감지할 수 있도록 도와드립니다.
      </div>

      <div
        onClick={() => setSelectedType('phone')}
        className={'report-main-page__card report-main-page__card--phone' + (selectedType === 'phone' ? ' report-main-page__card--selected' : '')}
      />
      <div
        onClick={() => setSelectedType('sms')}
        className={'report-main-page__card report-main-page__card--sms' + (selectedType === 'sms' ? ' report-main-page__card--selected' : '')}
      />
      <div
        onClick={() => setSelectedType('email')}
        className={'report-main-page__card report-main-page__card--email' + (selectedType === 'email' ? ' report-main-page__card--selected' : '')}
      />

      <div className="report-main-page__submit" onClick={handleReportSubmit}>
        <span className="report-main-page__submit-text">제보 접수하기</span>
      </div>

      <div className="report-main-page__labels">
        <div className="report-main-page__label report-main-page__label--phone-title">전화</div>
        <div className="report-main-page__label report-main-page__label--phone-desc">
          전화통화, ARS 통하로 기관/대출/수사 등을 받은 경우
        </div>
        <div className="report-main-page__icon report-main-page__icon--phone">☏</div>

        <div className="report-main-page__label report-main-page__label--sms-title">문자(URL 포함)</div>
        <div className="report-main-page__label report-main-page__label--sms-desc">
          문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
        </div>
        <div className="report-main-page__icon report-main-page__icon--sms">🗪</div>

        <div className="report-main-page__label report-main-page__label--email-title">이메일(URL 포함)</div>
        <div className="report-main-page__label report-main-page__label--email-desc">
          이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
        </div>
        <div className="report-main-page__icon report-main-page__icon--email">✉</div>
      </div>
    </div>
  );
}

export default ReportMainPage;
