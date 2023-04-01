import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';

//Shows all of the podcasts.
function Podcasts() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.content}>
        <h1 className={styles.h1}>Podcasts</h1>
        <br />
        <ul>
          <li>
            <a href="https://baconsale.com">Bacon Sale Podcast</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Podcasts;
