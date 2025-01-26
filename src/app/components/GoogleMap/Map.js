"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import style from "./map.module.css";

// Szczecin
const Szczecin = {
  lat: 53.4370136,
  lng: 14.5609079,
};

const Mysliborz = {
  lat: 52.9197523,
  lng: 14.8606349,
};

const markerSzczecin = {
  lat: 53.436206,
  lng: 14.564496,
};

const markerMysliborz = {
  lat: 52.919811,
  lng: 14.86051,
};

const Map = ({ location, zoom }) => {
  let city = location === "Szczecin" ? Szczecin : Mysliborz;

  let marker = location === "Szczecin" ? markerSzczecin : markerMysliborz;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  console.log("location", location);

  return (
    <div className={style.mapWrapper}>
      <LoadScript googleMapsApiKey={"AIzaSyAon7XrCfIfZ3DtBB7kewkyAE9ew4WtFSY"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={city}
          zoom={Number(zoom)}
        >
          <Marker position={marker} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
