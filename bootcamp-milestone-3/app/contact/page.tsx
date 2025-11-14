import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <div className={style.gradientContainer}>
        <h1 className={style.pageTitle}>Contact</h1>
      </div>

      <div className={style.contact}>
        <div className={style.schoolContainer}>
          <form id="contact-form">
            <label className={style.contactText} htmlFor="name">Name</label>
            <br /><br />
            <input
              className={style.input}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <br /><br />

            <label className={style.contactText} htmlFor="email">Email</label>
            <br /><br />
            <input
              className={style.input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <br /><br />

            <label className={style.contactText} htmlFor="message">Message</label>
            <br /><br />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className={style.input}
            ></textarea>
            <br /><br />

            <input
              className={style.submit}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
