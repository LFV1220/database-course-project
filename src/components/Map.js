import { useState, useEffect } from 'react'
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat, transform } from 'ol/proj'
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';

function UsfMap() {

  let map
  let vectorLayer
  let polyCoords
  const buildings = [
    {
      name: 'LIB',
      coords: [-82.412220, 28.059588]
    }, 
    {
      name: 'BSN',
      coords: [-82.409976, 28.058358]
    }, 
    {
      name: 'CPR',
      coords: [-82.410845, 28.059827]
    },
    {
      name: 'HMS',
      coords: [-82.409271, 28.060856]
    },
    {
      name: 'CWY',
      coords: [-82.408220, 28.061356]
    }, 
    {
      name: 'SOC',
      coords: [-82.409420, 28.061439]
    }, 
    {
      name: 'ULH',
      coords: [-82.409773, 28.060443]
    },
    {
      name: 'EDU',
      coords: [-82.410609, 28.060767]
    },
    {
      name: 'BEH',
      coords: [-82.410090, 28.061999]
    }, 
    {
      name: 'MSC',
      coords: [-82.413583, 28.063923]
    }, 
    {
      name: 'ENG',
      coords: [-82.415900, 28.059454]
    },
    {
      name: 'ENB',
      coords: [-82.415484, 28.058733]
    },
    {
      name: 'MDT',
      coords: [-82.419598, 28.068428]
    }, 
    {
      name: 'MHC',
      coords: [-82.422864, 28.068118]
    }, 
    {
      name: 'JPH',
      coords: [-82.418428, 28.059811]
    },
    {
      name: 'SHR',
      coords: [-82.422259, 28.061852]
    },
    {
      name: 'PUB',
      coords: [-82.411957, 28.068428]
    },
    // Resume here, names done. Need lat/ lons
    {
      name: 'MDT',
      coords: [-82.419598, 28.068428]
    }, 
    {
      name: 'MHC',
      coords: [-82.422864, 28.068118]
    }, 
    {
      name: 'JPH',
      coords: [-82.418428, 28.059811]
    },
    {
      name: 'SHR',
      coords: [-82.422259, 28.061852]
    },
  ]
  const stroke = new Stroke({ color: 'black', width: 2 });
  const fill = new Fill({ color: 'red' });

  const styles = {
    'square': new Style({
      image: new RegularShape({
        fill,
        stroke,
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    })
  }

  const styleKeys = [
    'square',
  ];

  const features = new Array(buildings.length);

  useEffect(() => {
    map = new Map({
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

    for(var i = 0; i < buildings.length; i++) {
      features[i] = new Feature(new Point(fromLonLat(buildings[i].coords)));
      features[i].setStyle(
        styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]]
      );
    }

    const source = new VectorSource({
      features,
    });
    
    vectorLayer = new VectorLayer({ source });

    map.addLayer(vectorLayer)

    map.on('click', e => {
      map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
          polyCoords = [
            feature
            // Store coords of where the click was to do polyline
          ]
      })
    })
    
  }, []) 

  return (
    <div className="map-container">
      <div className='map' id='map'></div>
    </div>
  );
}

export default UsfMap;
