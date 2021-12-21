import React from 'react'
import Collection from '../../Components/Collection/Collection'
import Gallery from '../../Components/Gallery/Gallery'
import HotDeal from '../../Components/HotDeal/HotDeal'
import Product from '../../Components/Products/Product'

// Possível nova homepage
export default function Home2() {
    return (
        <div>            
            <HotDeal />
            <Product />
        </div>
    )
}
