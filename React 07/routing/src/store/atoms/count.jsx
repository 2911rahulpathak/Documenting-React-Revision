//define a single atom -> this is going to store my counter information

import { atom, selector } from "recoil";

//dont have the same key for 2 different atoms

export const countAtom = atom({
    key:"countAtom",
    default:0
});
//default -> what do you want the specific value of this atom to be 

export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countAtom)
        return count % 2;
    }
})