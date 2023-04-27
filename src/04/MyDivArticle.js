// 전역으로 적용
import './MyDiv.css';

// 컴포넌트에 적용
import style from './MyDiv.module.css';

// state변수 사용 1단계
import { useState } from 'react';


// const MyDivArticle = (probs) => {
//    const aname = probs.aname;
// }

// 매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
const MyDivArticle = ({ aname }) => {

    let n = aname === undefined ? '0' : aname.slice(-1);
    // let cnt = 0;

    // state변수 사용 2단계 : 변수 선언
    const [cnt, setCnt] = useState(0);

    //click 이벤트  
    const like = (n)=>{ 
        //cnt++;
        
        //state변수 사용 3단계 : 변수 내용 변경
        setCnt(cnt + 1);
        console.log(cnt)
    };
    

    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : aname}-1</li>
                <li className={style.ali}>{'MyDiv' + n}-2</li>
            </ul>

            {n === '1' &&
                <footer>
                    <span onClick={() => like()}>👍{cnt}</span>
                </footer>
            }
        </article>
    );

}

export default MyDivArticle;