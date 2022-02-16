import Movie from "../Movie/Movie"
import "./MovieList.css"
const MovieList = (props) => {
    return (<ul className="flex-container">
        {props.movies.map(item => (
            <Movie movie={item} />

        ))}
    </ul>)
}

export default MovieList