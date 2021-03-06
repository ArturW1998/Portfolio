import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import IMGS from '../../../constants/imgs';
import contactApi from '../utils/contactApi';

const coordinates = {
  lat: 48.921501,
  lng: 24.709721,
  zoom: 12,
};
const { lat, lng, zoom } = coordinates;
const position = [lat, lng];
const Icon = L.icon({
  iconUrl: IMGS.location,
  shadowUrl: '',
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
});

const tileLayerUrl = contactApi.getTileLayerUrl();

const MapLeaflet = () => (
  <Map center={position} className="map-container" id="mapid" zoom={zoom} zoomControl={false}>
    <TileLayer url={tileLayerUrl} />
    <Marker icon={Icon} position={position} />
  </Map>
);

export default MapLeaflet;
