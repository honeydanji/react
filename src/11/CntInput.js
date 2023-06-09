const CntInput = ({counter, setCounter}) => {

    const increase = () =>{
        setCounter(counter + 1);
        console.log(counter);
    }
    const decrease = () =>{
        setCounter(counter - 1);
    }
    

    return (
        <article>    
        <div className="grid">
            <button onClick={increase}>증가</button>
            <input type="text" readOnly value={counter}></input>
            <button onClick={decrease}>감소</button>
        </div>
    </article>
    )
}

export default CntInput;