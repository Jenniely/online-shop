import React from 'react';
import  './shop-styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop-selector.js';

import CollectionPreview from '../../components/collection-preview/collection-preview-component.jsx';

const ShopPage = ({collections}) => (
<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
)

export default connect(mapStateToProps)(ShopPage);