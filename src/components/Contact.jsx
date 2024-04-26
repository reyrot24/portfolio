import Line from "../reusableComponents/Line";
import Button from "../reusableComponents/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleSubmit();
  };

  return (
    <>
      <section className="h-full bg-darkerBrown pt-2 pb-8" id="contact">
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-softerBrown h1 font-playfairSC gold-text">
            Contact me
          </h1>
          <p className="text-white text-xs md:text-2xl pb-4">
            Let's see what I can do to help.
          </p>
        </div>
        <div className="text-black flex justify-center pt-4">
          {!formSubmitted ? (
            <form
              className="flex flex-col gap-y-8 w-[50%]"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col gap-2 ">
                <label className="flex sm:text-normalText text-white">
                  Name
                </label>
                <input
                  placeholder="John Doe"
                  className="p-2 outline-none sm:p-4 text-base rounded-lg ease-in-out duration-300 opacity-95 hover:opacity-100 hover:shadow-lg hover:shadow-white bg-white"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex sm:text-normalText text-white">
                  Email
                </label>
                <input
                  placeholder="johndoe@email.com"
                  className="p-2 outline-none sm:p-4 text-base rounded-lg ease-in-out duration-300 opacity-95 hover:opacity-100 hover:shadow-lg hover:shadow-white bg-white"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex sm:text-normalText text-white">
                  Message
                </label>
                <textarea
                  className="w-full outline-none h-20 p-2 sm:p-3 text-base sm:h-[7rem] rounded-lg ease-in-out duration-300 opacity-95 hover:opacity-100 hover:shadow-lg hover:shadow-white bg-white"
                  placeholder="Your message"
                  name="message"
                />
              </div>
              <div className="flex justify-center items-center px-4">
                <Button type={"4"} title={"Send message"} />
              </div>
            </form>
          ) : (
            <div className="flex justify-center items-center">
              <h2 className="h2 text-white">
                <span className="animate-text">Thank you</span>, I'll get in
                touch.
              </h2>
            </div>
          )}
        </div>
      </section>
      <Line />
    </>
  );
};

export default Contact;
//AGGIUNGERE un reCaptcha dopo aver pubblicato il sito
