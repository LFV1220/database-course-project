import { useState, useEffect } from 'react'
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj'

function UsfMap() {

  useEffect(() => {
    new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-82.414863, 28.061899]),
        zoom: 16,
      }),
    });
    
  }, []) 

    return (
        <div className="map-container">
            <div className='map' id='map'></div>
        </div>
    );
}

export default UsfMap;
