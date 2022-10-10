/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact", ///contact로 들어오면
        destination: "https://naver.com", //destination으로 보낸다.
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies", //이걸로 대신 표현
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, //이걸
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:id", //이걸로 대신 표현
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`, //이걸
      },
    ];
  },
};

module.exports = nextConfig;
