import './searchbar.css';
import * as Realm from 'realm-web';


export default function SearchBar(props) {

    function submitted(ev){
        ev.preventDefault();
        console.log('submitted');
        props.setTerm(ev.target['term'].value);
        // props.addTerm(ev.target['keyword'].value);
    }
    function focused(ev){
        console.log('onFocus');
    }
    function changed(ev){
        console.log('onInput', ev.target.value)
    }
    function clicked(ev) {
        console.log('clicked');
    }

    return(
        <section className='searchBar'>
            <form onSubmit={submitted}>
                <input type="text" name="term" className='searchText' placeholder="Student's netID" onFocus={focused} onInput={changed} />
                <button type="submit" className='searchBtn' name="searchBtn" onSubmit={submitted} onClick={clicked}>Search</button>
                {props.term? <p>Showing results for: {props.term}</p> : <p>*crickets* It's real quiet in here.</p>}
            </form>

        </section>
    )
}