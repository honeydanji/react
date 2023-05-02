import './Taccident';


const Taccidentnav1 = ({ c1, c2, sel1, setSel1, setSel2 }) => {

    // const show = (item) => {
    //     console.log(c2);
    // }

    const btTag = c2
    .filter((item) => item[0] === c1[sel1])
    .map((item) =>
        <li key={item[1]}>
            <button onClick={() => setSel2(item[1])}>{item[1]}</button>
        </li>
    );
    console.log(btTag);

    return (

        <nav>
            <ul>
                <h4>사고유형 중분류</h4>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>


    );
}

export default Taccidentnav1;