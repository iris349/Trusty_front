import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { IoCallOutline, IoChatbubbleOutline, IoMailOutline } from 'react-icons/io5';
import './ReportMainPage.css';

const REPORT_TYPES = [
  {
    id: 'phone',
    title: '전화',
    desc: '전화통화, ARS 통화로 기관/대출/수사 등을 받은 경우',
    Icon: IoCallOutline,
  },
  {
    id: 'sms',
    title: '문자(URL 포함)',
    desc: '문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우',
    Icon: IoChatbubbleOutline,
  },
  {
    id: 'email',
    title: '이메일(URL 포함)',
    desc: '이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우',
    Icon: IoMailOutline,
  },
];

function ReportMainPage() {
  const navigate = useNavigate();

  const goToDetail = (type) => {
    navigate('/report/detail', { state: { type } });
  };

  return (
    <div className="report-main-page">
      <Navbar />

      <div className="report-main-page__inner">
        <h1 className="report-main-page__title">사용자 제보 및 피싱 경험담</h1>
        <p className="report-main-page__desc">
          사용자 여러분의 실제 피싱 경험담을 공유해 주세요. Trusty의 AI 모델이 더 정확하게 위험을
          감지할 수 있도록 도와드립니다.
        </p>

        <div className="report-main-page__cards">
          {REPORT_TYPES.map(({ id, title, desc, Icon }) => (
            <div
              key={id}
              className="report-main-page__card"
              onClick={() => goToDetail(id)}
            >
              <Icon className="report-main-page__card-icon" />
              <div className="report-main-page__card-title">{title}</div>
              <div className="report-main-page__card-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReportMainPage;