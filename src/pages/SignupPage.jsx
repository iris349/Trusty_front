import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { signup } from '../api/auth';
import './SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.userId.trim() || !form.password || !form.passwordConfirm || !form.email.trim()) {
      alert('모든 항목을 입력해 주세요!');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await signup(form.email, form.password);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />

      <div className="signup-card">
        <div className="signup-card__title">회원가입</div>

        <div className="signup-card__inputs">
          <div className="signup-input">
            <svg className="signup-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              placeholder="사용하실 아이디를 입력하세요."
              value={form.userId}
              onChange={handleChange('userId')}
              className="signup-input__field"
            />
          </div>

          <div className="signup-input">
            <svg className="signup-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <input
              type="email"
              placeholder="이메일을 입력하세요."
              value={form.email}
              onChange={handleChange('email')}
              className="signup-input__field"
            />
          </div>

          <div className="signup-input signup-input--password">
            <svg className="signup-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={form.password}
              onChange={handleChange('password')}
              className="signup-input__field signup-input__field--transparent"
            />
          </div>

          <div className="signup-input signup-input--password">
            <svg className="signup-input__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력하세요."
              value={form.passwordConfirm}
              onChange={handleChange('passwordConfirm')}
              className="signup-input__field signup-input__field--transparent"
            />
          </div>
        </div>

        <button className="signup-card__submit" onClick={handleSubmit}>
          가입하기
        </button>

        <div className="signup-card__links">
          <span className="signup-card__link" onClick={() => navigate('/login')}>
            이미 계정이 있으신가요? 로그인
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;