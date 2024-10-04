import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillsList from "../../common/SkillsList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMark = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMark} skill="Python" />
        <SkillsList src={checkMark} skill="C++" />
        <SkillsList src={checkMark} skill="JAVA" />
        <SkillsList src={checkMark} skill="HTML" />
        <SkillsList src={checkMark} skill="CSS" />
        <SkillsList src={checkMark} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMark} skill="React.js" />
        <SkillsList src={checkMark} skill="Angular" />
        <SkillsList src={checkMark} skill="Figma" />
        <SkillsList src={checkMark} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMark} skill="Git" />
        <SkillsList src={checkMark} skill="Github" />
        <SkillsList src={checkMark} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
