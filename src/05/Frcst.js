import data from './dataFrcst.json';
import style from'./Frcst.module.css';
import {useState} from 'react';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]; // 배열  [키값나열]
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]; // 배열  [키값나열]

    dtKey.map((item) => console.log(data[item]));   // map : 배열의 각 키 이름을 반복하는데 사용된다.
    cnKey.map((item) => console.log(data[item]));

    // 오브젝트 만들기
    let dtcn = {};
    dtKey.map((item, idx) =>
        dtcn[data[item]] = data[cnKey[idx]]
        ); 
        // cnKey[idx]에 있는 data값을 가져온다.  
        // dtKey[idx]에 있는 data값을 가져온다.
        // 가져온 값을 dtcn 개체에 넣는다.

    
    //상세정보
    const [showTag, setshowTag ] = useState('');

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',');
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        
        dtcnItem = dtcnItem.map((item) => 
                <div key={item[0]}>
                    <span className={style.c1}>{item[0]}</span>
                    {item[1].trim() === '낮음' ? <span className={style.c21}>{item[1]}</span>
                        : item[1].trim() === '보통' ? <span className={style.c22}>{item[1]}</span>
                        : <span className={style.c2}>{item[1]}</span>}
                </div>
        )
        console.log(dtcnItem);
        //setshowTag(dtcn[k]);
        setshowTag(dtcnItem); 
    }

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
            <div className={style.dt}
                key={'dt' +idx}
                onClick={() => detail(item)}>{item}</div>
    );


    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className="grid">
                        {dtTag}
                    </div>
                </header>
                <div className="grid">
                    {showTag}
                    </div>
            </article>
        </main>
    );
}

export default Frcst;