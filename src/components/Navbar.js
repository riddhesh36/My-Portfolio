import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar(){
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex align-items-center">
                    <NavLink to = "/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-500 hover:text-gray-500 text-2xl font-bold cursive tracking-widest">
                        Riddhesh
                    </NavLink>
                    <NavLink to = "/post" className="inline-flex cursive intems-center py-6 px-3 my-6 rounded text-red-800 hover:text-gray-300" activeClassName="text-white bg-gray-800">
                        Blog Post
                    </NavLink>
                    <NavLink to = "/projects" className="inline-flex cursive intems-center py-6 px-3 my-6 rounded text-red-800 hover:text-gray-300" activeClassName="text-white bg-gray-800">
                        Projects
                    </NavLink>
                    <NavLink to = "/about" className="inline-flex cursive intems-center py-6 px-3 my-6 rounded text-red-800 hover:text-gray-300" activeClassName="text-white bg-gray-800">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-3 my-6">
                    <SocialIcon url="https://www.behance.net/riddheshpatil" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://github.com/riddhesh36" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.linkedin.com/in/riddhesh-patil-a079ba1b4/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}
