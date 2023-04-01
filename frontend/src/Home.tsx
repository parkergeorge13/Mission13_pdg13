import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';

//Home page of the project. Contains title and description of the site.
function TopBanner() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.content}>
        <h1 className={styles.h1}>The Joel Hilton Film Collection</h1>
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" />
        <h3 className={styles.h3}>
          This site contains a list of Joel Hilton's movie collection.
        </h3>
      </div>
    </>
  );
}

export default TopBanner;
