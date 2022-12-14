// import '../styles/globals.css'; ๐ซ NextJS๋ก ์ฑ์ ๋ง๋ค๋๋ global css ํ์ผ์ import ํ  ์ ์๋ค.
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "../components/Title";

// const API_KEY = "07cb1c34c467a9a1c7c1e7fc9de045c8";

function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  const onClick = (id, title, poster) => {
    router.push(`/movies/${title}/${id}`);
  };

  useEffect(() => {
    (async () => {
      const data = await fetch(`/api/movies`);
      const { results } = await data.json();
      // ๊ตฌ์กฐ๋ถํด ํ ๋น์ผ๋ก data.json().results ๋ฅผ {results} ๋ก ์ ์ธ
      console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Title title="Home" />
      {!movies && <h4>๋ก๋ฉ</h4>}
      {movies.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() =>
            onClick(movie.id, movie.original_title, movie.poster_path)
          }
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
