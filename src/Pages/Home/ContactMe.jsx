export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="contact--container">
        <h2>Contacts</h2>
        <div className="contact--info">
          <div className="contact--item">
            <i className="fa fa-phone icon"></i> {/* Icoana telefonului */}
            <p>Please call me at my phone number:</p>
            <a href="tel:+37368036440" className="contact--link">
              +37368036440
            </a>
          </div>

          <div className="contact--item">
            <i className="fa fa-envelope icon"></i> {/* Icoana email */}
            <p>Send me an e-mail:</p>
            <a href="mailto:moldova42345@gmail.com" className="contact--link">
              moldova42345@gmail.com
            </a>
          </div>

          <div className="contact--item">
            <i className="fa-brands fa-telegram icon"></i> {/* Icoana Telegram */}
            <p>Contact on Telegram:</p>
            <a href="https://web.telegram.org/a/#6256095218" className="contact--link">
              My Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}