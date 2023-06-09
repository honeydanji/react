const FcstTable = ({ op }) => {
    return (
      <table>
        <thead>
          <tr>
          <th scope="col">항목명</th>
                    <th scope="col">예보일자</th>
                    <th scope="col">예보시각</th>
                    <th scope="col">예보 값</th>
          </tr>
        </thead>
        <tbody>
          {op.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.forecastDate}</td>
              <td>{item.forecastTime}</td>
              <td>{item.forecastValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default FcstTable;