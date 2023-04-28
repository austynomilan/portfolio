import { memo } from "react";
import config from "config";
import { MapContainer, Marker, useMap, ZoomControl } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { Icon } from "leaflet";
import marker from "../Components/leaflet/images/marker-icon.png";

const mapMarker = new Icon({
    iconUrl: marker,
    iconSize: [29, 43],
});

const Map = ({ location }) => {
    return (
        <MapContainer
            className="z-10 border-0"
            center={location}
            zoom={15}
            scrollWheelZoom={true}
            zoomControl={false}
        >
            <UpdateMapCentre mapCentre={location} />{" "}
            <ReactLeafletGoogleLayer apiKey={config.GOOGLE_API_KEY} type={"roadmap"} />
            <Marker position={location} icon={mapMarker} />
            <ZoomControl position="bottomright" />
        </MapContainer>
    );
};

function UpdateMapCentre(props) {
    const map = useMap();
    map.panTo(props.mapCentre);
    return null;
}

export default memo(Map);
