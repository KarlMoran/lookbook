// rafce 
import React from "react";
import NoResults from "../assets/close.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`Sorry, the page doesn't exist`}
      />
    </div>
  );
};

export default NotFound;