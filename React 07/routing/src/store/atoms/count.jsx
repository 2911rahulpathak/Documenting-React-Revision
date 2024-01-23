//define a single atom -> this is going to store my counter information

import { atom } from "recoil";

//dont have the same key for 2 different atoms

export const countAtom = atom({
    key:"countAtom",
    default:0
});
//default -> what do you want the specific value of this atom to be 
