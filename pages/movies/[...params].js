import { useRouter } from "next/router";
import React from "react";
import Title from "../../components/Title";

export default function ID() {
  const router = useRouter();
  const [title, id] = router.query.params || []; //이것도 구조분해 할당? 둘 다 배열이니까 가능

  return (
    <div>
      <Title title={title} />
      <h1>{title || "로딩..."}</h1>
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
