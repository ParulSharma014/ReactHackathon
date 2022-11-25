import React from 'react'
import ButtonBases from '../Butt0nBases/ButtonBases'
import './HomePage.css'
import MediaCard from './MediaCard'
import MediaCard1 from './MediaCard1'
import MediaCard2 from './MediaCard2'

export default function HomePage() {
    return (
        <div>
            <div className="container user-cards-mui">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-4">
                        <MediaCard/>
                    </div>
                    <div className="col-12 col-md-8 col-lg-4">
                        <MediaCard1/>
                    </div>
                    <div className="col-12 col-md-8 col-lg-4">
                        <MediaCard2/>
                    </div>
                </div>
            </div>
            <ButtonBases />
        </div>
    )
}
