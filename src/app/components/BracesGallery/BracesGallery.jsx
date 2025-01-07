import styles from './BracesGallery.module.css';

import data from '../../data/bracesGallery.json';
import { BracesGalleryElement } from '../BracesGalleryElement/BracesGalleryElement';

export const BracesGallery = () => {
  const braces = data.braces;

  return (
    <div>
      <div className={styles.mainTitle}>Galeria Aparatów</div>
      <div className={styles.wrapper}>
        {braces.map((element) => {
          return (
            <BracesGalleryElement
              key={element.id}
              imgSrc={element.photo}
              name={element.name}
            />
          );
        })}
      </div>
    </div>
  );
};
