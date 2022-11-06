import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Fill, RegularShape, Stroke, Style } from 'ol/style';
import LineString from 'ol/geom/LineString';

function UsfMap({ buildingsList }) {
  
  const [map, setMap] = useState();
  const [polyLayer, setPolyLayer] = useState();
  
  const mapRef = useRef();
  mapRef.current = map;
  
  const buildings = useMemo(() =>  {
    return {
      LIB: [-82.412220, 28.059588],
      BSN: [-82.409976, 28.058358],
      CPR: [-82.410845, 28.059827],
      HMS: [-82.409271, 28.060856],
      CWY: [-82.408220, 28.061356],
      SOC: [-82.409420, 28.061439],
      ULH: [-82.409773, 28.060443],
      EDU: [-82.410609, 28.060767],
      BEH: [-82.410090, 28.061999],
      MSC: [-82.413583, 28.063923],
      ENG: [-82.415900, 28.059454],
      ENB: [-82.415484, 28.058733],
      MDT: [-82.419598, 28.068428],
      MHC: [-82.422864, 28.068118],
      JPH: [-82.418428, 28.059811],
      SHR: [-82.422259, 28.061852],
      PUB: [-82.411957, 28.068428],
      ISA: [-82.414108, 28.061403],
      ALN: [-82.413240, 28.061449],
      FAH: [-82.416686, 28.063077],
      MRC: [-82.419555, 28.065334]
    }
  }, []);
  
  const dummyInput = ['BSN', 'JPH', 'ISA', 'MRC'];

  // To initialize map
  useEffect(() => {

    const initPolyLayer = new VectorLayer({
      source: new VectorSource()
    });

    // Styles for square shapes that will act as building markers 
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
    };
    
    const styleKeys = [
      'square'
    ];
    
    // Populate an array of features where each feature is a building marker
    const features = new Array(Object.keys(buildings).length);
    
    // Make each building a feature in feature array
    Object.keys(buildings).forEach((key, i) => {
      features[i] = new Feature(new Point(fromLonLat(buildings[key])));
      features[i].setStyle(
        styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]]
        );
      })
      
      // Add building features to map as red markers
      const source = new VectorSource({ features });
      const vectorLayer = new VectorLayer({ source });
      
      // mapRef.current.addLayer(vectorLayer);
      const initMap = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
          initPolyLayer
        ],
        target: mapRef.current,
        view: new View({
          center: fromLonLat([-82.414863, 28.061899]),
          zoom: 16,
        }),
      });

      setMap(initMap);
      setPolyLayer(initPolyLayer);
  }, [buildings]);

  // Used to add lines to map when props change 
  useEffect(() => {
    console.log(buildingsList)
    let polyCoords = [];
      
    // Draw lines from each building in the users schedule as long as buildingsList is defined
    if(buildingsList) {
      buildingsList.map((code, i) => polyCoords[i] = fromLonLat(buildings[code]));
    
      // Add lines to polyLayer
      // const polyLayer = new VectorLayer({
      //   source: new VectorSource({
      //     features: [new Feature({
      //       geometry: new LineString(polyCoords),
      //   name: 'Route'
      //   })]
      // }),
      // style: new Style({
      //   stroke: new Stroke({
      //     color: '#000',
      //     width: 3
      //   })
      // })});


      // Maybe missing a paren/curly
      if(polyLayer) {
        polyLayer.setSource(
          new VectorSource({
            features: [new Feature({
              geometry: new LineString(polyCoords)
            })]
          }),
          style: new Style({
            stroke: new Stroke({
              color: '#000',
              width: 3
            })
          }))
      }

      // Add polyLayer to map 
      if(map)
        map.addLayer(polyLayer)
    }
  }, [buildingsList, buildings, map, polyLayer])

  return (
    <div className="map-container">
      <div ref={mapRef} className='map' id='map'></div>
    </div>
  );
}

export default UsfMap;
