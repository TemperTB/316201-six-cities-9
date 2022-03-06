import React, { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, ICON_WIDTH, ICON_HEIGHT, ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y } from '../../const';
import { CenterCoordinates } from '../../types/center-coordinates';
import { Offer, Offers } from '../../types/offers';

type MapProps = {
  centerCoordinates: CenterCoordinates;
  points: Offers;
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y],
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

  return <div style={{ height: '750px' }} ref={mapRef}/>;
}

export default Map;