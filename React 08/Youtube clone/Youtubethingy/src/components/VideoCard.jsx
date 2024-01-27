export function VideoCard({id,title,image,thumbImage,author,view,timestamp}){
        return <div className="p-3 cursor-pointer">
            <img src={image} className="rounded-xl"/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-30 h-30" src={thumbImage}></img>
            </div>

            <div className="col-span-11 pl-2">
                <div>
                {title}
                </div>

                <div className="col-span-11 text-gray-400 text-base">
               {author}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
               {view} | {timestamp}
            </div> 
            </div>
            
         </div>
       </div>
}