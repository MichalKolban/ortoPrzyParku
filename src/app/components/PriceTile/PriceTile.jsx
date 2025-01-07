import Image from 'next/image';
import styles from './PriceTile.module.css';
import { PriceTileSingle } from '../PriceTileSingle/PriceTileSingle';

import { unifyPriceTileTitle } from '@/app/helpers/unifyPriceTileStrings';

const additionalCssClass = (title) => {
  const darkBlueCss = [
    'badania rendgenowskie',
    'aparaty stałe',
    'retencja',
    'materiały dodatkowe',
    'porada lekarska',
    'protetyka stomatologiczna',
    'estetyka',
  ];
  const greenCss = [
    'higienizacja',
    'leczenie wizyta kontrolna',
    'fizykoterapia',
    'demontaż',
    'stomatologia zachowawcza',
    'implantologia',
    'wspomaganie chirurgiczne leczenia ortodontycznego',
  ];
  const redCss = ['awaria'];

  if (darkBlueCss.includes(title)) {
    return styles.darkBlue;
  } else if (greenCss.includes(title)) {
    return styles.green;
  } else if (redCss.includes(title)) {
    return styles.red;
  } else {
    return '';
  }
};

export const PriceTile = ({ title, iconImg, itemsArr }) => {
  const additionalClass = additionalCssClass(title.toLowerCase());

  return (
    <div
      id={unifyPriceTileTitle(title)}
      className={`${styles.wrapper} ${additionalClass}`}
    >
      <div className={styles.titleIconBox}>
        <h2 className={styles.title}>{title}</h2>
        <Image src={iconImg} width={60} height={50} alt={title} />
      </div>
      <div className={styles.glassBox}>
        {itemsArr.map((element) => {
          return (
            <PriceTileSingle
              key={element.id}
              textContent={element.name}
              price={element.price}
            />
          );
        })}
      </div>
    </div>
  );
};
