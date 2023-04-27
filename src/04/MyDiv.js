import MyDivArticle from './MyDivArticle';
import './MyDiv.css';

const MyDiv = () => {

    return (
        <main className='container'>
            <article>
            <h1>MyDiv</h1>
            <ul>
                <li>11</li>
                <li>22</li>
            </ul>
            <footer>footer</footer>
            </article>

            <MyDivArticle />
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );

}

export default MyDiv;