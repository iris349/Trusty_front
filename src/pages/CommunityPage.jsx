import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CommunityPage.css';

function CommunityPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('group');
  const fileInputRef = useRef(null);

  const [selectedPost, setSelectedPost] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [postComments, setPostComments] = useState({
    1: [
      { id: 1, author: '보안전문가', text: '이런 수법 진짜 조심해야 합니다. 부모님들이 당하기 딱 좋은 포맷이네요.', time: '1시간 전' },
      { id: 2, author: '클린인터넷', text: 'Trusty로 검증하는 습관 필수입니다!', time: '40분 전' },
    ],
    2: [],
  });

  useEffect(() => {
    if (location.state?.fromNavbar) {
      setActiveTab('group');
      setSelectedPost(null);
    }
  }, [location.state]);

  const [inputText, setInputText] = useState('');
  const [groupPosts, setGroupPosts] = useState([
    {
      id: 1,
      name: '피싱헌터',
      handle: '@phishing_hunter',
      time: '6월 29일',
      content:
        '엄마 프사 해놓고 액정 깨졌다고 접근하는 신종 카톡 사칭 피싱 대화 내용 공유합니다. 다들 부모님께 공유해서 절대 속지 말라고 하세요!!',
      hasChat: true,
      likeCount: 42000,
      liked: false,
    },
    {
      id: 2,
      name: '화이트해커',
      handle: '@whitehat_korea',
      time: '25분 전',
      content:
        "방금 '국민건강보험 공단' 사칭해서 건강검진 환급금 신청하라는 메세지 받았는데 다들 조심하세요!! 주소 대놓고 이상하네요 ㄷㄷ Trusty 조회해보니까 발신자 신뢰도 최하위권에 위험 도메인으로 확인됩니다.",
      hasChat: false,
      likeCount: 340,
      liked: false,
    },
  ]);

  const mockNews = [
    {
      id: 1,
      title: "KISA, 최신 스미싱 트렌드 발표... '택배 조회 배송 오류' 가장 많아",
      source: '보안뉴스',
      time: '3시간 전',
      desc: '한국인터넷진흥원(KISA)은 최근 지인을 사칭한 택배 배송조회 우회 유도 문자가 급증함에 따라 출처가 불분명한 도메인 접근 자제를 당부했다.',
    },
    {
      id: 2,
      title: 'LLM AI를 활용한 신종 피싱 메일 차단 기술 고도화 트렌드',
      source: 'IT Daily',
      time: '1일 전',
      desc: '인공지능 모델 우합 탐지 기법을 도입하여 대규모 언어 패턴 및 발신자 신뢰도를 실시간 스캐닝하는 차세대 보안 솔루션이 도입된다.',
    },
  ];

  const mockReports = [
    { id: 1, title: '[주의] 검찰청 사칭 계정 휴면 해제 유도 문자', date: '2026-06-30', author: 'user***', type: 'basic', text: '검찰청 사칭 계정 휴면 해제 유도 문자 내용 전문 정보입니다.' },
    { id: 2, title: 'XX은행 긴급 재난지원금 신청 유도 피싱 메일 공유합니다', date: '2026-06-29', author: '안전제일', type: 'summary', text: '지원금 신청 링크를 클릭하게 만드는 위험 메일 본문입니다.' },
  ];

  const myReports = [
    { id: 1, title: '010-XXXX-XXXX 번호로 온 해외 결제 문자 의심 제보', status: '위험(분석완료)', date: '2026-06-28', type: 'summary', text: '해외결제 문자 사칭 사기 기록 데이터 내용' },
  ];

  const handlePostSubmit = () => {
    if (!inputText.trim()) {
      alert('내용을 입력해주세요!');
      return;
    }
    const newId = Date.now();
    const newPost = {
      id: newId,
      name: '나의 계정',
      handle: '@my_trusty_account',
      time: '방금 전',
      content: inputText,
      hasChat: false,
      likeCount: 0,
      liked: false,
    };
    setGroupPosts([newPost, ...groupPosts]);
    setPostComments({ ...postComments, [newId]: [] });
    setInputText('');
  };

  const handleLikeToggle = (id, e) => {
    if (e) e.stopPropagation();
    setGroupPosts(
      groupPosts.map((post) => {
        if (post.id === id) {
          const updatedPost = {
            ...post,
            liked: !post.liked,
            likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
          };
          if (selectedPost && selectedPost.id === id) {
            setSelectedPost(updatedPost);
          }
          return updatedPost;
        }
        return post;
      })
    );
  };

  const handleCommentSubmit = (postId) => {
    if (!commentInput.trim()) {
      alert('댓글 내용을 입력해주세요!');
      return;
    }
    const newComment = {
      id: Date.now(),
      author: '나의 계정',
      text: commentInput,
      time: '방금 전',
    };

    setPostComments({
      ...postComments,
      [postId]: [...(postComments[postId] || []), newComment],
    });
    setCommentInput('');
  };

  const handleReportClick = (item) => {
    if (item.type === 'basic') {
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
        if (selectedPost) {
          const currentComments = postComments[selectedPost.id] || [];
          return (
            <div className="community-page__detail">
              <div className="community-page__back-link" onClick={() => setSelectedPost(null)}>
                ← 피드 목록으로 돌아가기
              </div>

              <div className="community-page__detail-card">
                <div className="community-page__post-meta">
                  <span className="community-page__post-author">{selectedPost.name}</span>
                  <span className="community-page__post-handle">{selectedPost.handle}</span>
                  <span className="community-page__post-handle">· {selectedPost.time}</span>
                </div>
                <div className="community-page__post-content community-page__post-content--detail">
                  {selectedPost.content}
                </div>
                {selectedPost.hasChat && (
                  <div className="community-page__chat-mock">
                    <div className="community-page__chat-bubble community-page__chat-bubble--left">
                      엄마 나 폰 액정 깨져서 수리 맡겼어ㅠㅠ
                    </div>
                    <div className="community-page__chat-bubble community-page__chat-bubble--left">
                      지금 임시폰이라 전화는 안돼 문자만 가능해
                    </div>
                    <div className="community-page__chat-bubble community-page__chat-bubble--right">
                      아이구 어쩌다 그랬어 보험은 들어놨구?
                    </div>
                  </div>
                )}
                <div className="community-page__post-footer">
                  <span
                    className={'community-page__like' + (selectedPost.liked ? ' community-page__like--active' : '')}
                    onClick={() => handleLikeToggle(selectedPost.id)}
                  >
                    {selectedPost.liked ? '❤️' : '🖤'} 좋아요 {formatLikeCount(selectedPost.likeCount)}
                  </span>
                </div>
              </div>

              <div className="community-page__comment-board">
                <div className="community-page__comment-title">댓글 작성</div>
                <div className="community-page__comment-form">
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="이 게시글에 댓글을 공유해 주세요..."
                    className="community-page__comment-input"
                  />
                  <button className="community-page__comment-submit" onClick={() => handleCommentSubmit(selectedPost.id)}>
                    등록
                  </button>
                </div>

                <div className="community-page__comment-list">
                  {currentComments.map((comment) => (
                    <div key={comment.id} className="community-page__comment">
                      <div className="community-page__comment-meta">
                        <span className="community-page__comment-author">{comment.author}</span>
                        <span className="community-page__comment-time">{comment.time}</span>
                      </div>
                      <div className="community-page__comment-text">{comment.text}</div>
                    </div>
                  ))}
                  {currentComments.length === 0 && (
                    <div className="community-page__comment-empty">첫 번째 댓글을 남겨보세요!</div>
                  )}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="community-page__feed">
            <div className="community-page__composer">
              <input
                type="text"
                placeholder="무슨 일이 일어나고 있나요? 이곳에 공유해 주세요."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="community-page__composer-input"
              />
              <div className="community-page__composer-actions">
                <button className="community-page__attach-btn" onClick={() => fileInputRef.current.click()}>
                  파일 첨부
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files[0]) alert(`${e.target.files[0].name} 파일 탑재 완료`);
                  }}
                />
                <button className="community-page__post-btn" onClick={handlePostSubmit}>
                  게시하기
                </button>
              </div>
            </div>

            <div className="community-page__post-list">
              {groupPosts.map((post) => (
                <div key={post.id} className="community-page__post" onClick={() => setSelectedPost(post)}>
                  <div className="community-page__post-meta">
                    <span className="community-page__post-author">{post.name}</span>
                    <span className="community-page__post-handle">{post.handle}</span>
                    <span className="community-page__post-handle">· {post.time}</span>
                  </div>

                  <div
                    className={
                      'community-page__post-content' +
                      (post.hasChat ? ' community-page__post-content--with-chat' : '')
                    }
                  >
                    {post.content}
                  </div>

                  {post.hasChat && (
                    <div className="community-page__chat-mock community-page__chat-mock--list">
                      <div className="community-page__chat-bubble community-page__chat-bubble--left">
                        엄마 나 폰 액정 깨져서 수리 맡겼어ㅠㅠ
                      </div>
                      <div className="community-page__chat-bubble community-page__chat-bubble--left">
                        지금 임시폰이라 전화는 안돼 문자만 가능해
                      </div>
                      <div className="community-page__chat-bubble community-page__chat-bubble--right">
                        아이구 어쩌다 그랬어 보험은 들어놨구?
                      </div>
                    </div>
                  )}

                  <div className="community-page__post-footer">
                    <span
                      className={'community-page__like' + (post.liked ? ' community-page__like--active' : '')}
                      onClick={(e) => handleLikeToggle(post.id, e)}
                    >
                      {post.liked ? '❤️' : '🖤'} 좋아요 {formatLikeCount(post.likeCount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">다른 이용자들의 제보 내역</h3>
            {mockReports.map((item) => (
              <div key={item.id} className="community-page__report-row" onClick={() => handleReportClick(item)}>
                <span className="community-page__report-title">{item.title}</span>
                <span className="community-page__report-meta">{item.author} | {item.date}</span>
              </div>
            ))}
          </div>
        );

      case 'news':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">보안 및 피싱 최신 뉴스</h3>
            {mockNews.map((item) => (
              <div key={item.id} className="community-page__news-card">
                <div className="community-page__news-meta">
                  <span className="community-page__news-source">{item.source}</span>
                  <span className="community-page__news-time">{item.time}</span>
                </div>
                <h4 className="community-page__news-title">{item.title}</h4>
                <p className="community-page__news-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        );

      case 'my':
        return (
          <div className="community-page__list-panel">
            <h3 className="community-page__list-heading">MY - 내가 제보한 내역 관리</h3>
            {myReports.map((item) => (
              <div key={item.id} className="community-page__my-row" onClick={() => handleReportClick(item)}>
                <div>
                  <div className="community-page__my-title">{item.title}</div>
                  <div className="community-page__my-date">제보일: {item.date}</div>
                </div>
                <span className="community-page__my-status">{item.status}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    { id: 'group', label: '그룹 활동' },
    { id: 'reports', label: '제보 내역' },
    { id: 'news', label: '뉴스창' },
    { id: 'my', label: 'MY' },
  ];

  // 💡 사이드바 검색창에서 이동 가능한 페이지 목록
  const SITE_PAGES = [
    { label: '홈', path: '/' },
    { label: '분석하기 (텍스트 입력)', path: '/analysis/input' },
    { label: '피싱 이력 조회', path: '/search-history' },
    { label: '피싱 이력 상세 조회', path: '/lookup' },
    { label: '커뮤니티', path: '/community', state: { fromNavbar: true } },
    { label: '제보하기', path: '/report' },
    { label: '로그인', path: '/login' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const filteredPages = searchQuery.trim()
    ? SITE_PAGES.filter(
        (p) => p.label.includes(searchQuery.trim()) || p.path.includes(searchQuery.trim())
      )
    : [];

  const handleSearchNavigate = (page) => {
    navigate(page.path, page.state ? { state: page.state } : undefined);
    setSearchQuery('');
  };

  return (
    <div className="page-viewport page-viewport--white-bg">
      <div className="community-page">
        <Navbar />
        <div className="community-page__layout">
          <div className="community-page__main">
            <div className="community-page__title">피싱 경험 공유방</div>

            <div className="community-page__tabs">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={'community-page__tab' + (activeTab === tab.id ? ' community-page__tab--active' : '')}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedPost(null);
                  }}
                >
                  {tab.label}
                </div>
              ))}
              <div className="community-page__tabs-divider" />
            </div>

            <div className="community-page__tab-content">{renderTabContent()}</div>
          </div>

          <div className="community-page__sidebar">
            <div className="community-page__sidebar-search">
              <span className="community-page__sidebar-icon">🔍</span>
              <input
                type="text"
                className="community-page__sidebar-search-input"
                placeholder="이동할 페이지를 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && filteredPages.length > 0) {
                    handleSearchNavigate(filteredPages[0]);
                  }
                }}
              />
            </div>

            {searchQuery.trim() && (
              <div className="community-page__sidebar-search-results">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page) => (
                    <div
                      key={page.path}
                      className="community-page__sidebar-search-result"
                      onClick={() => handleSearchNavigate(page)}
                    >
                      {page.label}
                    </div>
                  ))
                ) : (
                  <div className="community-page__sidebar-search-empty">일치하는 페이지가 없습니다</div>
                )}
              </div>
            )}

            <div className="community-page__sidebar-divider" />

            <div className="community-page__sidebar-links">
              <div className="community-page__sidebar-link" onClick={() => navigate('/')}>
                홈
              </div>
              <div className="community-page__sidebar-link" onClick={() => navigate('/report')}>
                피싱경험 제보창
              </div>
              <div
                className="community-page__sidebar-link"
                onClick={() => {
                  setActiveTab('news');
                  setSelectedPost(null);
                }}
              >
                뉴스
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
