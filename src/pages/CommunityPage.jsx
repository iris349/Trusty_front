import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CommunityPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('group');

  const mockReports = [
    { id: 1, title: "[주의] 검찰청 사칭 계정 휴면 해제 유도 문자", date: "2026-06-30", author: "user***" },
    { id: 2, title: "XX은행 긴급 재난지원금 신청 유도 피싱 메일 공유합니다", date: "2026-06-29", author: "안전제일" },
  ];

  const mockNews = [
    { id: 1, title: "KISA, 최신 스미싱 트렌드 발표... '택배 조회 배송 오류' 가장 많아", source: "보안뉴스" },
    { id: 2, title: "LLM AI를 활용한 신종 피싱 메일 차단 기술 고도화 트렌드", source: "IT Daily" },
  ];

  const myReports = [
    { id: 1, title: "010-XXXX-XXXX 번호로 온 해외 결제 문자 의심 제보", status: "위험(분석완료)", date: "2026-06-28" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'group':
        return (
          <div style={{ width: "100%", background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", overflow: "hidden" }}>
            
            <div style={{ display: "flex", gap: "12px", padding: "16px", borderBottom: "1px solid #E2E8F0" }}>
              <img style={{ width: "48px", height: "48px", borderRadius: "50%" }} src="https://placehold.co/48x48" alt="my profile" />
              <div style={{ flex: 1 }}>
                <input 
                  type="text" 
                  placeholder="무슨 일이 일어나고 있나요?" 
                  style={{ width: "100%", border: "none", outline: "none", fontSize: "19px", padding: "8px 0", fontFamily: "Inter" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                  <div style={{ display: "flex", gap: "15px", color: "#0088FF", fontSize: "18px", cursor: "pointer" }}>
                    <span>🖼️</span> <span>🎬</span> <span>📊</span> <span>😀</span>
                  </div>
                  <button style={{ background: "#73ECFC", color: "black", border: "none", padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}>
                    게시하기
                  </button>
                </div>
              </div>
            </div>

            <div style={{ maxHeight: "350px", overflowY: "auto" }}>
              
              <div style={{ display: "flex", gap: "12px", padding: "16px", borderBottom: "1px solid #E2E8F0" }}>
                <img style={{ width: "48px", height: "48px", borderRadius: "50%" }} src="https://placehold.co/48x48/FFB6C1/000000" alt="profile" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "700", fontSize: "16px", color: "black" }}>피싱헌터</span>
                    <span style={{ color: "#64748B", fontSize: "15px" }}>@phishing_hunter</span>
                    <span style={{ color: "#64748B", fontSize: "15px" }}>· 6월 29일</span>
                  </div>
                  <div style={{ fontSize: "16px", color: "black", lineHeight: "1.5", marginBottom: "12px" }}>
                    엄마 프사 해놓고 액정 깨졌다고 접근하는 신종 카톡 사칭 피싱 대화 내용 공유합니다. 다들 부모님께 공유해서 절대 속지 말라고 하세요!!
                  </div>
                  
                  <div style={{ border: "1px solid #E2E8F0", borderRadius: "16px", padding: "16px", background: "#F8FAFC", display: "flex", flexDirection: "column", gap: "8px", maxWidth: "600px" }}>
                    <div style={{ alignSelf: "flex-start", background: "#E2E8F0", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>엄마 나 폰 액정 깨져서 수리 맡겼어ㅠㅠ</div>
                    <div style={{ alignSelf: "flex-start", background: "#E2E8F0", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>지금 임시폰이라 전화는 안돼 문자만 가능해</div>
                    <div style={{ alignSelf: "flex-end", background: "#0088FF", color: "white", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>아이구 어쩌다 그랬어 보험은 들어놨구?</div>
                    <div style={{ alignSelf: "flex-start", background: "#E2E8F0", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>응 근데 나 급하게 인증받아야 할 게 있어서 그런데 엄마 명의로 먼저 신청해도 돼?</div>
                    <div style={{ alignSelf: "flex-start", background: "#E2E8F0", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>내가 보내주는 링크 들어가서 신분증 사진 좀 찍어서 올려줘!!</div>
                    <div style={{ alignSelf: "flex-end", background: "#0088FF", color: "white", padding: "10px 14px", borderRadius: "18px", maxWidth: "70%", fontSize: "15px" }}>잠시만 Trusty 앱에 링크 검사 먼저 해볼게</div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "400px", marginTop: "12px", color: "#64748B", fontSize: "14px" }}>
                    <span style={{ cursor: "pointer" }}>💬 24</span>
                    <span style={{ cursor: "pointer" }}>🔁 3.5천</span>
                    <span style={{ cursor: "pointer", color: "#F43F5E" }}>❤️ 4.2만</span>
                    <span style={{ cursor: "pointer" }}>📊 12만</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", padding: "16px", borderBottom: "1px solid #E2E8F0" }}>
                <img style={{ width: "48px", height: "48px", borderRadius: "50%" }} src="https://placehold.co/48x48/73ECFC/000000" alt="profile" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "700", fontSize: "16px", color: "black" }}>화이트해커</span>
                    <span style={{ color: "#64748B", fontSize: "15px" }}>@whitehat_korea</span>
                    <span style={{ color: "#64748B", fontSize: "15px" }}>· 방금 전</span>
                  </div>
                  <div style={{ fontSize: "16px", color: "black", lineHeight: "1.5" }}>
                    방금 '국민건강보험 공단' 사칭해서 건강검진 환급금 신청하라는 메세지 받았는데 다들 조심하세요!! 주소 대놓고 이상하네요 ㄷㄷ Trusty 조회해보니까 발신자 신뢰도 최하위권에 위험 도메인으로 확인됩니다.
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "400px", marginTop: "12px", color: "#64748B", fontSize: "14px" }}>
                    <span style={{ cursor: "pointer" }}>💬 5</span>
                    <span style={{ cursor: "pointer" }}>🔁 42</span>
                    <span style={{ cursor: "pointer" }}>❤️ 128</span>
                    <span style={{ cursor: "pointer" }}>📊 1.5천</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      
      case 'reports':
        return (
          <div style={{ padding: "20px 0" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>다른 이용자들의 제보 내역</h3>
            {mockReports.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", background: "#F1F4F9", borderRadius: "15px", marginBottom: "10px" }}>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>{item.title}</span>
                <span style={{ color: "#64748B", fontSize: "14px" }}>{item.author} | {item.date}</span>
              </div>
            ))}
          </div>
        );

      case 'news':
        return (
          <div style={{ padding: "20px 0" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>보안 및 피싱 최신 뉴스</h3>
            {mockNews.map(item => (
              <div key={item.id} style={{ padding: "20px", background: "#F1F4F9", borderRadius: "15px", marginBottom: "10px", borderLeft: "5px solid #73ECFC" }}>
                <h4 style={{ fontSize: "18px", margin: "0 0 5px 0" }}>{item.title}</h4>
                <small style={{ color: "#0088FF" }}>출처: {item.source}</small>
              </div>
            ))}
          </div>
        );

      case 'my':
        return (
          <div style={{ padding: "20px 0" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>MY - 내가 제보한 내역 관리</h3>
            {myReports.length > 0 ? (
              myReports.map(item => (
                <div key={item.id} style={{ padding: "20px", background: "rgba(218, 235, 254, 0.8)", borderRadius: "15px", marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "600" }}>{item.title}</div>
                    <div style={{ fontSize: "14px", color: "#64748B", marginTop: "5px" }}>제보일: {item.date}</div>
                  </div>
                  <span style={{ color: "#FB1919", fontWeight: "bold" }}>{item.status}</span>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", color: "#64748B", padding: "40px" }}>아직 제보한 내역이 없습니다.</div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <Navbar />

      <div style={{ width: "1456px", height: "924px", left: "0px", top: "100px", position: "absolute" }}>
        <img style={{ width: "1456px", height: "376.55px", left: "0px", top: "0px", position: "absolute" }} src="https://placehold.co/1456x377" alt="community banner" />
        
        <div style={{ width: "1456px", height: "683px", left: "0px", top: "400px", position: "absolute" }}>
          <div style={{ width: "1052px", height: "550px", left: "28.50px", top: "0px", position: "absolute" }}>
            <div style={{ left: "0px", top: "0px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 600 }}>
              피싱 경험 공유방
            </div>
            
            <div style={{ width: "1052px", height: "39px", left: "0px", top: "68px", position: "absolute" }}>
              <div 
                onClick={() => setActiveTab('group')} 
                style={{ left: "0px", top: "0px", position: "absolute", color: activeTab === 'group' ? "#0088FF" : "black", fontWeight: activeTab === 'group' ? "bold" : "normal", fontSize: "24px", fontFamily: "Inter", cursor: "pointer" }}
              >
                그룹 활동
              </div>
              <div 
                onClick={() => setActiveTab('reports')} 
                style={{ left: "146px", top: "0px", position: "absolute", color: activeTab === 'reports' ? "#0088FF" : "black", fontWeight: activeTab === 'reports' ? "bold" : "normal", fontSize: "24px", fontFamily: "Inter", cursor: "pointer" }}
              >
                제보 내역
              </div>
              <div 
                onClick={() => setActiveTab('news')} 
                style={{ left: "298px", top: "0px", position: "absolute", color: activeTab === 'news' ? "#0088FF" : "black", fontWeight: activeTab === 'news' ? "bold" : "normal", fontSize: "24px", fontFamily: "Inter", cursor: "pointer" }}
              >
                뉴스창
              </div>
              <div 
                onClick={() => setActiveTab('my')} 
                style={{ left: "412px", top: "0px", position: "absolute", color: activeTab === 'my' ? "#0088FF" : "black", fontWeight: activeTab === 'my' ? "bold" : "normal", fontSize: "24px", fontFamily: "Inter", cursor: "pointer" }}
              >
                MY
              </div>
              <div style={{ width: "1052px", height: "0px", left: "0px", top: "39px", position: "absolute", outline: "1px black solid" }}></div>
            </div>

            <div style={{ width: "1052px", top: "120px", position: "absolute" }}>
              {renderTabContent()}
            </div>
          </div>
          
          <div style={{ width: "313px", height: "563px", left: "1114.50px", top: "0px", position: "absolute", background: "white", border: "1px black solid" }}></div>
          
          <div onClick={() => navigate('/')} style={{ left: "1136.36px", top: "127px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>
            홈
          </div>
          <div onClick={() => navigate('/report')} style={{ left: "1136.36px", top: "210px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>
            피싱경험 제보창
          </div>
          <div onClick={() => setActiveTab('news')} style={{ left: "1136.36px", top: "290px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>
            뉴스
          </div>
          
          <div style={{ left: "1178.94px", top: "54px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>검색</div>
          <div style={{ width: "257.23px", height: "0px", left: "1128.65px", top: "109px", position: "absolute", outline: "1px black solid" }}></div>
          <img style={{ width: "42.88px", height: "42.88px", left: "1131.77px", top: "45.06px", position: "absolute" }} src="https://placehold.co/43x43" alt="search icon" />
          
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;