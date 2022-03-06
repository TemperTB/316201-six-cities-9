import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { CenterCoordinates } from '../types/center-coordinates';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  centerCoordinates: CenterCoordinates,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerCoordinates.lat,
          lng: centerCoordinates.lng,
        },
        zoom: centerCoordinates.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, centerCoordinates]);

  return map;
}

export default useMap;