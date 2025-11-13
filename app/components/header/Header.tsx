import { montserrat, cormorant } from '@/app/layout'; 
import LanguageSelector from './LanguageSelector';

export default function Header() {
    console.log(LanguageSelector);
    return (

        
        <header className="w-full px-10 bg-white text-black sticky z-10">
            <div className="flex items-center justify-between py-6">
                
                <LanguageSelector/>
                
                <div className="text-center w-full">
                    <h1 className={`text-3xl ${cormorant.className}`}> 
                        Museo de La Pampa
                    </h1>
                </div>

                <button className="border-2 border-solid border-amber-50 bg-amber-500 text-white w-46 px-6 py-2 rounded-full hover:bg-amber-600 transition">
                    Iniciar sesión
                </button>
            </div>

            <div className="border-b border-black"></div>

                <nav className={`flex justify-center gap-6 py-3 text-base ${montserrat.className}`}>

                <a href="#" 
                className="relative text-black after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Inicio
                </a>

                <a href="#" 
                className="relative text-black after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Exhibiciones
                </a>
                
                <a href="#" 
                className="relative text-black after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Explorar
                </a>
                
                <a href="#" 
                className="relative text-black after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Noticias
                </a>

                <div className="border-l border-black"></div>

                <a href="#" 
                className="relative text-black after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Ver mas
                </a>
                
 
            </nav>
        </header>
    );
}