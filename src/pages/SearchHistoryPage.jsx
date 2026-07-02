import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './SearchHistoryPage.css';

function SearchHistoryPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const [historyList] = useState([
    { id: 1, target: 'user@example.com', text: '신고됨(위험)', tone: 'danger', detailText: 'user@example.com 번호로 온 의심 사례 신고 기록 데이터입니다.' },
    { id: 2, target: '010-1234-5678', text: '신고됨(안전)', tone: 'safe', detailText: '010-1234-5678 연락처 검증 결과 정상 기관으로 확인된 안전 기록 데이터입니다.' },
  ]);

  const handleSearch = () => {
    if (!searchInput.trim()) {
      alert('이메일 ID 또는 휴대폰 번호를 입력해 주세요!');
      return;
    }
    navigate('/analysis/result', { state: { text: searchInput } });
  };

  return (
    <div className="page-viewport page-viewport--white-bg">
      <div className="search-history-page">
        <Navbar />

        <div className="search-history-page__title">피싱 이력 조회</div>
        <div className="search-history-page__desc">
          메일 아이디나 핸드폰 번호를 입력하여 신고 이력 및 위험 여부를 실시간으로 확인하세요
        </div>
        <div className="search-history-page__field-label">이메일 ID 또는 휴대폰 번호</div>

        <input
          type="text"
          placeholder="이메일 주소 또는 전화번호를 입력하고 엔터를 누르세요..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          className="search-history-page__input"
        />

        <div className="search-history-page__search-btn" onClick={handleSearch}>
          <div className="search-history-page__search-btn-text">검색</div>
        </div>

        <div className="search-history-page__hint">검색 결과를 확인해 보세요</div>

        <div className="search-history-page__list">
          {historyList.map((item) => (
            <div key={item.id} className="search-history-page__row">
              <div className="search-history-page__row-target">{item.target}</div>
              <div className={'search-history-page__row-status search-history-page__row-status--' + item.tone}>
                {item.text}
              </div>
              <div
                className="search-history-page__row-detail"
                onClick={() => navigate('/analysis/result', { state: { text: item.detailText } })}
              >
                상세보기
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchHistoryPage;
