import dataTaccident from './dataTaccident.json';
import TaccidentNav from './TaccidentNav';
import TaccidentNav1 from './TaccidentNav1' ;
import TaccidentDetail from './TaccidentDetail';
import { useState, useEffect } from 'react';
import style from './Taccident.module.css';

const Taccident = () => {
    //console.log(dataTaccident['data'])
    //console.log(dataTaccident.data)

    const data = dataTaccident.data; //사고건수 obj 배열 (15)
    let c1 = data.map((item) => item.사고유형_대분류)
    c1 = new Set(c1);
    c1 = [...c1]
    // console.log('c1', c1);


    // const c2  = [] ;
    // for(let item of data) {
    //     let temp = [item.사고유형_대분류, item.사고유형_중분류] ;
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류])
    // console.log('c2', c2);

    const [sel1 , setSel1] = useState(0) ;//대분류선택
    const [sel2 , setSel2] = useState([]) ;//중분류선택
    const [selData , setSelData] = useState({}) ;

    useEffect(() => {
        console.log('Taccident sel1 useeffect []', sel1);
    }, []);

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel1);
    }, [sel1]);

    useEffect(() => {
        console.log('Taccident sel2 useeffect', sel2);
        let temp = data.filter((item) => 
                item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 ===sel2[1]) ;
        setSelData(temp[0]) ;
    }, [sel2]);

    useEffect(() => {
        console.log('Taccident selData useeffect', selData) ;
    }, [selData]) ;

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel1);
        console.log('Taccident sel2 useeffect', sel2);
    });

    return (
        <main className='container'>
            <article>
                <header >
                    <TaccidentNav c1 = {c1} sel1 = {sel1} setSel1 = {setSel1} />
                    <TaccidentNav1 c2 = {c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2} />
                </header>
                <div className='grid'>
                    {selData && <TaccidentDetail selData = {selData}/>}
                    </div>
            </article>
        </main>
    );
}

export default Taccident;