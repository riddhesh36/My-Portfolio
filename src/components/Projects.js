import React, {useState, useEffect} from 'react';
import sanityClient from '../client';

export default function Projects(){
    const [projectData, setProjectData] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            data,
            place,
            description,
            projectType,
            link,
            tag
        }`)
        .then((data) =>setProjectData(data))
        .catch(console.error);
    },[]);

    return(
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Welcome To My Project Page!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index)=>(
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-80 text-3xl font-bold hover:text-red-700">
                                <a href={ project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{ project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span className="mt-5">
                                    <strong className="font-bold">Finished On</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span className="mt-5">
                                    <strong className="font-bold">Company</strong>:{" "}
                                    { project.place}

                                </span>
                                <span className="mt-5">
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline text-red-400 text-xl">
                                    View This Project{""}
                                    <span role="img" aria-label="right pointer"> 👉</span>
                                </a>
                                
                            </div>
                        </article>
                    ))}

                </section>
            </section>
        </main>
    )
}