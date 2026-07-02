import React from 'react';
import Navbar from '../components/Navbar';
import './LookupPage.css';

function LookupPage() {
  return (
    <div className="lookup-page">
      <div className="lookup-page__search-bg" />
      <div className="lookup-page__desc">
        메일 아이디나 핸드폰 번호를 입력하여 신고 이력 및 위험 여부를 실시간으로 확인하세요
      </div>
      <div className="lookup-page__field-label">이메일 ID 또는 휴대폰 번호</div>

      <div className="lookup-page__search-btn">
        <div className="lookup-page__search-btn-text">검색</div>
      </div>

      <div className="lookup-page__title">피싱 이력 조회</div>
      <div className="lookup-page__hint">검색 결과를 확인해 보세요</div>

      <div className="lookup-page__results">
        <div className="lookup-page__result-row" />
        <div className="lookup-page__result-row" />

        <div className="lookup-page__result-target lookup-page__result-target--1">user@example.com</div>
        <div className="lookup-page__result-target lookup-page__result-target--2">010-1234-5678</div>
        <div className="lookup-page__result-status lookup-page__result-status--danger">신고됨(위험)</div>
        <div className="lookup-page__result-status lookup-page__result-status--safe">신고됨(안전)</div>

        <div className="lookup-page__result-detail lookup-page__result-detail--1">상세보기</div>
        <div className="lookup-page__result-detail lookup-page__result-detail--2">상세보기</div>
      </div>

      <Navbar />
    </div>
  );
}

export default LookupPage;
