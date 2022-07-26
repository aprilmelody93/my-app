//JSX wants to see capitalized name on functions
import './header.css';
import Nav from '../Nav/Nav'

export default function Header(props){
    return(
        <header className='masthead'>
            <h1>{props.db}</h1>
            <Nav />
        </header>
    )
}