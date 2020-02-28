import React from 'react';
import CollectionItem from '../collection-item/collection-item-component.jsx'
import './collection-preview-styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{
          items.filter((_item, index) => index < 4)
          .map((_item) =>  (
              <CollectionItem key={_item.id} item={_item}/>
          ))}
    </div>
    </div>
);

export default CollectionPreview;