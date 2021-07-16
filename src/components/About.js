import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import about from '../about.jpg'
import  imageUrlBuilder  from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const[author, setAuthor] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url 
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    },[]);
    
    if (!author) return <div>Loading...</div>

    return(
        <main className="relative">
            <img src={about} alt="about" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bbg-yellow-300 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-yellow-300 mb-4 text-6xl">
                            Hey there.I'm {" "}
                            <span className="text-red-300 ">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-gray cursive text-gray-300">
                        <BlockContent blocks={author.bio} projectId="oxfh7dab" dataset="production" />
                        <p className="cursive text-gray-500">Started Designing in 2019.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )    

}


