import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/Learn.module.css';
import lookbook from "../assets/lookbook.png"

function About() {
  return (
    <Container className={styles.Content}>
      <img src={lookbook} alt="lookbook" height="70" />
      <h2>
        <strong> Effective ways to learn photography </strong>
      </h2>
      <hr />
      <h3>01. Get familiar with your camera</h3>
      <img width="500" height="300" alt="lookbook" src="https://user-images.githubusercontent.com/92300013/196953816-1f74948a-4973-4952-9dda-1e420be09071.jpg"></img>
      <p>
      I know what you’re thinking – no way am I reading the camera manual. 
      But, it really is a great tool when trying to master your chosen model. 
      It’s not to say you have to read 300 pages cover to cover, 
      of course you can skim areas you already know about or leave particular sections for later, 
      but the humble camera manual holds more importance than you think. 
      Taking the time to research your kit is important for a couple reasons:
      You need to know about every aspect of your camera.
      No one knows the camera better than the people that made it.
      </p>
      <hr />
      <h3>02. Watch online tutorials</h3>
      <p>
      With the inception of the internet making most people think of manuals as artifacts, 
      you can also go to the net to learn. Especially if you find reading difficult/uninspiring, 
      there will be countless videos and blogs on how to use the model you’ve picked. 
      This is great when looking for reviews from people who have actually used the rig for a while. 
      YouTube in particular is filled with reviews, tips and warnings for photographers, 
      check out popular channels like Mango Street or Peter McKinnon for easy to follow videos. 
      And remember to put what you’ve watched into action!
      </p>
      <hr />
      <h3>03. Hit the books (and online portfolios)</h3>
      <p>
      Indulging in a good book or online portfolio will help you absorb details in a creative, 
      colorful and interesting ways. 
      They will inspire you and help you figure out niches that you want to play around with. 
      Whilst you’re learning portfolios can also be a source of great frustration, 
      as you look at what others can achieve and struggle to mirror it. 
      Don’t let it get you down though, just like every good art form, it takes time to master.
      </p>
      <hr />
      <h3>04. Practice, practice and practice!</h3>
      <p>
      Nothing is going to help you more than experience—so bring your camera everywhere and shoot anything remotely interesting! 
      You can take fifty photography courses, 
      read every book about lighting and exposure and talk about it all day – 
      but taking photos is what is going to allow you to unlock your style and natural skill. 
      As hundreds of photos build up on your memory card, 
      you’ll see what needs improvement and where you excel. 
      It’s good to keep some early evidence of your trials and errors so you can look back and see how far you’ve come!
      </p>
      
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