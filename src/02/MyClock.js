import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
import '../01/Hello';

const Myclock = () => {
    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImage/>
                <MyClockTime/>
            </article>
        </main>
    );
}

export default Myclock;