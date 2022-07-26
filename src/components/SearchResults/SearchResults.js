import './searchresults.css'

export default function SearchResults(props) {
  return (
    <ul className='results'>
        {
            props.films.map(film => (
                <li key={film.episode_id}>Film title: {film.title}; Film director:{film.director}</li>
            ))
        }
    </ul>
  )
}
