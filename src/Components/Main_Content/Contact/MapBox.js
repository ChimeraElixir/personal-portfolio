import React from "react";

const MapBox = ({map}) => {
  return (
    <section className='mapbox' data-mapbox>
      <figure>
        <iframe
          src={map}
          width='400'
          height='300'
          loading='lazy'
        ></iframe>
      </figure>
    </section>
  );
};

export default MapBox;
