import styles from "./EleaCourseTile.module.css";

export const EleaCourseTile = ({ item, idx }) => {
  console.log("item", item);

  const slicedTitle = item.title.startsWith("Course")
    ? item.title.slice(6)
    : item.title;

  return (
    <div className={styles.wrapper}>
      <div key={idx} className={styles.courseCard}>
        {item.image && (
          <div className={styles.imgWrapper}>
            <img
              src={item.image}
              alt={slicedTitle || "Kurs Ortodoncji przy Parku"}
              width={250}
            />
          </div>
        )}
        <h3 className={styles.courseTitle}>
          {slicedTitle || "Kurs Ortodoncji przy Parku"}
        </h3>

        <p className={styles.courseDescription}>
          {item.description || "Brak opisu"}
        </p>
        <p className={styles.courseButton}>
          <a
            className={styles.ahrefBtn}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            Link do kursu
          </a>
        </p>
      </div>
    </div>
  );
};
