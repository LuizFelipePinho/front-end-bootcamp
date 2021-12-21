import React from 'react'
import Collection from '../../Components/Collection/Collection'
import Gallery from '../../Components/Gallery/Gallery'
import HotDeal from '../../Components/HotDeal/HotDeal'
import Product from '../../Components/Products/Product'


export default function Pages() {
    return (
        <div>
            <Collection  />
            <Gallery />
            <HotDeal />
            <Product />
        </div>
    )
}
