import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 43.647856,
  lng: -79.419639,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: 43.647856, lng: -79.419639 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
