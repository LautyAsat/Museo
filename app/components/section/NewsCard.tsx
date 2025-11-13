import { montserrat, cormorant } from '@/app/layout'; 
interface NewsCardProps {
    className?: string; 
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
}

const NewsCard = ({ 
    title, 
    date, 
    summary, 
    imageUrl, 
    className = '' 
}: NewsCardProps) => {
    
    return (

        <div 
            className={`overflow-hidden bg-white 
                        transition duration-300 shadow-lg hover:shadow-xl
                        h-full flex flex-col ${className}`}
        >   
            <div className="w-full overflow-hidden grow"> 
                <img 
                    className="w-full h-full object-cover
                               transform transition-transform duration-300 ease-in-out 
                               hover:scale-105"  
                    src={imageUrl} 
                    alt={title}
                />
            </div>
            
            <div className="p-6 shrink-0">
                <p className={`text-sm text-gray-500 mb-2 ${montserrat.className}`}>
                    {date}
                </p>
                <h3 className={`font-bold text-xl mb-3 text-gray-900 leading-snug ${cormorant.className}`}>
                    {title}
                </h3>
                <p className={`text-gray-700 text-base mb-4 ${cormorant.className}`}>
                    {summary}
                </p>
                <a 
                    href="#" 
                    className={`inline-block text-amber-600 hover:text-amber-800 font-semibold ${montserrat.className}`}
                >
                    Leer más →
                </a>
            </div>
        </div>
    );
}

export default NewsCard;