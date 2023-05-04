const MyRef = () => {
    let cnt1 = 1;

    const showCnt = () => {
        console.log('cnt1 =', cnt1);
    }

    const showCnt1 = () => {
        showCnt1();
    }

    return(
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <button onclick={() => showCnt1()}>컴포넌트 변수 : {cnt1}</button>
                    </div>
                </header>
            </article>
        </main>
    );
}

export default MyRef;