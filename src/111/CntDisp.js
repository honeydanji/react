import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";
import { useRecoilValue } from "recoil";

const CntDisp = () => {
    const counter = useRecoilValue(CntAtoms);
    const counter2 = useRecoilValue(CntAtomsTwice);

    return(
        <article className="grid">
                <h1>입력값 : {counter} </h1>
                <h1>입력값 2배 : {counter2}</h1>
                <Link to="/">이동하기</Link>
        </article>     
    )
}

export default CntDisp;