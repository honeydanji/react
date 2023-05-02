import './Taccident';


const Taccidentnav = ({ c1, c2, sel1, setSel1}) => {
    //console.log(c1);

    const btTag = c1.map((item) =>
        <li key={item}>
            <button onClick={() => console.log(setSel1(item))}>{item}</button>
        </li>
    );

    return (

        <nav>
            <ul>
                <h4>사고유형 대분류</h4>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>


    );
}

export default Taccidentnav;