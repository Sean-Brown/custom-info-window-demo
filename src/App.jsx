import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Loader } from '@googlemaps/js-api-loader';
import IWContent from './IWContent';

function App() {
  const [portals, setPortals] = useState([]);

  // Initialize map
  useEffect(() => {
    let map;
    (async () => {
      const loader = new Loader({
        apiKey: '<ENTER YOUR API KEY HERE>',
        version: 'quarterly',
      });
      const { Map } = await loader.importLibrary('maps');
      const position = { lat: 35.681585, lng: 139.757575 };
      map = new Map(document.getElementById('app-map'), {
        center: position,
        zoom: 10,
        mapId: 'DEMO_MAP_ID',
      });
      // create the map marker
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker',
      ));
      const markerEl = new AdvancedMarkerElement({
        map,
        position,
      });
      markerEl.addListener('click', () => {
        const iwID = 'custom-info-window';
        const infoWindow = new google.maps.InfoWindow({
          content: renderToString(<div id={iwID} />),
        });
        infoWindow.open(map, markerEl);
        infoWindow.addListener('domready', () => {
          const host = document.getElementById(iwID);
          const portal = createPortal(
            <IWContent />,
            host,
          );
          portals.push(portal);
          setPortals([...portals]);
        });
      });
    })();
    return () => {
      if (map) {
        google.maps.event.clearInstanceListeners(map);
      }
    };
  }, []);

  return (
    <>
      <MapDiv id='app-map' />
      <HiddenItems>{portals}</HiddenItems>
    </>
  )
}

const MapDiv = styled.div`
  flex: 1;
  height: 100%;
`;

const HiddenItems = styled.div`
  display: hidden;
`;

export default App
