import React, { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { CenterCoordinates } from '../../types/center-coordinates';
import { Offer, Offers } from '../../types/offers';

type MapProps = {
  centerCoordinates: CenterCoordinates;
  points: Offers;
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ centerCoordinates, points, selectedPoint }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, centerCoordinates);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker(
          {
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          });
        marker.setIcon(
          selectedPoint !== undefined && point.title === selectedPoint.title
            ? currentCustomIcon
            : defaultCustomIcon,
        ).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '750px' }} ref={mapRef}></div>;
}

export default Map;
