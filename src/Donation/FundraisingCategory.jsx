import React from 'react';

const FundraisingCategory = ({ imageSrc, categoryTitle, categorySubtitle }) => {
  return (
    <li className='ima'>
      <a href='fundraising'>
        <img className='three' src={imageSrc} alt={categoryTitle} /><br />
      </a>
      <b>{categoryTitle}</b><br />
      {categorySubtitle && <span>{categorySubtitle}</span>}
    </li>
  );
};

export default FundraisingCategory;