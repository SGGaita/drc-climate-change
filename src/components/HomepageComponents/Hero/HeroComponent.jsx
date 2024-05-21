import React from 'react'
import './heroElement.scss'
import { Link } from 'react-router-dom'

export const HeroComponent = () => {
    return (
        <div className='hero-container'>
            <div className="hero-wrapper">
                <div className="text-box">
                    <div className="sub-heading">
                        Act now for a sustainable <span className="green">[County Name]</span>
                    </div>
                    <div className="heading">
                        <h1>Take action today</h1>
                    </div>
                    <div className="description">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nobis odit consequatur, at facere excepturi. Laborum aperiam consequatur repellendus dolorem, nostrum eaque quam dignissimos porro incidunt odio molestias tenetur sequi!
                        </p>
                    </div>

                    <div className="learn-more">
                        <Link className='button' to='/'>
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="image">
                    <h1>image</h1>
                </div>
            </div>

        </div>
    )
}
