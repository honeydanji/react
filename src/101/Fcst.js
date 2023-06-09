import { BrowserRouter, Routes, Route } from "react-router-dom";

import FcstNav from "./FcstNav"
import FcstMain from "./FcstMain";
import UltraStrFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';

const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav/>
                <Routes>
                    {/* Route : 각 구성요소 >> 특정 경로 */}
                    <Route path="/" element={<FcstMain/>}/>  
                    <Route path="/ultra/:dt/:area/:x/:y" element={<UltraStrFcst/>}/>
                    <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );

}

export default Fcst;

// const Fcst = () => {
//   // openAPI를 가져올 때는 fetch를 반드시 사용한다.
  
//       //useState변수 : 변수 값이 변경이 되면 재 렌더링된다.
//       //해당 컴퍼넌트에서만 변경가능하다.
//       const [items, setItems] = useState();
    
  
//       //렌더링이 될 때 한번 실행
//       useEffect(() => {
  
//           // 요청 메시지 명세와 같이 구분한다.
//           let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
//           url = url + 'serviceKey=s0Yvyl0rFdyjNVOtahqAStzD%2FVVKe3lmJ6vzEbj1WCNtvlv8g8%2B7kFJ%2Fs4WkpmsMFMCCNfudIzCnZxCGmdWWzg%3D%3D';
//           url = url + '&numOfRows=60';
//           url = url + '&pageNo=1';
//           url = url + '&base_date=20230524';
//           url = url + '&base_time=0630';
//           url = url + '&nx=55';
//           url = url + '&ny=127';
//           url = url + '&dataType=json';
  
//           console.log(url);
  
//             // 받아온 url을 resp라는 변수에 저장하고 .json()으로 json파일로 변환한다.
//           fetch(url)
//           .then((resp) => resp.json())
//           .then((data) => setItems(data.response.body.items.item))
//           .catch((err) => console.log(err)) 
          
  
//       } , []) ; // [] << defecdency Array
      
      
//       useEffect(() => {
//         console.log('item', items);
//       }, [items])
    
//       return (
//         <>
//         {items && <FcstTable items={items} gubun="초단기예보"/>} 
//         </> 
//     );
//   }
  