import NewsCard from "./NewsCard";

export default function(){
    return(
        <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-white px-10   ">
            <NewsCard
                className="col-span-2 row-span-1"
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />


            <NewsCard
                className="col-span-1 row-span-2"
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />
            <NewsCard
                className="col-span-1 row-span-1"
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />
            <NewsCard
                className="col-span-1 row-span-1"
                title="Noticia Grande de Portada"
                date="25 NOV 2025"
                summary="Esta es la noticia más importante, por eso ocupa más espacio."
                imageUrl="./hq720.jpg"
            />

        </div>  
    );
}