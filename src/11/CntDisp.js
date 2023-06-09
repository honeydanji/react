const CntDisp = ({counter}) => {

    return(
        <article className="grid">
                <h1>입력값 : {counter} </h1>
                <h1>입력값 2배 : {counter * 2}</h1>
        </article>
    )
}

export default CntDisp;