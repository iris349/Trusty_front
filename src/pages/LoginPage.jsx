import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [rememberId, setRememberId] = useState(false);
  const [rememberPw, setRememberPw] = useState(false);

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-card">
        <div className="login-card__title">로그인</div>

        <div className="login-card__inputs">
          <div className="login-input">
            <svg className="login-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input type="text" placeholder="아이디를 입력하세요." className="login-input__field" />
          </div>

          <div className="login-input login-input--password">
            <svg className="login-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              className="login-input__field login-input__field--transparent"
            />
          </div>
        </div>

        <div className="login-card__checkboxes">
          <label className="login-checkbox">
            <input
              type="checkbox"
              checked={rememberId}
              onChange={() => setRememberId(!rememberId)}
            />
            아이디 저장
          </label>
          <label className="login-checkbox">
            <input
              type="checkbox"
              checked={rememberPw}
              onChange={() => setRememberPw(!rememberPw)}
            />
            비밀번호 저장
          </label>
        </div>

        <button className="login-card__submit">로그인</button>

        <div className="login-card__links">
          <span className="login-card__link login-card__link--primary" onClick={() => navigate('/signup')}>
            회원가입
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;