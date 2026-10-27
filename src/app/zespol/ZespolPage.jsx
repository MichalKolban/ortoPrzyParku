"use client";

import { useState } from "react";
import { DoctorBadge } from "../../components/DoctorBadge/DoctorBadge";
import { DoctorBedgeMain } from "../../components/DoctorBadgeMain/DoctorBadgeMain";
import { Reveal } from "../../components/Reveal/Reveal";

import styles from "./zespol.module.css";
import doctorsJSON from "../../data/doctorsList.json";
import administrationJSON from "../../data/administrationStaff.json";
import hygieneJSON from "../../data/hygieneStaff.json";
import registrationJSON from "../../data/registrationStaff.json";
import radiologyJSON from "../../data/radiologyTechnicanStaff.json";
import laboratoryJSON from "../../data/laboratoryStaff.json";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

const ZespolPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const doctors = doctorsJSON.doctors;
  const administration = administrationJSON.administration;
  const hygieneStaff = hygieneJSON.hygieneStaff;
  const registrationStaff = registrationJSON.registration;
  const radiologyStaff = radiologyJSON.radiology;
  const laboratoryStaff = laboratoryJSON.laboratory;

  return (
    <CustomLayout>
      <DoctorBedgeMain />
      <Reveal as="div" className={styles.outerWrapper}>
        <div className={styles.sectionTitle}>Zespół Lekarski</div>
        <div className={styles.innerWrapper}>
          {doctors.map((doctor, index) => {
            return (
              <Reveal key={doctor.id} delay={index * 0.06} distance={16} duration={0.5}>
                <DoctorBadge
                  name={doctor.name}
                  icon={doctor.icon}
                  photo={doctor.photo}
                  title={doctor.title}
                  description={doctor.description}
                />
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="div" className={styles.outerWrapper}>
        <div className={styles.sectionTitle}>Administracja</div>
        <div className={styles.innerWrapper}>
          {administration.map((person, index) => {
            return (
              <Reveal key={person.id} delay={index * 0.06} distance={16} duration={0.5}>
                <DoctorBadge
                  name={person.name}
                  icon={person.icon}
                  photo={person.photo}
                  title={person.title}
                  description={person.description}
                />
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="div" className={styles.outerWrapper}>
        <div className={styles.sectionTitle}>Higienistki</div>
        <div className={styles.innerWrapper}>
          {hygieneStaff.map((person, index) => {
            return (
              <Reveal key={person.id} delay={index * 0.06} distance={16} duration={0.5}>
                <DoctorBadge
                  name={person.name}
                  icon={person.icon}
                  photo={person.photo}
                  title={person.title}
                  description={person.description}
                />
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="div" className={styles.specialWrapper}>
        <div className={styles.specialInnerWrapper}>
          <div
            className={`${styles.sectionTitle} ${styles.sectionTitleSpecial}`}
          >
            Rejestracja
          </div>
          <div className={styles.innerWrapper}>
            {registrationStaff.map((person, index) => {
              return (
                <Reveal key={person.id} delay={index * 0.06} distance={16} duration={0.5}>
                  <DoctorBadge
                    name={person.name}
                    icon={person.icon}
                    photo={person.photo}
                    title={person.title}
                    description={person.description}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className={styles.specialInnerWrapper}>
          <div
            className={`${styles.sectionTitle} ${styles.sectionTitleSpecial}`}
          >
            Elektroradiolog
          </div>
          <DoctorBadge
            name={radiologyStaff[0].name}
            icon={radiologyStaff[0].icon}
            photo={radiologyStaff[0].photo}
            title={radiologyStaff[0].title}
            description={radiologyStaff[0].description}
          />
        </div>
      </Reveal>

      <Reveal as="div" className={styles.outerWrapper}>
        <div className={styles.sectionTitle}>Laboratorium Ortodontyczne</div>
        <div className={styles.innerWrapper}>
          {laboratoryStaff.map((person, index) => {
            return (
              <Reveal key={person.id} delay={index * 0.06} distance={16} duration={0.5}>
                <DoctorBadge
                  name={person.name}
                  icon={person.icon}
                  photo={person.photo}
                  title={person.title}
                  description={person.description}
                />
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </CustomLayout>
  );
};

export default ZespolPage;
