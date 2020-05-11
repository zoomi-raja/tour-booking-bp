import React from 'react';
import classes from './Map.module.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1Ijoiem9vbWktcmFqYSIsImEiOiJjazl6NDhvMDcwdXN2M3RwazlzbzF4OWFiIn0.1n67PHfJehyEBhaym3zScQ';
class Map extends React.Component {
  componentDidMount() {
    // dummy data
    const locations = [
      {
        _id: '5c88fa8cf4afda39709c2959',
        description: 'Lummus Park Beach',
        type: 'Point',
        coordinates: [-80.128473, 25.781842],
        day: 1,
      },
      {
        _id: '5c88fa8cf4afda39709c2958',
        description: 'Islamorada',
        type: 'Point',
        coordinates: [-80.647885, 24.909047],
        day: 2,
      },
      {
        _id: '5c88fa8cf4afda39709c2957',
        description: 'Sombrero Beach',
        type: 'Point',
        coordinates: [-81.0784, 24.707496],
        day: 3,
      },
      {
        _id: '5c88fa8cf4afda39709c2956',
        description: 'West Key',
        type: 'Point',
        coordinates: [-81.768719, 24.552242],
        day: 5,
      },
    ];
    const cssUrl = 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css';
    const style = document.createElement('link');
    style.href = cssUrl;
    style.rel = 'stylesheet';
    style.async = true;

    document.head.appendChild(style);
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/zoomi-raja/ck9z6jm6j2rhz1io9fektfzw9',
      scrollZoom: false,
      //   center: [this.state.lng, this.state.lat],
      //   zoom: this.state.zoom,
      //   interactive: false,
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc) => {
      const el = document.createElement('div');
      el.className = classes.marker;
      new mapboxgl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(loc.coordinates)
        .addTo(map);
      new mapboxgl.Popup({ offset: 30 })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);
      bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, { padding: 20 });
  }
  render() {
    return (
      <div
        ref={(el) => (this.mapContainer = el)}
        className={classes.mapContainer}
      />
    );
  }
}
export default Map;
