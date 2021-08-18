import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './components/Quiz/Quiz.module.scss';
import Quiz from './components/Quiz';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <>
      <Router>
        <div className={styles.headerContainer}>
          <div className={styles.pagesContainer}>
            <ul>
              <li>
                <Link className={styles.pages} to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.pages} to={'/quiz'}>
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
          <h2 className={styles.headerText}>
            How well do you know the TV series "Friends"?
          </h2>
        </div>
        <Switch>
          <Route exact path={'/'}>
            <QuizPage />
          </Route>
          <Route parh={'/quiz'}>
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
