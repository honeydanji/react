//Atom파일은 src위에 파일을 따로 만들어서 관리하는 게 좋다

import { atom, selector } from "recoil";

export const CntAtoms = atom({
    key : 'counter', 
    default : 0
});

export const CntAtomsTwice = selector({
    key : 'CntAtomsTwice',
    get : ({get}) => {
        return get(CntAtoms) * 2;
    }
})