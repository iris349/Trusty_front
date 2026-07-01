import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CommunityPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('group');
  const fileInputRef = useRef(null);

  // 💡 상세 보기 게시글을 저장하는 상태 (null이면 목록, 값이 있으면 상세 창을 띄움)
  const [selectedPost, setSelectedPost] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  // 각 게시글별 댓글을 모의로 관리하기 위한 상태
  const [postComments, setPostComments] = useState({
    1: [
      { id: 1, author: "보안전문가", text: "이런 수법 진짜 조심해야 합니다. 부모님들이 당하기 딱 좋은 포맷이네요.", time: "1시간 전" },
      { id: 2, author: "클린인터넷", text: "Trusty로 검증하는 습관 필수입니다!", time: "40분 전" }
    ],
    2: []
  });

  useEffect(() => {
    if (location.state?.fromNavbar) {
      setActiveTab('group');
      setSelectedPost(null); // 네비게이션에서 오면 목록으로 초기화
    }
  }, [location.state]);

  const [inputText, setInputText] = useState("");
  const [groupPosts, setGroupPosts] = useState([
    {
      id: 1,
      name: "피싱헌터",
      handle: "@phishing_hunter",
      time: "6월 29일",
      content: "엄마 프사 해놓고 액정 깨졌다고 접근하는 신종 카톡 사칭 피싱 대화 내용 공유합니다. 다들 부모님께 공유해서 절대 속지 말라고 하세요!!",
      hasChat: true,
      likeCount: 42000,
      liked: false
    },
    {
      id: 2,
      name: "화이트해커",
      handle: "@whitehat_korea",
      time: "25분 전",
      content: "방금 '국민건강보험 공단' 사칭해서 건강검진 환급금 신청하라는 메세지 받았는데 다들 조심하세요!! 주소 대놓고 이상하네요 ㄷㄷ Trusty 조회해보니까 발신자 신뢰도 최하위권에 위험 도메인으로 확인됩니다.",
      hasChat: false,
      likeCount: 340,
      liked: false
    }
  ]);

  const mockNews = [
    { id: 1, title: "KISA, 최신 스미싱 트렌드 발표... '택배 조회 배송 오류' 가장 많아", source: "보안뉴스", time: "3시간 전", desc: "한국인터넷진흥원(KISA)은 최근 지인을 사칭한 택배 배송조회 우회 유도 문자가 급증함에 따라 출처가 불분명한 도메인 접근 자제를 당부했다." },
    { id: 2, title: "LLM AI를 활용한 신종 피싱 메일 차단 기술 고도화 트렌드", source: "IT Daily", time: "1일 전", desc: "인공지능 모델 우합 탐지 기법을 도입하여 대규모 언어 패턴และ 발신자 신뢰도를 실시간 스캐닝하는 차세대 보안 솔루션이 도입된다." },
  ];

  const mockReports = [
    { id: 1, title: "[주의] 검찰청 사칭 계정 휴면 해제 유도 문자", date: "2026-06-30", author: "user***", type: "basic", text: "검찰청 사칭 계정 휴면 해제 유도 문자 내용 전문 정보입니다." },
    { id: 2, title: "XX은행 긴급 재난지원금 신청 유도 피싱 메일 공유합니다", date: "2026-06-29", author: "안전제일", type: "summary", text: "지원금 신청 링크를 클릭하게 만드는 위험 메일 본문입니다." },
  ];

  const myReports = [
    { id: 1, title: "010-XXXX-XXXX 번호로 온 해외 결제 문자 의심 제보", status: "위험(분석완료)", date: "2026-06-28", type: "summary", text: "해외결제 문자 사칭 사기 기록 데이터 내용" }
  ];

  const handlePostSubmit = () => {
    if (!inputText.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    const newId = Date.now();
    const newPost = {
      id: newId,
      name: "나의 계정",
      handle: "@my_trusty_account",
      time: "방금 전",
      content: inputText,
      hasChat: false,
      likeCount: 0,
      liked: false
    };
    setGroupPosts([newPost, ...groupPosts]);
    setPostComments({ ...postComments, [newId]: [] });
    setInputText("");
  };

  const handleLikeToggle = (id, e) => {
    if (e) e.stopPropagation(); 
    setGroupPosts(groupPosts.map(post => {
      if (post.id === id) {
        const updatedPost = {
          ...post,
          liked: !post.liked,
          likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1
        };
        // 상세 보기 중인 게시글의 좋아요 수 업데이트 적용
        if (selectedPost && selectedPost.id === id) {
          setSelectedPost(updatedPost);
        }
        return updatedPost;
      }
      return post;
    }));
  };

  // 💡 댓글 등록 처리 핸들러
  const handleCommentSubmit = (postId) => {
    if (!commentInput.trim()) {
      alert("댓글 내용을 입력해주세요!");
      return;
    }
    const newComment = {
      id: Date.now(),
      author: "나의 계정",
      text: commentInput,
      time: "방금 전"
    };
    
    setPostComments({
      ...postComments,
      [postId]: [...(postComments[postId] || []), newComment]
    });
    setCommentInput("");
  };

  const handleReportClick = (item) => {
    if (item.type === "basic") {
      navigate('/analysis/result', { state: { text: item.text } });
    } else {
      navigate('/analysis/summary', { state: { text: item.text } });
    }
  };

  const formatLikeCount = (count) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}만`;
    }
    return count.toLocaleString();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'group':
        // 💡 1. 상세 글쓰기 및 댓글창 모드 활성화인 경우
        if (selectedPost) {
          const currentComments = postComments[selectedPost.id] || [];
          return (
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* 목록 돌아가기 상단 바 */}
              <div onClick={() => setSelectedPost(null)} style={{ color: "#0088FF", fontSize: "16px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center" }}>
                ← 피드 목록으로 돌아가기
              </div>

              {/* 선택된 원본 게시글 상세 카드 */}
              <div style={{ width: "100%", background: "white", border: "1px solid #E2E8F0", borderRadius: "24px", padding: "24px", boxSizing: "border-box" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", fontFamily: "Inter" }}>
                  <span style={{ fontWeight: "700", fontSize: "16px", color: "#0F172A" }}>{selectedPost.name}</span>
                  <span style={{ color: "#64748B", fontSize: "14px" }}>{selectedPost.handle}</span>
                  <span style={{ color: "#64748B", fontSize: "14px" }}>· {selectedPost.time}</span>
                </div>
                <div style={{ fontSize: "16px", color: "#0F172A", lineHeight: "1.6", fontFamily: "Inter", marginBottom: "16px" }}>
                  {selectedPost.content}
                </div>
                {selectedPost.hasChat && (
                  <div style={{ border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px", background: "#F8FAFC", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "100%", boxSizing: "border-box", marginBottom: "16px" }}>
                    <div style={{ alignSelf: "flex-start", background: "white", border: "1px solid #E2E8F0", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>엄마 나 폰 액정 깨져서 수리 맡겼어ㅠㅠ</div>
                    <div style={{ alignSelf: "flex-start", background: "white", border: "1px solid #E2E8F0", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>지금 임시폰이라 전화는 안돼 문자만 가능해</div>
                    <div style={{ alignSelf: "flex-end", background: "#0088FF", color: "white", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>아이구 어쩌다 그랬어 보험은 들어놨구?</div>
                  </div>
                )}
                <div style={{ display: "flex", color: "#64748B", fontSize: "14px", fontFamily: "Inter" }}>
                  <span onClick={() => handleLikeToggle(selectedPost.id)} style={{ cursor: "pointer", color: selectedPost.liked ? "#F43F5E" : "#64748B", fontWeight: selectedPost.liked ? "700" : "400" }}>
                    {selectedPost.liked ? "❤️" : "🖤"} 좋아요 {formatLikeCount(selectedPost.likeCount)}
                  </span>
                </div>
              </div>

              {/* 💡 실시간 댓글 입력 및 등록 보드 */}
              <div style={{ width: "100%", background: "white", border: "1px solid #E2E8F0", borderRadius: "24px", padding: "24px", boxSizing: "border-box" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "12px" }}>댓글 작성</div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input 
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="이 게시글에 댓글을 공유해 주세요..."
                    style={{ flex: 1, height: "46px", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "0 14px", outline: "none", fontSize: "15px" }}
                  />
                  <button 
                    onClick={() => handleCommentSubmit(selectedPost.id)}
                    style={{ background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", color: "white", border: "none", padding: "0 20px", borderRadius: "12px", fontWeight: 700, cursor: "pointer" }}
                  >
                    등록
                  </button>
                </div>

                {/* 누적된 댓글 리스트 */}
                <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {currentComments.map((comment) => (
                    <div key={comment.id} style={{ paddingBottom: "12px", borderBottom: "1px solid #F1F5F9" }}>
                      <div style={{ display: "flex", gap: "8px", marginBottom: "4px", fontSize: "13px" }}>
                        <span style={{ fontWeight: "700", color: "#1E293B" }}>{comment.author}</span>
                        <span style={{ color: "#94A3B8" }}>{comment.time}</span>
                      </div>
                      <div style={{ fontSize: "15px", color: "#334155", lineHeight: "1.4" }}>{comment.text}</div>
                    </div>
                  ))}
                  {currentComments.length === 0 && (
                    <div style={{ textAlign: "center", color: "#94A3B8", padding: "20px 0", fontSize: "14px" }}>첫 번째 댓글을 남겨보세요!</div>
                  )}
                </div>
              </div>
            </div>
          );
        }

        // 💡 2. 기존 피드 리스트 상태 구성
        return (
          <div style={{ width: "100%", background: "white", border: "1px solid #E2E8F0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", flexDirection: "column", padding: "20px", borderBottom: "1px solid #E2E8F0" }}>
              <input 
                type="text" 
                placeholder="무슨 일이 일어나고 있나요? 이곳에 공유해 주세요." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{ width: "100%", border: "none", outline: "none", fontSize: "18px", padding: "10px 0", fontFamily: "Inter" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
                <button 
                  onClick={() => fileInputRef.current.click()}
                  style={{ background: "white", border: "1px solid #E2E8F0", padding: "6px 14px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}
                >
                  파일 첨부
                </button>
                <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={(e) => { if(e.target.files[0]) alert(`${e.target.files[0].name} 파일 탑재 완료`); }} />
                <button 
                  onClick={handlePostSubmit}
                  style={{ background: "linear-gradient(135deg, #73ECFC 0%, #0088FF 100%)", color: "white", border: "none", padding: "8px 22px", borderRadius: "12px", cursor: "pointer", fontWeight: 700, fontSize: "15px", boxShadow: "0 6px 14px -4px rgba(0,136,255,0.35)" }}
                >
                  게시하기
                </button>
              </div>
            </div>

            <div style={{ maxHeight: "450px", overflowY: "auto" }}>
              {groupPosts.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)} // 💡 클릭 시 내부 State 기반으로 화면 전환 연동
                  style={{ display: "flex", flexDirection: "column", padding: "20px", borderBottom: "1px solid #E2E8F0", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#F8FAFC"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "white"}
                >
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", fontFamily: "Inter" }}>
                    <span style={{ fontWeight: "700", fontSize: "16px", color: "#0F172A" }}>{post.name}</span>
                    <span style={{ color: "#64748B", fontSize: "14px" }}>{post.handle}</span>
                    <span style={{ color: "#64748B", fontSize: "14px" }}>· {post.time}</span>
                  </div>
                  
                  <div style={{ fontSize: "16px", color: "#0F172A", lineHeight: "1.6", fontFamily: "Inter", marginBottom: post.hasChat ? "16px" : "12px" }}>
                    {post.content}
                  </div>
                  
                  {post.hasChat && (
                    <div style={{ border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px", background: "#F8FAFC", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "100%", marginBottom: "12px", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "flex-start", background: "white", border: "1px solid #E2E8F0", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>엄마 나 폰 액정 깨져서 수리 맡겼어ㅠㅠ</div>
                      <div style={{ alignSelf: "flex-start", background: "white", border: "1px solid #E2E8F0", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>지금 임시폰이라 전화는 안돼 문자만 가능해</div>
                      <div style={{ alignSelf: "flex-end", background: "#0088FF", color: "white", padding: "10px 14px", borderRadius: "14px", maxWidth: "80%", fontSize: "15px" }}>아이구 어쩌다 그랬어 보험은 들어놨구?</div>
                    </div>
                  )}

                  <div style={{ display: "flex", color: "#64748B", fontSize: "14px", fontFamily: "Inter" }}>
                    <span 
                      onClick={(e) => handleLikeToggle(post.id, e)}
                      style={{ cursor: "pointer", color: post.liked ? "#F43F5E" : "#64748B", fontWeight: post.liked ? "700" : "400" }}
                    >
                      {post.liked ? "❤️" : "🖤"} 좋아요 {formatLikeCount(post.likeCount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'reports':
        return (
          <div style={{ padding: "10px 0", maxHeight: "450px", overflowY: "auto" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#0F172A", fontWeight: 700, fontFamily: "Inter" }}>다른 이용자들의 제보 내역</h3>
            {mockReports.map(item => (
              <div key={item.id} onClick={() => handleReportClick(item)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", background: "white", borderRadius: "12px", marginBottom: "12px", cursor: "pointer", border: "1px solid #E2E8F0" }}>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#0F172A", fontFamily: "Inter" }}>{item.title}</span>
                <span style={{ color: "#64748B", fontSize: "14px", fontFamily: "Inter" }}>{item.author} | {item.date}</span>
              </div>
            ))}
          </div>
        );

      case 'news':
        return (
          <div style={{ padding: "10px 0", maxHeight: "450px", overflowY: "auto" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#0F172A", fontWeight: 700, fontFamily: "Inter" }}>보안 및 피싱 최신 뉴스</h3>
            {mockNews.map(item => (
              <div key={item.id} style={{ padding: "20px", background: "#FFFFFF", borderRadius: "16px", marginBottom: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px", fontFamily: "Inter" }}>
                  <span style={{ color: "#1E3A8A", fontSize: "13px", fontWeight: "bold" }}>{item.source}</span>
                  <span style={{ color: "#64748B", fontSize: "13px" }}>{item.time}</span>
                </div>
                <h4 style={{ fontSize: "18px", color: "#0F172A", margin: "0 0 8px 0", fontWeight: "700", fontFamily: "Inter" }}>{item.title}</h4>
                <p style={{ color: "#475569", fontSize: "14px", margin: 0, lineHeight: "1.6", fontFamily: "Inter" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        );

      case 'my':
        return (
          <div style={{ padding: "10px 0", maxHeight: "450px", overflowY: "auto" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#0F172A", fontWeight: 700, fontFamily: "Inter" }}>MY - 내가 제보한 내역 관리</h3>
            {myReports.map(item => (
              <div key={item.id} onClick={() => handleReportClick(item)} style={{ padding: "20px", background: "rgba(218, 235, 254, 0.5)", borderRadius: "16px", marginBottom: "12px", display: "flex", justifyContent: "space-between", cursor: "pointer", border: "1px solid #E2E8F0" }}>
                <div style={{ fontFamily: "Inter" }}>
                  <div style={{ fontSize: "16px", fontWeight: "700", color: "#0F172A" }}>{item.title}</div>
                  <div style={{ fontSize: "14px", color: "#64748B", marginTop: "5px" }}>제보일: {item.date}</div>
                </div>
                <span style={{ color: "#FB1919", fontWeight: "bold", alignSelf: "center", fontFamily: "Inter" }}>{item.status}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", minHeight: "1024px", background: "white", display: "flex", justifyContent: "center", position: "relative" }}>
      <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
        <Navbar />
        <div style={{ width: "1100px", left: "170px", top: "150px", position: "absolute", display: "flex", gap: "40px" }}>
          <div style={{ width: "760px", display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#0F172A", fontSize: "36px", fontFamily: "Inter", fontWeight: 700, marginBottom: "24px" }}>
              피싱 경험 공유방
            </div>
            <div style={{ width: "100%", height: "45px", position: "relative", marginBottom: "20px", display: "flex", gap: "35px" }}>
              <div onClick={() => { setActiveTab('group'); setSelectedPost(null); }} style={{ color: activeTab === 'group' ? "#0088FF" : "black", fontWeight: activeTab === 'group' ? 700 : 400, fontSize: "22px", fontFamily: "Inter", cursor: "pointer" }}>그룹 활동</div>
              <div onClick={() => { setActiveTab('reports'); setSelectedPost(null); }} style={{ color: activeTab === 'reports' ? "#0088FF" : "black", fontWeight: activeTab === 'reports' ? 700 : 400, fontSize: "22px", fontFamily: "Inter", cursor: "pointer" }}>제보 내역</div>
              <div onClick={() => { setActiveTab('news'); setSelectedPost(null); }} style={{ color: activeTab === 'news' ? "#0088FF" : "black", fontWeight: activeTab === 'news' ? 700 : 400, fontSize: "22px", fontFamily: "Inter", cursor: "pointer" }}>뉴스창</div>
              <div onClick={() => { setActiveTab('my'); setSelectedPost(null); }} style={{ color: activeTab === 'my' ? "#0088FF" : "black", fontWeight: activeTab === 'my' ? 700 : 400, fontSize: "22px", fontFamily: "Inter", cursor: "pointer" }}>MY</div>
              <div style={{ width: "100%", height: "0px", left: "0px", top: "42px", position: "absolute", outline: "1px #E2E8F0 solid" }}></div>
            </div>
            <div style={{ width: "100%" }}>{renderTabContent()}</div>
          </div>
          
          <div style={{ width: "300px", height: "550px", border: "1px solid #E2E8F0", borderRadius: "24px", background: "white", padding: "24px", boxSizing: "border-box", display: "flex", flexDirection: "column", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "10px", marginBottom: "24px" }}>
              <span style={{ fontSize: "22px", marginRight: "10px" }}>🔍</span>
              <span style={{ color: "#0F172A", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>검색</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontFamily: "Inter" }}>
              <div onClick={() => navigate('/')} style={{ color: "#0F172A", fontSize: "20px", fontWeight: 600, cursor: "pointer" }}>홈</div>
              <div onClick={() => navigate('/report')} style={{ color: "#0F172A", fontSize: "20px", fontWeight: 600, cursor: "pointer" }}>피싱경험 제보창</div>
              <div onClick={() => { setActiveTab('news'); setSelectedPost(null); }} style={{ color: "#0F172A", fontSize: "20px", fontWeight: 600, cursor: "pointer" }}>뉴스</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;