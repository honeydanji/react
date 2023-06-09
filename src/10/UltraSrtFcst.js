import React, { useState, useEffect } from 'react';
import FcstTable from './FcstTable';
import xxx from './getxy.json' ;

const UltraSrtFcst = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [op, setOp] = useState([]);

  const yeb = xxx.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const url = `https://apis.data.go.en/1360000/VillageFcstInfoService_2.0/getUltraShortFcst?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4c xVfNcuajFNqiCUQGc2xx1Q%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230522&base_time=0630&nx=55&new= 127`;

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    if (selectedOption) {
      fetch(url)
        .then(response => response.json())
        .then(data => setOp(data.response.body.items.item));
    }
  }, [selectedOption]);

  console.log(op);

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">선택</option>
        {yeb}
      </select>
      <article>{op && <FcstTable op={op} burn="fresh" />}</article>
    </div>
  );
};

export default UltraSrtFcst;