import { cormorant } from '@/app/layout'; 

export default function BlockContainerHome(){
    return(
        <div className={`w-full py-4 bg-white`}> 
            <h2 className={`text-4xl text-center text-black ${cormorant.className}`}> 
               Noticias
            </h2>
        </div>
    );
};