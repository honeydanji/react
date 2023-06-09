import { useState } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {

    const [counter, setCounter] = useState(1);

        
    return (
        <main className="container">
            <CntInput counter={counter} setCounter={setCounter}/> 
            <CntDisp counter={counter}/>
        </main>
    )
}

export default Cnt;