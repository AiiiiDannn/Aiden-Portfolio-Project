import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import mailDark from "../../assets/mail-dark.png";
import mailLight from "../../assets/mail-black.png";
import CV from "../../assets/HAI_NANGE.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const mailIcon = theme === "light" ? mailLight : mailDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="Profile picture of Aiden Hai"
        />
        <img
          className={styles.colorModeIcon}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Aiden Hai</h1>

        <h2>Entry-Level Web Developer</h2>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/aiiiidannn" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/aiden-hai-0b01282a9/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:xhai2@uci.edu" target="_blank">
            <img src={mailIcon} alt="Mailing icon" />
          </a>
        </span>

        <p className={styles.description}>
          I am an enthusiastic college student who is currently pursuing a B.S.
          of Informatics and B.S. of Cognitive Science at the University of
          California, Irvine. <br /> <br />I have a strong background in
          multiple programming languages and am interested in web development. I
          am currently looking for a internship in the field.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
