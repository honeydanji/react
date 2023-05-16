/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/

import styles from "./Gallery.css";
import { useState, useEffect, useRef } from 'react';
import GalleryView from "./GalleryView";

const Gallery = () => {
    //state 변수
    const [items, setItems] = useState();

    //input 제어
    const txt1 = useRef(); //포커스를 커서에. 


    //컴포넌트가 처음 렌더링 되었을때 한번 실행
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //컴포넌트 해당하는 state변수가 변경이 될때마다 실행(fetch, then 부분)

    useEffect(() => {
        console.log("useEffect", items);
    }, [items]);

    //사용자정의함수
    const getData = (kw, num, no) => { //아래 const에서 kw값을 여기로 넘겨줬다.
        let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + '&MobileOS=ETC';
        url = url + '&MobileApp=AppTest';
        url = url + '&arrange=A';
        url = url + `&keyword=${kw}`;
        url = url + '&_type=json';

        console.log(url)

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item)) 
            .catch((err) => console.log(err));
    }

    const show = (e) => { 
        e.preventDefault(); 
        if (txt1.current.value === ''){
               alert ("키워드를 입력해주세요" );   
            return;
    }

        //인코딩한 키워드
        const kw = encodeURI(txt1.current.value);
        getData(kw, 10, 1); 
        console.log(kw,10,1);
    }

    const showClear = (e) => {
        e.preventDefault();
    }
   

    return (
        <main className="container">
            <form>
                <article>
                    <header><h1>한국관광공사 관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요" required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>                   
                </article>
            </form>
            {items && <GalleryView content= {items} />}
        </main>
    )
}

export default Gallery;

// useEffect : hook을 사용하여 컴포넌트가 마운트 됐을 때, 언마운트 됐을 때, 그리고 업데이트 될 때 특정 작업을 처리할 때 사용된다.
