import NewsCard from "./NewsCard";

export default function(){
    return(
        <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-white px-10   ">
            <NewsCard
            colSpan="2" 
                rowSpan="1" 
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />


            <NewsCard
                colSpan="1" 
                rowSpan="1" 
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />
            <NewsCard
                colSpan="1" 
                rowSpan="1" 
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />
            <NewsCard
                colSpan="1" 
                rowSpan="1" 
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />

        </div>  
    );
}