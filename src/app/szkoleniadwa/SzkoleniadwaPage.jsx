// "use client";

// import Image from "next/image";
// import styles from "./szkolenia.module.css";
// import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
// import { CourseTileSingle } from "../../components/CourseTileSingle/CourseTileSingle";

// import szkolenieImg from "../../../public/photos/team/KatarzynaZaleskaSzkolenie.png";

// import mainPhotoImg from "../../../public/photos/mainPhoto.jpg";

// import march2025 from "../../data/courseMarch2025.json";
// import april2025 from "../../data/courseApril2025.json";
// import june2025 from "../../data/courseJune2025.json";

// import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";
// import SchoolingLayout from "@/components/Layouts/SchoolingLayout/SchoolingLayout";
// import { CourseTile } from "@/components/CourseTile/CourseTile";
// import { FormBuyCourse } from "@/components/FormBuyCourse/FormBuyCourse";
// import AnimatedImage from "@/components/AnimatedImage/AnimatedImage";

// const SzkoleniaPage = () => {
//   const heroImg = "/photos/schoolingHero.jpg";
//   const doctorImg = "/photos/team/KatarzynaZaleskaSzkolenie.png";

//   return (
//     <SchoolingLayout>
//       <div className={styles.pageWrapper}>
//         <div className={styles.heroSection}>
//           <div className={styles.imageWrapper}>
//             <Image
//               src={heroImg}
//               fill
//               className={styles.heroImage}
//               alt="zdjęcie główne"
//             />
//           </div>
//           <div className={styles.heroText}>
//             <h1 className={styles.heroTextMain}>
//               Szkolenia Ortodoncja przy Parku
//             </h1>
//             <h2 className={styles.heroTextDescription}>
//               Szkolenia stacjonarne i on-line
//             </h2>
//           </div>
//         </div>

//         <div className={styles.doctorWrapper}>
//           <div className={styles.doctorText}>
//             <div className={styles.doctorTextBox}>
//               <h2 className={styles.doctorTextMain}>Katarzyna Zaleska</h2>
//               <div className={styles.redLine}></div>
//             </div>
//             <h2 className={styles.doctorTextDescription}>Lekarz Stomatolog</h2>
//             <h2 className={styles.doctorTextDescription}>
//               Specjalista Ortodonta
//             </h2>
//             <h2 className={styles.doctorTextDescription}>Wykładowca</h2>
//           </div>
//           <div className={styles.imageWrapperDoctor}>
//             <Image
//               src={doctorImg}
//               fill
//               className={styles.heroImage}
//               alt="Katarzyna Zaleska"
//             />
//           </div>

//           <AnimatedImage />

//         </div>

//         <div id="doctorMainImage" className={styles.doctorDescritpionWrapper}>
//           <div className={styles.descriptionTextBox}>
//             <h3 className={styles.descriptionHeading}>Specjalista z</h3>
//             <h3 className={styles.descriptionHeading}>
//               wieloletnim doświadczeniem
//             </h3>
//             <div className={styles.redLine2}></div>
//           </div>

//           <div className={styles.descriptionMain}>
//             Nazywam się Katarzyna Zaleska, jestem absolwentką Wydziału Lekarsko-
//             Stomatologicznego PUM w Szczecinie. Od 2001 roku, jako jedna z
//             pierwszych ortodontek w Polsce zastosowałam mikroimplant do leczenia
//             ortodontycznego. Od tego czasu rozwijam techniki leczenia z
//             wykorzystaniem mikroimplantów. Ta dziedzina stała się tematem mojej
//             pracy doktorskiej z 2009 roku, w której zbadałam skuteczność
//             zakotwienia Mikrośrubą i InPlantem w leczeniu ortodontycznym. Przez
//             ponad 20 lat zgromadziłam bogate doświadczenie kliniczne w zakresie
//             mikroimplantów, co pozwoliło mi opublikować liczne prace naukowe i
//             dzielić się wiedzą podczas wykładów i szkoleń. Szczególną
//             satysfakcję czerpię z prowadzenia warsztatów, gdzie uczę innych
//             ortodontów technik montażu i wykorzystania mikroimplantów w szczęce
//             i żuchwie w różnych wadach zgryzu. Od 2020 roku prowadzę klinikę
//             Ortodoncja Przy Parku, gdzie łączę swoje doświadczenie akademickie
//             (jako były asystent i wykładowca PUM) z pasją do innowacyjnych
//             cyfrowych technik leczenia. Jestem członkiem prestiżowych towarzystw
//             ortodontycznych: PTO, EOS, PAA i FACE Poland.
//           </div>
//         </div>

//         <div className={styles.courseWrapper}>
//           <div className={styles.courseHeaderWrapper}>
//             <h3 className={styles.courseHeader}>Szkolenia stacjonarne</h3>
//             <div className={styles.redLine3}></div>
//           </div>

//           <CourseTile data={march2025} />
//           <CourseTile data={april2025} />
//           <CourseTile data={june2025} />
//         </div>

//         <div className={styles.formSectionWrapper}>
//           <FormBuyCourse />

//           <div className={styles.sectionTop}></div>
//         </div>
//       </div>
//     </SchoolingLayout>
//   );
// };

// export default SzkoleniaPage;

"use client";

import Image from "next/image";
import styles from "./szkolenia.module.css";
import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { CourseTileSingle } from "../../components/CourseTileSingle/CourseTileSingle";

import szkolenieImg from "../../../public/photos/team/KatarzynaZaleskaSzkolenie.png";

import mainPhotoImg from "../../../public/photos/mainPhoto.jpg";

import march2025 from "../../data/courseMarch2025.json";
import april2025 from "../../data/courseApril2025.json";
import june2025 from "../../data/courseJune2025.json";

