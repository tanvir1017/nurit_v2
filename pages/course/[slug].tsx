import { useRouter } from "next/router";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const CourseDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="App">
      <section className="container">{slug}</section>
    </main>
  );
};

export default CourseDetails;
