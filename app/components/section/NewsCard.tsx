import { montserrat, cormorant } from '@/app/layout'; 

interface Props {
    colSpan: string;
    rowSpan: string;
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
}

const NewsCard = ({ colSpan, rowSpan, title, date, summary, imageUrl }: Props) => {
    
    const gridClasses = `col-span-${colSpan} row-span-${rowSpan}`;

    return (
        <div className={`overflow-hidden bg-white transition:  ${gridClasses}`}>   
            <div>
                <img 
                    className="w-full h-90 object-cover
                    transform transition-transform duration-300 ease-in-out 
                    hover:scale-105"  
                    src={imageUrl} 
                    alt={title}
                />
                <div className="p-6">
                    <h3 className={`font-bold text-xl mb-3 text-gray-900 leading-snug ${cormorant.className}`}>{title}</h3>
                    <p className={`text-gray-700 text-base mb-4 ${cormorant.className}`}>{summary}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;