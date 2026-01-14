import styles from "./EleaCourseTile.module.css";

export const EleaCourseTile = ({ item, idx }) => {
  return (
    <div className={styles.wrapper}>
      <div key={idx} className={styles.courseCard}>
        {item.image && (
          <div className={styles.imgWrapper}>
            <img
              src={item.image}
              alt={item.title || "Kurs Ortodoncji przy Parku"}
              width={250}
            />
          </div>
        )}
        <h3 className={styles.courseTitle}>
          {item.title || "Kurs Ortodoncji przy Parku"}
        </h3>
        <p className={styles.courseDescription}>
          {item.description || "Brak opisu"}
        </p>

        <p className={styles.courseButton}>
          <a href={item.url} target="_blank" rel="noreferrer">
            Link do kursu
          </a>
        </p>
      </div>
    </div>
  );
};
