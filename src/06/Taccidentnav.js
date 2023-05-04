import style from './Taccident.module.css';

const TaccidentNav = ({c1, sel1, setSel1}) => {
    //console.log(c1)

    // const show = (item) => {
    //     console.log(item)
    // }
    const btTag = c1.map((item)=>
        <li key={item}>
            <button className={style.aul} onClick = {() => setSel1(item)}>{item}</button>
        </li>
    );
    return (
        <nav>
            <ul>
                <h1>사고유형 대분류</h1>
            </ul>
            <ul>
                {btTag} 
            </ul>
        </nav>
    );
}

export default TaccidentNav ;