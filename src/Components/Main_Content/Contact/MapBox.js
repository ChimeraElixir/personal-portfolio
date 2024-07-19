import React from "react";

const MapBox = (props) => {
  return (
    <section class='mapbox' data-mapbox>
      <figure>
        <iframe
          src={props.src}
          width={400}
          height={300}
          loading='lazy'
        ></iframe>
      </figure>
    </section>
  );
};

export default MapBox;
