// Plik: src/app/zespol/ZespolPage.jsx

"use client"; // ← Tylko tutaj dajemy "use client"

import { useState } from "react";
import { DoctorBadge } from "../../components/DoctorBadge/DoctorBadge";
import { DoctorBedgeMain } from "../../components/DoctorBadgeMain/DoctorBadgeMain";

import styles from "./zespol.module.css";
import doctorsJSON from "../../data/doctorsList.json";
import administrationJSON from "../../data/administrationStaff.json";
import hygieneJSON from "../../data/hygieneStaff.json";
import registrationJSON from "../../data/registrationStaff.json";
import radiologyJSON from "../../data/radiologyTechnicanStaff.json";
import laboratoryJSON from "../../data/laboratoryStaff.json";

const ZespolPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const doctors = doctorsJSON.doctors;
  const administration = administrationJSON.administration;
  const hygieneStaff = hygieneJSON.hygieneStaff;
  const registrationStaff = registrationJSON.registration;
  const radiologyStaff = radiologyJSON.radiology;
  const laboratoryStaff = laboratoryJSON.laboratory;

  return (
    <div>
      <DoctorBedgeMain />
      <div className={styles.outerWrapper}>
        <div className={styles.sectionTitle}>Zespół Lekarski</div>
        <div className={styles.innerWrapper}>
          {doctors.map((doctor) => (
            <DoctorBadge
              key={doctor.id}
              name={doctor.name}
              icon={doctor.icon}
              photo={doctor.photo}
              title={doctor.title}
              description={doctor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZespolPage;
