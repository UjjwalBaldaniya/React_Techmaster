import React from 'react'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import img2 from "../photos/2.webp";

export default function Home() {
    return (
        <>
            <div className="home1" id='home'>
                <main>
                    <h1>Tech Master</h1>
                    <p>Soulution to all your Problems.</p>
                </main>
            </div>

            <div className="home2">
                <img src={img2} alt="photo2" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quos suscipit exercitationem placeat deleniti veniam cupiditate ex nesciunt sed nostrum corporis id, nihil nemo dolor unde officia accusantium, itaque porro asperiores? Natus, autem ab!</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam consectetur sapiente nisi id hic consequuntur dignissimos veritatis incidunt unde iure dicta numquam et, cupiditate in pariatur atque doloremque rerum aliquid harum asperiores odio eum? Magni sequi necessitatibus, doloremque omnis eveniet sit fuga, atque iure vel inventore a consectetur repellat tempora odio ipsa et natus minus? Id saepe possimus eius explicabo sint perferendis rem molestias error nulla officia officiis eaque, temporibus quasi culpa fugit quos doloribus veritatis vero animi quis repellat! Alias animi aliquam dolore omnis natus, id voluptate tempore vero, repudiandae itaque facere cupiditate quas? Enim vitae rem accusantium!</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: '0.3s' }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: '0.5s' }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: '0.7s' }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{ animationDelay: '1s' }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
