import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<{
    imdbID: string,
    Title: string,
    Poster: string,
    Ratings: Array<{
      Source: string,
      Value: string,
    }>,
    Runtime: string
  }>
}

export function Content(props: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {props.movies.map(movie => <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />)}
      </div>
    </main>

  )
}