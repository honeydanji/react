import {useState, useEffect, useRef} from "react";
import code from './getcode.json';

const FcstTable = ({items, gubun}) => {
// openAPI를 가져올 때는 fetch를 반드시 사용한다.

    //useState변수 : 변수 값이 변경이 되면 재 렌더링된다.
    //해당 컴퍼넌트에서만 변경가능하다.
    //const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef() ;

    //렌더링이 될 때 한번 실행
    useEffect(() => {

        //code 만들기
        //filter : 배열에서 일부만 가져올 때 유용하다.
        let tempcd = code.filter((i) => i["예보구분"] === gubun)
        console.log('tempcd', tempcd);
        tempcd = tempcd.map((i) =>
            <option key={i['항목값']} value={i['항목값']}>{i['항목명']}({i['항목값']})</option>
        )
        setOpTags(tempcd);
    } , [gubun]) ; // [] << defecdency Array
    


    //사용자정의 : select change
    const showItem = (event) => {
        event.preventDefault();
        // console.log('sel', e.target.value);
        console.log(sel.current.value);


        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => 
                        i["예보구분"] === gubun && 
                        i["항목값"] === sel.current.value
                        );
        tempcd = tempcd[0];
        
        let skyobj = {'1' : '해' , '3' : '눈', '4' : '비'};
        let ptyobj = {'0' : '없음', '1' : '비', '2' : '비/눈', '3' : '눈', '5' : '빗방울', '6' : '빗방울눈날림', '7' : '눈날림'}; 

        temp = temp.map((i, idx) => 
        <tr key={i.category + idx}>
            <td>{tempcd['항목명']}</td>
            <td>{i.fcstDate}</td>
            <td>{i.fcstTime}</td>
            <td> {(i.category === 'SKY') ? skyobj[i.fcstValue] : (i.category === 'PTY') 
                ? ptyobj[i.fcstValue] : i.fcstValue + tempcd['단위']}</td>
        </tr>
    );
    console.log('items', items);
    setTrTags(temp);

    }
    return (
        <main className="container">
            <form>
            <article>
                <header>
                    
                    <div className="grid">
                        <div><h1>기상청 {gubun}</h1></div>
                        <div>
                            {/*  onChange될 때 마다 showItem()이 실행된다. */}
                            <select ref={sel} id='sel' name='sel' onChange={(event) => showItem(event)}>
                                <option value=''>선택</option>
                                {opTags}
                            </select>
                        </div>
                    </div>
                   
                </header>
                <table>
                        <thead>
                        <tr>
                            <th scope="col">자료구분</th>
                            <th scope="col">예보일자</th>
                            <th scope="col">예보시각</th>
                            <th scope="col">예보 값</th>
                        </tr>
                        {items && trTags}
                    </thead>
                </table>
            </article>
            </form>
        </main>
    );
}

export default FcstTable;