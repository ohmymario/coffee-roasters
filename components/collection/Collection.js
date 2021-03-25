import React from 'react';
import Image from 'next/image';
import CollectionStyles from './CollectionStyles';
import { collectionData } from './CollectionData';

const Collection = () => (
  <CollectionStyles>
    {/* TODO: BACKGROUND WITH "OUR COLLECTION" */}
    {collectionData.map((item, i) => (
      <div className="collection-item" key={i}>
        <Image
          className="collection-image"
          src={item.src}
          width={item.width}
          height={item.height}
          quality={100}
          object-fit="contain"
          alt={item.alt}
        />
        <div className="collection-text">
          <h4>{item.name}</h4>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}
  </CollectionStyles>
);

export default Collection;
