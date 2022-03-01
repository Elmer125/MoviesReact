const API="https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNkNzFlM2ZmOGI5ZTYyYjdhMDMzZWU1YWViYjc2YSIsInN1YiI6IjYxMGFiZTE1OGQyMmZjMDAzMDEzOWVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UDtlO0RM4PcSSs8NXx1xBDbwSxhfhiN6Efm1n3g5NaM ",
            "Content-type": "application/json;charset=utf-8",
        },
    } ).then((result) => result.json())
} 