/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
// 6Lf5XlwqAAAAANDcYuUQbeYT4HiQIt4wK93a36ad

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef(); // Ref for ReCAPTCHA

  const [showPopup, setShowPopup] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for email sending
  const [capVal, setCapVal] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_px97ulp", "template_mu1laim", form.current, {
        publicKey: "Ra8oDyHzsc7RDdF0v",
      })
      .then(() => {
        setLoading(false); // Reset loading state
        setShowPopup("success");
        e.target.reset();
        recaptchaRef.current.reset(); // Reset ReCAPTCHA here

        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to send email", error);
        setLoading(false);
        setShowPopup("error");

        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup("");
        }, 3000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Restons en contact</h2>
      <span className="section__subtitle">Écrivez-moi</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Discutez avec moi</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                syphax.alili03@gmail.com
              </span>

              <a
                href="mailto:syphax.alili03@gmail.com"
                className="contact__button"
                target="_blank"
              >
                Écrivez-moi
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Téléphone</h3>
              <span className="contact__card-data">+33 6 02 80 78 05</span>

              <a
                href="tel:+33602807805"
                className="contact__button"
                target="_blank"
              >
                Applez-moi
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@syphax_al</span>

              <a
                href="https://t.me/syphax_al"
                className="contact__button"
                target="_blank"
              >
                Écrivez-moi
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Décrivez-moi votre projet</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                name="name"
                placeholder="Entrez votre nom"
                disabled={loading} // Disable during loading
                required
              />
              <label className="contact__form-tag">Nom *</label>
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                name="email"
                placeholder="Entrez votre email"
                disabled={loading} // Disable during loading
                required
              />
              <label className="contact__form-tag">Email *</label>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Décrivez votre project..."
                disabled={loading} // Disable during loading
                required
              ></textarea>
              <label className="contact__form-tag">Projet *</label>
            </div>

            <span className="contact__recap-note">
              * Veuillez vérifier le CAPTCHA avant d&apos;envoyer.
            </span>
            <ReCAPTCHA
              ref={recaptchaRef} // Add ref to ReCAPTCHA
              sitekey="6Lf5XlwqAAAAANDcYuUQbeYT4HiQIt4wK93a36ad"
              onChange={(val) => setCapVal(val)}
              className="contact__recap-check"
            />

            <button
              className={`button button--flex ${
                loading ? "button--loading" : ""
              }`} // Add class when loading
              type="submit"
              disabled={!capVal || loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}{" "}
              {/* Show "Sending..." while loading */}
              {!loading && (
                <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Popup Notification */}
      {showPopup === "success" && (
        <div className="popup success-popup">
          <i class="uil uil-check-circle"></i>Message envoyé avec succès.
        </div>
      )}

      {showPopup === "error" && (
        <div className="popup error-popup">
          <i class="bx bx-error-circle"></i>
          <span>
            Échec de l&apos;envoi du message.
            <br />
            Veuillez réessayer.
          </span>
        </div>
      )}
    </section>
  );
};

export default Contact;
