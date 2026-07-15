import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
// import Navbar from './components/Navbar' // 필요 없다면 주석 처리 또는 삭제하세요

import MainAnalysisPage from './pages/MainAnalysisPage'
import AnalysisInputPage from './pages/AnalysisInputPage'
import AnalysisResultPage from './pages/AnalysisResultPage'
import AnalysisSummaryPage from './pages/AnalysisSummaryPage'
import LookupPage from './pages/LookupPage'
import ReportMainPage from './pages/ReportMainPage'
import ReportPage from './pages/ReportPage'
import CommunityPage from './pages/CommunityPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

// 파일 이름과 일치하도록 수정 (tokens.css, Layout.css)
import './styles/index.css';
import './styles/tokens.css'; 
import './styles/Layouts.css';
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainAnalysisPage />} />
        <Route path="/analysis/input" element={<AnalysisInputPage />} />
        <Route path="/analysis/result" element={<AnalysisResultPage />} />
        <Route path="/analysis/summary" element={<AnalysisSummaryPage />} />
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/report" element={<ReportMainPage />} />
        <Route path="/report/detail" element={<ReportPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainAnalysisPage />} />
      </Routes>
    </Router>
  )
}

export default App;