import React, { useEffect, useState } from 'react'
import "./scss/Header.scss"
import { useProductStore } from '../store/useProductStore'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
    // 경로 위치정보
    const location = useLocation();
    // 경로 이동
    const navigate = useNavigate();
    // home이면 true 나머지는 false
    const isHome = location.pathname === "/";
    // 스크롤을 체크해줄 변수
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!isHome) {
            // 서브페이지는 항상acive상태
            setIsScrolled(true)
            return
        }

        // 홈에서 스크롤의 위치에 따라서 상태 변경
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll);
        // 서브페이지 이동후 home으로 오면 스크롤 이벤트가 없으므로 위치값 재 채크
        // 페이지 진입시 현재 스크롤 위치 확인
        handleScroll();

        // 홈에서 벗어나거나 컴포넌트가 사라질때 이벤트를 해제
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [isHome])

    const { menus, searchWordAll, onSearchWordAll,cartCount } = useProductStore();

    const handleSearch = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/searchPage")
    }

    return (
        <header className={isScrolled ? "active" : ""}>
            <div className="inner">
                <div className="header-left">
                    <h1 className="logo">
                        <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
                    </h1>
                    <nav>
                        <ul className="main-menu">
                            {menus.map(menu => (
                                <li key={menu.key}>
                                    <Link to={`/${menu.key}`}>{menu.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <ul className="gnb-list">
                        <>
                            <li>
                                <Link to="/login"><img src="/images/loginMember.png" alt="로그인" /></Link>
                                {/* <span>로그인</span> */}
                            </li>
                            <li>
                                <Link to="/join"><img src="/images/loginJoin.png" alt="회원가입" /></Link>
                                {/* <span>회원가입</span> */}
                            </li>
                        </>
                        <li>
                            <Link to="/cart">
                                <img src="/images/cart.png" alt="장바구니" />
                                <span className="cart-num">{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="search-wrap">
                        <form onSubmit={handleSearch}>
                            <input type="text"
                                value={searchWordAll}
                                onChange={(e) => onSearchWordAll(e.target.value)}
                            />
                            <button type="submit"><img src="/images/search.png" alt="돋보기" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}
