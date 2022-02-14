import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import GenresList from "./pages/GenresList/GenresList";
import GenresFilterFilms from "./pages/GenresFilterMovies/GenresFilterMovies";
import OneMoviDetails from "./components/OneMovieDetails/OneMovieDetails";



function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                    <Route path={'/genres'} element={<GenresList/>}>
                        <Route index element={<MoviesList/>}/>
                        <Route path={':id'} element={<GenresFilterFilms/>}>
                            <Route path={':id'} element={<OneMoviDetails/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;