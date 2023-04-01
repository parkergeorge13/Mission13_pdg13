import React from 'react';
import data from './MovieData.json';
import styles from './App.module.css';
import Navbar from './components/Navbar';

const mds = data.MovieData;

//Shows all of the movies.
function MovieList() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className={styles.h1}>Joel Hilton's Movie Collection</h1>
      </div>

      <div>
        <table className="table table-bordered table-striped">
          <thead className="font-weight-bold">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
