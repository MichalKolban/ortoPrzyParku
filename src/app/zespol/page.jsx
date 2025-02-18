"use client";

import { useState } from "react";
import { DoctorBadge } from "../components/DoctorBadge/DoctorBadge";
import { DoctorBedgeMain } from "../components/DoctorBadgeMain/DoctorBadgeMain";

import styles from "./zespol.module.css";
import doctorsJSON from "../data/doctorsList.json";
import administrationJSON from "../data/administrationStaff.json";
import hygieneJSON from "../data/hygieneStaff.json";
import registrationJSON from "../data/registrationStaff.json";
import radiologyJSON from "../data/radiologyTechnicanStaff.json";
import laboratoryJSON from "../data/laboratoryStaff.json";

const ZespolPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const doctors = doctorsJSON.doctors;
  const administration = administrationJSON.administration;
  const hygieneStaff = hygieneJSON.hygieneStaff;
  const registrationStaff = registrationJSON.registration;
  const radiologyStaff = radiologyJSON.radiology;
  const laboratoryStaff = laboratoryJSON.laboratory;

  return (
    <>
      <head>
        <title>
          Zespół | Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin |
          Stomatologia Szczecin
        </title>
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – nowoczesna klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome. Umów się na konsultację!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div>
        <DoctorBedgeMain />
        <div className={styles.outerWrapper}>
          <div className={styles.sectionTitle}>Zespół Lekarski</div>
          <div className={styles.innerWrapper}>
            {doctors.map((doctor) => {
              return (
                <DoctorBadge
                  key={doctor.id}
                  name={doctor.name}
                  icon={doctor.icon}
                  photo={doctor.photo}
                  title={doctor.title}
                  description={doctor.description}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.outerWrapper}>
          <div className={styles.sectionTitle}>Administracja</div>
          <div className={styles.innerWrapper}>
            {administration.map((administration) => {
              return (
                <DoctorBadge
                  key={administration.id}
                  name={administration.name}
                  icon={administration.icon}
                  photo={administration.photo}
                  title={administration.title}
                  description={administration.description}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.outerWrapper}>
          <div className={styles.sectionTitle}>Higienistki</div>
          <div className={styles.innerWrapper}>
            {hygieneStaff.map((person) => {
              return (
                <DoctorBadge
                  key={person.id}
                  name={person.name}
                  icon={person.icon}
                  photo={person.photo}
                  title={person.title}
                  description={person.description}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.specialWrapper}>
          <div className={styles.specialInnerWrapper}>
            <div className={styles.sectionTitle}>Rejestracja</div>
            <div className={styles.innerWrapper}>
              {registrationStaff.map((person) => {
                return (
                  <DoctorBadge
                    key={person.id}
                    name={person.name}
                    icon={person.icon}
                    photo={person.photo}
                    title={person.title}
                    description={person.description}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.specialInnerWrapper}>
            <div className={styles.sectionTitle}>Technik Radiologii</div>
            <DoctorBadge
              name={radiologyStaff[0].name}
              icon={radiologyStaff[0].icon}
              photo={radiologyStaff[0].photo}
              title={radiologyStaff[0].title}
              description={radiologyStaff[0].description}
            />
          </div>
        </div>

        <div className={styles.outerWrapper}>
          <div className={styles.sectionTitle}>Laboratorium Ortodontyczne</div>
          <div className={styles.innerWrapper}>
            {laboratoryStaff.map((person) => {
              return (
                <DoctorBadge
                  key={person.id}
                  name={person.name}
                  icon={person.icon}
                  photo={person.photo}
                  title={person.title}
                  description={person.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ZespolPage;
