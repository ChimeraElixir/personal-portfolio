import React from 'react';
import IonIcon from '@reacticons/ionicons';

const InfoMoreBtn = () => {
  return (
    <button className='info_more-btn' data-sidebar-btn>
      <span>Show Content</span>
      <IonIcon className='chevron-down' />
    </button>
  );
};

export default InfoMoreBtn;