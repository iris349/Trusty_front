import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const MENU_ITEMS = [
  { label: '홈', to: '/' },
  { label: '제보창', to: '/report' },
  { label: '커뮤니티창', to: '/community', state: { fromNavbar: true } },
  { label: '피싱 이력 조회', to: '/search-history' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__row">
        <div className="navbar__logo" onClick={() => navigate('/')}>
          Trusty
        </div>

        {MENU_ITEMS.map((item) => (
          <div
            key={item.to}
            className={'navbar__menu-item' + (location.pathname === item.to ? ' navbar__menu-item--active' : '')}
            onClick={() => navigate(item.to, item.state ? { state: item.state } : undefined)}
          >
            {item.label}
          </div>
        ))}

        <div className="navbar__login" onClick={() => navigate('/login')}>
          <span className="navbar__login-text">로그인</span>
          <span className="navbar__login-arrow" aria-hidden="true">➔</span>
        </div>
      </div>

      <div className="navbar__divider" />
    </div>
  );
}

export default Navbar;
