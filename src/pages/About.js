import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/About.module.css';
import lookbook from "../assets/lookbook.png"

function About() {
  return (
    <Container className={styles.Content}>
      <img src={lookbook} alt="lookbook" height="70" />
      <h2>
        <strong> About </strong>
      </h2>
      <hr />
      <p>
        Here at LookBook, we pride ourselver on catering to the Photography
        community.
      </p>
      <p>
        We strive to provide you with a Online Portfolio designed just for Photographer.
        To share what you have captured and learn from your years of experince.
      </p>
      <p>
        In an effort to bring the community together, we also invite our users
        to interact with the sites social aspect. Here, you can create a post
        and tell us all exactly what you have captured. 
        <br></br>
        <em>Shared with use what you see through your lens.</em>
      </p>
      <p>
        Users can follow each other, like each others posts, and leave a
        friendly comment should they wish. Inengaging with one another and feeling 
        apart of a community.
      </p>
      <p>So get stuck in and have some fun!</p>
      <br />
      <h2>
        <strong>Social Media:</strong>
      </h2>
      <hr />
      <Row className={styles.SocialIconsAlign}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Facebook page (opens in a new tab)"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Twitter page (opens in a new tab)"
        >
          <i className="fa-brands fa-twitter" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
        >
          <i className="fa-brands fa-instagram" />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our YouTube page (opens in a new tab)"
        >
          <i className="fa-brands fa-youtube" />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Github page (opens in a new tab)"
        >
          <i className="fa-brands fa-github" />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Linkedin page (opens in a new tab)"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </Row>
      <br />
      <p id={styles.Disclaimer}>
        Dublin, Ireland
        <br />
        Project created for educational purposes only.
      </p>
    </Container>
  );
}

export default About;