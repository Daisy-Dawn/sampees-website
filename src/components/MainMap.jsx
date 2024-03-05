// import { useState } from "react";
// import {
//     APIProvider,
//     Map,
//     AdvancedMarker,
//     Pin,
//     InfoWindow
// } from "@vis.gl/react-google-maps";


// const MainMap = ()=>{
//     const position = {
//         lat: 6.146678479714913, //  latitude of Amalgamated Market Traders Association Anambra State
//         lng: 6.7821905000000084, //  longitude of Amalgamated Market Traders Association Anambra State
//     }

//     return (
//         <APIProvider apiKey="AIzaSyDX827Jmc72b86DU0AWJVIPxSjlAwXjlXw">
//             <div className="w-full h-screen">
//                 <Map zoom={12} center={position}>
//                     <AdvancedMarker position={position}></AdvancedMarker>
//                 </Map>
//             </div>
//         </APIProvider>
//     )
// }


// export default MainMap;





import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};
const center = {
  lat: 6.146678479714913, //  latitude of Amalgamated Market Traders Association Anambra State
  lng: 6.7821905000000084, //  longitude of Amalgamated Market Traders Association Anambra State

};

const MainMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDX827Jmc72b86DU0AWJVIPxSjlAwXjlXw',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default MainMap;