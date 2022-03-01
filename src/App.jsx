
import styles from "./components/App.module.css";
import React from "react";
import { MovieDetails } from "./pages/MovieDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";


export function App(){

    return(
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Switch>
                <Route path="/movies/:movieId"><MovieDetails/></Route>
                <Route path="/"><LandingPage/></Route>
                </Switch>
            </main>
        </Router>
    );
}