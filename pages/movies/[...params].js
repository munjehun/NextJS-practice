import { useRouter } from "next/router";
import React from "react";
import Title from "../../components/Title";

export default function ID() {
  const router = useRouter();
  // const [title, id] = router.query.params || []; //이것도 구조분해 할당? 둘 다 배열이니까 가능
  const { title, poster, overview, average } = router.query;
  console.log(router);
  return (
    <div>
      <Title title={title} />

      <div className="container">
        <h1 className="title">{title || "로딩..."}</h1>
        <h2 className="average">⭐️{average}</h2>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
        />
        <p className="overview">{overview}</p>
      </div>

      <style jsx>{`
        .container {
          padding: 20px 10px;
        }

        .title,
        .average {
          margin: 0 0 10px;
        }
        .poster {
          display: block;
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}

// 👇 안해주면 CSR, 해주면 SSR (시크릿페이지에서도 볼 수 있음)
export function getServerSideProps(ctx) {
  console.log(ctx);
  return {
    props: {},
  };
}
