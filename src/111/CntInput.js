import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
    const [counter, setCounter] = useRecoilState(CntAtoms);

    const increase = () =>{
        setCounter(counter + 1);
        console.log(counter);
    }
    const decrease = () =>{
        setCounter(counter - 1);
    }
    

    return (
        <article>    
        <div className="grid">
            <button onClick={increase}>증가</button>
            <input type="text" readOnly value={counter}></input>
            <button onClick={decrease}>감소</button>
        </div>
        <Link to="/CntDisp">이동하기</Link>
            <hr />
    </article>
    
    )
}

export default CntInput;