import './Box.css';
import {useState } from 'react';

//const BoxRows = (probs) => {
const BoxRows = ({ mvList }) => {
    //const mvList = [...probs.mvList];
    // console.log("boxrows", mvList);

    const [footTag, setFootTag] = useState("합계");

    // 클릭된 자료 확인
    const showMv = (row) => {
        //console.log(row.rank, row.movieNm);
        setFootTag(concat("["+row.movieCd+"]" + " " + row.movieNm + " 개봉일 : " + row.openDt));
    }



    let trTags = [];
    for (let row of mvList) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else if (intent > 0) icon = '🔼';


        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}</td>
            </tr>
        );


    }

    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr className="ft1">
                <td colSpan={4} className="ft">{footTag}</td>
                </tr>
            </tfoot>
        </>
    )
}

export default BoxRows;