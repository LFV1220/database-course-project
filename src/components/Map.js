import campusMap from './assets/usf_campus_map_auto.png';

function Map() {
    return (
        <div>
            <img className="campus-map" src={campusMap} alt="USF Campus Map" width="100%" />
        </div>
    );
}

export default Map;

// NOTE: Change image, used website to enhance image so made it inaccurate