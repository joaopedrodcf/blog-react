import React from 'react';
import Radium from 'radium';
import styles from './Footer.style';

const Footer = () => (
  <footer style={styles.footer}>
    <div className="footer-links">
      <a href="https://github.com/joaopedrodcf">
        <i className="fab fa-github fa-2x" />
      </a>
      <a href="https://www.linkedin.com/in/joaoferr93/">
        <i className="fab fa-linkedin fa-2x" />
      </a>
    </div>
    <div>© Copyright João Ferreira 2018</div>
  </footer>
);

export default Radium(Footer);
