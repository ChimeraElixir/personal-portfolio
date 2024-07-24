import React from "react";

const InfoContent = ({ name, domains }) => {
  return (
    <div className='info-content'>
      <h1 className='name' title={name}>
        {name}
      </h1>
      <div className="domain-list">
      {domains.map((domain,index) => {
        return <p key={index} className='title'>{domain}</p>;
      })}
      </div>
    </div>
  );
};

export default InfoContent;
