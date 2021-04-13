import React from 'react';
import Image from 'next/image';
import HeadquarterCardStyles from './HeadquarterCardStyles';

const HeadquarterCard = props => {
  const { item } = props;
  return (
    <>
      <HeadquarterCardStyles>
        <div className="card-img">
          <Image
            src={item.img}
            width={item.width}
            height={item.height}
            object-fit="contain"
            alt=""
          />
        </div>
        <h3>{item.country}</h3>
        <pre>{item.address}</pre>
        <p>{item.phone}</p>
      </HeadquarterCardStyles>
    </>
  );
};

export default HeadquarterCard;
