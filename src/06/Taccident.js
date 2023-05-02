import Taccidentdata from './dataTaccident.json';
import Taccidentnav from './Taccidentnav';
import Taccidentnav1 from './Taccidentnav1';
import {useState, useEffect} from 'react';

const Taccident = () => {
    const datas = Taccidentdata.data;

    
    let c1 = datas.map((item) => item.사고유형_대분류);
    const c2 = datas.map((item) => [item.사고유형_대분류, item.사고유형_중분류])
    c1 = new Set(c1);
    c1 = [...c1];
    //console.log(c1);
    //console.log(c2);

    const [sel1, setSel1 ] = useState(0);
    const [sel2, setSel2 ] = useState([1]);

    // useEffect(() => {
    //     console.log('Taccident sel2 useeffect', sel2);
    //     let temp = data.filter((item) =>
    //             item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 ===sel2[1]);
    //     setSelData(temp[0]);
    // }, [sel2]); 

    useEffect(() => {
        console.log(`sel1 changed to ${sel2}`);
        console.log(`sel2 changed to ${sel1}`);
      }, [sel1, sel2]);

    // const c2 = [];
    // for(let item of datas) {
    //     let temp = [];
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    return (
        <main className='container'>
            <article>
                <Taccidentnav c1 = {c1} sel1 = {sel1} setSel1 = {setSel1} />
                <Taccidentnav1 c1 = {c1} c2 = {c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2}/> 
            </article>
        </main>
    );
}

export default Taccident;