/**
 * ============================================================
 * 피싱 분석 API 연동 (요청 → 폴링 → 결과)
 * ============================================================
 * ⚠️ 백엔드 스펙 문서가 아직 없어서, 아래 계약(contract)은
 * "일반적인 비동기 작업 API"의 표준 관례로 임의로 정한 것입니다.
 * 백엔드 팀에게 실제 응답 예시를 받으면 이 파일의
 * 필드명/엔드포인트만 고치면 됩니다 (다른 파일은 안 건드려도 됨).
 *
 * 가정한 흐름:
 *   1) POST /api/analysis            { text } → { jobId }
 *   2) GET  /api/analysis/:jobId     → { status, result? }
 *      status: 'pending' | 'processing' | 'done' | 'failed'
 *   3) status가 'done'이 될 때까지 POLL_INTERVAL_MS 간격으로 반복 조회
 *
 * 가정한 공통 응답 래퍼:
 *   { success: boolean, data: {...}, message?: string }
 * ============================================================
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const POLL_INTERVAL_MS = 2000; // 2초마다 상태 확인
const POLL_TIMEOUT_MS = 30000; // 30초 넘게 안 끝나면 타임아웃 처리

async function parseJsonResponse(res) {
  if (!res.ok) {
    throw new Error(`요청 실패 (HTTP ${res.status})`);
  }
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.message || '요청이 실패했습니다.');
  }
  return json.data;
}

/** 1) 분석 요청 → jobId 발급 */
export async function requestAnalysis(text) {
  const res = await fetch(`${API_BASE}/api/analysis`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const data = await parseJsonResponse(res);
  return data.jobId; // ⚠️ 실제 필드명 확인되면 여기만 수정
}

/** 2) jobId로 현재 상태 1회 조회 */
async function fetchAnalysisStatus(jobId) {
  const res = await fetch(`${API_BASE}/api/analysis/${jobId}`);
  return parseJsonResponse(res); // { status, result? }
}

/**
 * 3) 완료(done)될 때까지 폴링.
 * 반환값: { promise, cancel }
 *   - promise: 최종 result로 resolve, 실패/타임아웃 시 reject
 *   - cancel(): 컴포넌트 unmount 시 폴링 중단용
 */
export function pollAnalysis(jobId, { onProgress } = {}) {
  let cancelled = false;
  let timeoutId;

  const promise = new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const tick = async () => {
      if (cancelled) return;

      if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
        reject(new Error('분석이 너무 오래 걸립니다. 잠시 후 다시 시도해주세요.'));
        return;
      }

      try {
        const data = await fetchAnalysisStatus(jobId);
        onProgress?.(data.status);

        if (data.status === 'done') {
          resolve(data.result);
        } else if (data.status === 'failed') {
          reject(new Error('분석에 실패했습니다.'));
        } else {
          timeoutId = setTimeout(tick, POLL_INTERVAL_MS);
        }
      } catch (err) {
        reject(err);
      }
    };

    tick();
  });

  const cancel = () => {
    cancelled = true;
    clearTimeout(timeoutId);
  };

  return { promise, cancel };
}

/**
 * 편의 함수: 요청 + 폴링을 한 번에.
 * cancel()을 반환하므로 useEffect cleanup에서 바로 쓸 수 있음.
 */
export function analyzeTextWithPolling(text, { onProgress } = {}) {
  let cancelPoll = () => {};

  const promise = (async () => {
    onProgress?.('pending');
    const jobId = await requestAnalysis(text);
    const { promise: pollPromise, cancel } = pollAnalysis(jobId, { onProgress });
    cancelPoll = cancel;
    return pollPromise;
  })();

  return { promise, cancel: () => cancelPoll() };
}
