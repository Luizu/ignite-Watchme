import { MovieCard } from './MovieCard'

interface IContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Value: string;
    }>;
    Runtime: string;
    imdbID: string;
  }>;
  selectedGenreTitle: string;
};

export function Content({ movies, selectedGenreTitle }: IContentProps) {

 return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
 )
}