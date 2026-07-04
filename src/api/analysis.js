// src/api/analysis.js
import client from './client';

/** AI 분석 요청 — 응답이 바로 최종 결과 (폴링 불필요) */
export async function requestAnalysis(inputText) {
  const res = await client.post('/analysis', { input_text: inputText });
  return res.data; // { id, user_id, input_text, risk_level, score, scam_type, reason, created_at }
}

/** 내 분석 기록 전체 조회 */
export async function getAnalysisList() {
  const res = await client.get('/analysis');
  return res.data;
}

/** 특정 분석 결과 상세 조회 */
export async function getAnalysisDetail(analysisId) {
  const res = await client.get(`/analysis/${analysisId}`);
  return res.data;
}

/** 누적 분석 횟수 */
export async function getAnalysisCount() {
  const res = await client.get('/analysis/count');
  return res.data.count;
}