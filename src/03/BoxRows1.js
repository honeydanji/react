import './Box.css';

//const BoxRows = (probs) => {
const BoxRows = ({ mvList }) => {
    //const mvList = [...probs.mvList];
    console.log("boxrows", mvList);


    let trTags = [];
    for (let row of mvList) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon;
        let intent = parseInt(row.rankInten);
        if (intent == 0) icon = '⏺';
        else if(intent < 0) icon = '🔽';
        else if(intent > 0) icon = '🔼';



            trTags.push(
                <tr className="mytr" key={row.movieCd}>
                    <td>{row.rank}</td>
                    <td>{row.movieNm}</td>
                    <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                    <td>{icon}</td>
                </tr>
            );


    }

    console.log(trTags);


    return (
        <>
            {trTags}
        </>
    )
}

export default BoxRows;