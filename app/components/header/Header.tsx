"use client";

import LanguageSelector from './LanguageSelector';
import { useEffect, useState } from 'react';

export default function Header() {

    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if(currentScroll <= 0){
                setHidden(false);
                setLastScroll(0);
                return;
            }

            if(currentScroll > lastScroll && currentScroll > 720) setHidden(true);
            else if (currentScroll < lastScroll - 20) setHidden(false);
            
            setLastScroll(currentScroll);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll])


    return (
        
        <header className={`w-full px-10 bg-header text-white fixed top-0 left-0 z-10 transition-transform duration-500 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex items-center justify-between py-6">
                
                <LanguageSelector/>
                
                <div className="text-center w-full">
                    <h1 className={`text-6xl font-cormorant font-bold`}> 
                        Museo de La Pampa
                    </h1>
                </div>

                <button className="border border-solid border-gray-50 bg-white text-black w-46 px-6 py-2 rounded-full">
                    Iniciar sesión
                </button>
            </div>

            <div className="border-b border-white"></div>

                <nav className={`flex justify-center gap-6 py-3 text-base font-montserratv`}>

                <a href="#" 
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Inicio
                </a>

                <a href="#" 
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Exhibiciones
                </a>
                
                <a href="#" 
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Explorar
                </a>
                
                <a href="#" 
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Noticias
                </a>

                <div className="border-l border-white"></div>

                <a href="#" 
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Ver mas
                </a>
                
 
            </nav>
        </header>
    );
}