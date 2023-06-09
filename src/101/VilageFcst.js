import {useState, useEffect} from "react";
import FcstTable from "./FcstTable";

const VilageFcst = () => {
// openAPI를 가져올 때는 fetch를 반드시 사용한다.

    //useState변수 : 변수 값이 변경이 되면 재 렌더링된다.
    //해당 컴퍼넌트에서만 변경가능하다.
    const [items, setItems] = useState();
  

    //렌더링이 될 때 한번 실행
    useEffect(() => {

        // 요청 메시지 명세와 같이 구분한다.
        // 단기예보 api로 바꿔야 한다.
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + `serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D`;
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230524';
        url = url + '&base_time=0500';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json';

        console.log(url);

          // 받아온 url을 resp라는 변수에 저장하고 .json()으로 json파일로 변환한다.
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err)) 
        

    } , [items]) ; // [] << defecdency Array
    
    
    useEffect(() => {
      console.log('item', items);
    }, [items])
  
    return (
      <>
      {items && <FcstTable items={items} gubun='단기예보'/>} 
      </> 
  );
}

export default VilageFcst;