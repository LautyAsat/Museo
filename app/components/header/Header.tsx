
export default function Header() {
    return (
        <header className="w-full px-10 bg-black text-white">
            <div className="flex items-center justify-between py-6">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition">
                    Iniciar 
                </button>

                <div className="text-center w-full">
                    <h1 style={{ fontFamily: "CormorantUpright" }} className="text-3xl">
                    Museo de La Pampa
                    </h1>
                </div>

                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition">
                    Iniciar 
                </button>


            </div>


            <div className="border-b border-white"></div>

            <nav style={{ fontFamily: "MontserratAlternates" }} className="flex justify-center gap-6 py-3 text-base ">

                <a href="#" 
                className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Inicio
                </a>

                <a href="#" 
                className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Inicio
                </a>

                <a href="#" 
                className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Inicio
                </a>

                <div className="h-6 border-l border-white"></div>
                <a href="#" className="hover:text-blue-500 transition">Ver mas</a>

            </nav>

        </header>
    );
} 