import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";
import SchoolingLayout from "@/components/Layouts/SchoolingLayout/SchoolingLayout";
import { CourseTile } from "@/components/CourseTile/CourseTile";
import { FormBuyCourse } from "@/components/FormBuyCourse/FormBuyCourse";
import AnimatedImage from "@/components/FramerMotion/AnimatedImage";
import Link from "next/link";

const SzkoleniaPage = () => {
  const heroImg = "/photos/schoolingHero.jpg";
  const doctorImg = "/photos/team/KatarzynaZaleskaSzkolenie.png";

  return (
    <SchoolingLayout>
      <div className={styles.pageWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={heroImg}
              fill
              className={styles.heroImage}
              alt="zdjęcie główne"
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTextMain}>
              Szkolenia Ortodoncja przy Parku
            </h1>
            <h2 className={styles.heroTextDescription}>
              Szkolenia stacjonarne i on-line
            </h2>
          </div>
        </div>

        <div className={styles.doctorWrapper}>
          <div className={styles.doctorText}>
            <div className={styles.doctorTextBox}>
              <h2 className={styles.doctorTextMain}>Katarzyna Zaleska</h2>
              <div className={styles.redLine}></div>
            </div>
            <h2 className={styles.doctorTextDescription}>Lekarz Stomatolog</h2>
            <h2 className={styles.doctorTextDescription}>
              Specjalista Ortodonta
            </h2>
            <h2 className={styles.doctorTextDescription}>Wykładowca</h2>
          </div>
          <AnimatedImage />
        </div>

        <div id="doctorMainImage" className={styles.doctorDescritpionWrapper}>
          <div className={styles.descriptionTextBox}>
            <h3 className={styles.descriptionHeading}>Specjalista z</h3>
            <h3 className={styles.descriptionHeading}>
              wieloletnim doświadczeniem
            </h3>
            <div className={styles.redLine2}></div>
          </div>

          <div className={styles.descriptionMain}>
            Nazywam się Katarzyna Zaleska, jestem absolwentką Wydziału Lekarsko-
            Stomatologicznego PUM w Szczecinie. Od 2001 roku, jako jedna z
            pierwszych ortodontek w Polsce zastosowałam mikroimplant do leczenia
            ortodontycznego. Od tego czasu rozwijam techniki leczenia z
            wykorzystaniem mikroimplantów. Ta dziedzina stała się tematem mojej
            pracy doktorskiej z 2009 roku, w której zbadałam skuteczność
            zakotwienia Mikrośrubą i InPlantem w leczeniu ortodontycznym. Przez
            ponad 20 lat zgromadziłam bogate doświadczenie kliniczne w zakresie
            mikroimplantów, co pozwoliło mi opublikować liczne prace naukowe i
            dzielić się wiedzą podczas wykładów i szkoleń. Szczególną
            satysfakcję czerpię z prowadzenia warsztatów, gdzie uczę innych
            ortodontów technik montażu i wykorzystania mikroimplantów w szczęce
            i żuchwie w różnych wadach zgryzu. Od 2020 roku prowadzę klinikę
            Ortodoncja Przy Parku, gdzie łączę swoje doświadczenie akademickie
            (jako były asystent i wykładowca PUM) z pasją do innowacyjnych
            cyfrowych technik leczenia. Jestem członkiem prestiżowych towarzystw
            ortodontycznych: PTO, EOS, PAA i FACE Poland.
          </div>
        </div>

        <div className={styles.courseWrapper}>
          <div className={styles.courseHeaderWrapper}>
            <h3 className={styles.courseHeader}>Szkolenia stacjonarne</h3>
            <div className={styles.redLine3}></div>
          </div>

          <CourseTile
            data={march2025}
            stripeLink={"https://buy.stripe.com/test_3cs4jcf18dU67Uk6oq"}
          />
          <CourseTile
            data={april2025}
            stripeLink={"https://buy.stripe.com/test_3cs4jcf18dU67Uk6oq"}
          />
          <CourseTile
            data={june2025}
            stripeLink={"https://buy.stripe.com/test_bIY2b43iq8zM0rS7sv"}
          />
        </div>

        {/* <Link href={"https://buy.stripe.com/test_28o02W6uC03g5MceUU"}>
          Zaplac za kurs
        </Link> */}

        <div className={styles.paymentWrapper}>
          {/* <stripe-buy-button
          buy-button-id="buy_btn_1R6zin1ReqgBq2QMPCEjY2ze"
          publishable-key="pk_test_51R6zWU1ReqgBq2QM8fVwa85yB7ZQoAKbsNFLTThQ9GxQ3ouMhqvEbPwJlsZM89Ypcvjq1rKebAwDbw5jMC42vSA6009JgcGlkE"
        ></stripe-buy-button> */}

          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          {/* 
          <stripe-buy-button
            buy-button-id="buy_btn_1R6zpP1ReqgBq2QMhXePGefC"
            publishable-key="pk_test_51R6zWU1ReqgBq2QM8fVwa85yB7ZQoAKbsNFLTThQ9GxQ3ouMhqvEbPwJlsZM89Ypcvjq1rKebAwDbw5jMC42vSA6009JgcGlkE"
          ></stripe-buy-button> */}

          <Link
            href={"https://buy.stripe.com/test_28ocPI3iq3fscaA6op"}
            className={styles.buyBtn}
          >
            Zapłać za Kurs
          </Link>
        </div>

        <div className={styles.formSectionWrapper}>
          <FormBuyCourse />

          <div className={styles.sectionTop}></div>
        </div>
      </div>
    </SchoolingLayout>
  );
};

export default SzkoleniaPage;
