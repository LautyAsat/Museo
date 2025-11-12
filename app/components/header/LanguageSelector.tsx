"use client";
import React, { useState, useRef, useEffect } from 'react';

// 1. Definición de la Interfaz (Type) para el Objeto de Idioma
interface Language {
    code: string;
    label: string; // El nombre del idioma
}

// Lista de idiomas (usando el tipo definido)
const languages: Language[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
];

const LanguageSelector: React.FC = () => {
    // 2. Estado tipado: TypeScript infiere que es boolean y Language
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    
    // Referencia tipada para el elemento HTML
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Función que recibe un objeto Language
    const handleLanguageSelect = (lang: Language) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
        // Lógica para cambiar el idioma...
        console.log(`Idioma cambiado a: ${lang.label}`);
    };

    // Efecto para cerrar el menú si se hace clic fuera de él
    useEffect(() => {
        // Tipamos el evento de ratón
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md text-black font-medium hover:text-amber-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    {selectedLanguage.label}
                    {/* Ícono de flecha */}
                    <svg
                        className={`-mr-1 ml-2 h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Menú desplegable */}
            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Langues</p>
                    </div>

                    <div className="py-1" role="none">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang)}
                                className={`
                                    ${lang.code === selectedLanguage.code
                                        ? 'bg-gray-100 text-black font-bold'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    } 
                                    block w-full text-left px-4 py-2 text-sm transition-colors duration-100
                                `}
                                role="menuitem"
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;