import React from 'react';
import image from '../background.jpg'


export default function Home(){
    return(
        <main>
            <img src={image} alt="Leaves" className="absolute object-cover w-full h-full " />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="image-bg text-white text-4xl cursive leading font-bold">Aloha! I'm Riddhesh</h1>
            </section>
        </main>
    )
}
