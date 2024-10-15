import htmlImg from "../assets/images/skills/html.png";
import cssImg from "../assets/images/skills/css.png";
import javascriptImg from "../assets/images/skills/javascript.png";
import javaImg from "../assets/images/skills/java.png";
import pythonImg from "../assets/images/skills/python.png";
import mySqlImg from "../assets/images/skills/mysql.png";
import styles from "../assets/styles/Skills.module.css";
function SkillsSection() {
  return (
    <>
      <div className="container mt-5" id="skills">
        <h1 className="text-center mb-5">Skills</h1>
        <div className="container row gap-5 justify-content-center">
          <img src={htmlImg} alt="HTML 5 Logo" className={styles.card} />
          <img src={cssImg} alt="CSS Logo" className={styles.card} />
          <img
            src={javascriptImg}
            alt="Javascript Logo"
            className={styles.card}
          />
          <img src={javaImg} alt="java Logo" className={styles.card} />
          <img src={pythonImg} alt="python Logo" className={styles.card} />
          <img src={mySqlImg} alt="mysql Logo" className={styles.card} />
        </div>
      </div>
    </>
  );
}
export default SkillsSection;
