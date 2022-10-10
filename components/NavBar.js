import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* 경로는 public 폴더로 정해져 있다! */}
      <img src="/vercel.svg" />

      <div>
        {/* <Link href="/">Home</Link> */}
        {/* 이렇게 Link 태그를 써도 되지만 속성을 넣을 수 없다! */}
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          {/* a태그로 넣어주면 속성을 넣을 수 있다! */}
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
          {/* a태그로 넣어주면 속성을 넣을 수 있다! */}
        </Link>
      </div>

      {/* styles jsx : 속해있는 컴포넌트 한정 스타일 적용*/}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
