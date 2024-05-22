import React from 'react'
import './aboutElement.scss'
import { Link } from 'react-router-dom'
import { images } from '../../../constants'

export const AboutHub = () => {
    return (
        <div className='about-container'>
            <div className="wrapper">
                <div className="text-box">
                    <div className="headings">
                        <h3>About the</h3>
                        <h2>Climate Change Hub</h2>
                    </div>

                    <div className="bottom">
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus, quos voluptates minus molestiae reiciendis soluta, nihil eos ducimus quisquam nam dolorum facere, ipsam iure necessitatibus error dicta. Reiciendis, amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, illo impedit. Iure ipsa ullam culpa deserunt doloremque vitae labore eveniet voluptate. Quae magni debitis tenetur itaque ipsum consequatur ab pariatur.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, incidunt! Corporis expedita quis vel rerum cupiditate praesentium hic voluptas quisquam mollitia officiis vitae maxime quaerat quibusdam maiores consequatur, sed veniam.</p>

                            <div className="buttons">
                                <Link to className="button">Read more</Link>
                            </div>
                        </div>

                        <div className="sponsor">
                            <div className="heading">
                                <h3>Supported by</h3>
                            </div>
                            <div className="logo">
                                <img src={images.sponsorlogo} alt="" width={250} />
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}
