import React from 'react'
import Collection from '../../Components/Collection/Collection'
import Gallery from '../../Components/Gallery/Gallery'
import HotDeal from '../../Components/HotDeal/HotDeal'


export default function Home() {
    return (
        <div>
            <Collection  />
            <Gallery />
            <HotDeal />
        </div>
    )
}
