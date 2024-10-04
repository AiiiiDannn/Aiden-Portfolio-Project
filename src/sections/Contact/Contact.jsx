import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="text" id="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea type="text" id="message" placeholder="Message" required />
        </div>

        <input className="btn hover" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
