import { useEffect, useState } from "react";
import { EleaCourseTile } from "../EleaCourseTile/EleaCourseTile";
import style from "./EleaWrapper.module.css";

export const EleaWrapper = () => {
  const [eleaData, setEleaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // fetch do nowego serverless endpointu
        const res = await fetch("/api/github-actions", { cache: "no-store" });
        const data = await res.json();

        if (res.ok && data.results?.length > 0) {
          setEleaData(data.results);
          setError("");
        } else if (data.error) {
          setError(data.error);
        } else if (data.message) {
          setError(data.message);
        } else {
          setError("Nie udało się pobrać kursów");
        }
      } catch (err) {
        console.error(err);
        setError("Przepraszamy, wystąpił błąd przy pobieraniu kursów");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className={style.loadingState}>
        <p>Ładowanie kursów...</p>
        <div className={style.spinnerContainer}>
          <div className={style.spinner}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.loadingState}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={style.courseBox}>
      {eleaData.map((item, idx) => (
        <EleaCourseTile key={idx} item={item} />
      ))}
    </div>
  );
};
