import { PhotoLink } from '../PhotoLink/PhotoLink';
import { OrtoServiceSingle } from '../OrtoServiceSingle/OrtoServiceSingle';
import styles from './OrtoServices.module.css';

import ortodoncjaIcon from '../../../../public/icons/ortodoncja.png';
import invisalignIcon from '../../../../public/icons/invisalign.png';
import skan3dIcon from '../../../../public/icons/skan3d.png';
import higienaJamyUstnejIcon from '../../../../public/icons/higienaJamyUstnej.png';
import endodoncjaIcon from '../../../../public/icons/endodoncja.png';
import protetykaIcon from '../../../../public/icons/protetyka.png';
import implantyIcon from '../../../../public/icons/implanty.png';
import stomatologiaZachowawczaIcon from '../../../../public/icons/stomatologiaZachowawcza.png';
import Link from 'next/link';

export const OrtoServices = () => {
  return (
    <div className={styles.outsideWrapper}>
      <div className={styles.title}>Zakres usług</div>
      <div className={styles.insideWrapper}>
        <OrtoServiceSingle
          href={'/ortodoncja'}
          mainPhoto={ortodoncjaIcon}
          altName={'ortodoncja'}
        >
          Ortodoncja
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={invisalignIcon}
          altName={'ivisalign'}
        >
          Invisalign
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={skan3dIcon}
          altName={'skany 3d'}
        >
          Skany 3D
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={higienaJamyUstnejIcon}
          altName={'higiena jamy ustnej'}
        >
          Higiena Jamy Ustnej
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={endodoncjaIcon}
          altName={'endodoncja'}
        >
          Endodoncja
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={protetykaIcon}
          altName={'protetyka'}
        >
          Protetyka
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={implantyIcon}
          altName={'implanty'}
        >
          Implanty
        </OrtoServiceSingle>
        <OrtoServiceSingle
          href={'/'}
          mainPhoto={stomatologiaZachowawczaIcon}
          altName={'stomatologia zachowawcza'}
        >
          Stomatologia Zachowawcza
        </OrtoServiceSingle>
      </div>
      <Link href={'/'} className={styles.btn}>
        Poznaj Pełną Ofertę
      </Link>
    </div>
  );
};