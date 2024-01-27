import { SearchBar } from "./SearchBar"

export const AppBar = () =>{
    return <div className="flex justify-between pt-1">
        <div className="text-md inline-flex items-center pb-2 p-3">
            NamesTube
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div className="pr-5">
            Sign In
        </div>
        

    </div>
}