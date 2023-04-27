import { useState } from "react";

const MyClockTime = () => {
    let t = new Date().toLocaleTimeString();
    const [myTime, setmyTime] = useState(t);    
    // [상태변수, 상태변수를 바꾸는 함수명]
    // setmyTime은 작동될 때마다 useState후크를 사용해 myTime변수에 업데이트된 t값을 저장시킨다.

    // setInterval(() => {console.log(t = new Date().toLocaleTimeString());}, 1000);
    setInterval(() => {setmyTime(new Date().toLocaleTimeString());}, 1000);
    // setmyTime함수는 setInterval의 인자로 쓰인다.
    // setInterval함수는 1초마다 setmyTime 작동시킨다.

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;