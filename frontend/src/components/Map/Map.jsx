import React from 'react';
import classes from './Map.module.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1Ijoiem9vbWktcmFqYSIsImEiOiJjazl6NDhvMDcwdXN2M3RwazlzbzF4OWFiIn0.1n67PHfJehyEBhaym3zScQ';
class Map extends React.Component {
  componentDidMount() {
    // dummy data
    const locations = this.props.locations;
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
      if (loc.coordinates.length > 0) {
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
      }
    });
    if (!bounds.isEmpty()) {
      map.fitBounds(bounds, { padding: 40 });
    }
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
