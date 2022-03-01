import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery";


export function MoviesGrid(){
    /* let movies=[]; */
    const [movies, setMovies] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search= query.get("search");

    useEffect(()=>{
        setIsLoading(true)
        const searchUrl= search ? "/search/movie?query=" + search : "/discover/movie"
       get(searchUrl).then((data)=>{setMovies(data.results);
        setIsLoading(false)
        });
    }, [search]);//se le pasa un arreglo vacio para que solo se ejecute una sola vez 
    
    if(isLoading){
        return <Spinner/>;
    }
    
    return(
     <ul className={styles.moviesGrid}>
        {movies.map((movie) => 
            <MovieCard key={movie.id} movie={movie}/>
        )}
     </ul>
    );
}