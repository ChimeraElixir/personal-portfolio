import React from 'react';
import IonIcon from '@reacticons/ionicons';

const InfoMoreBtn = () => {
  return (
    <button className='info_more-btn' data-sidebar-btn>
      <span>Show Content</span>
      <IonIcon name='chevron-down' className='md hydrated' ></IonIcon>
    </button>
  );
};

export default InfoMoreBtn;