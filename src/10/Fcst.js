import { BrowserRouter, Routes, Route } from "react-router-dom";

import FcstNav from "./FcstNav"
import FcstMain from "./FcstMain";
import UltraStrFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';

const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav/>
                <Routes>
                    {/* Route : 각 구성요소 >> 특정 경로 */}
                    <Route path="/" element={<FcstMain/>}/>  
                    <Route path="/ultra" element={<UltraStrFcst/>}/>
                    <Route path="/vilage" element={<VilageFcst/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );

}

export default Fcst;