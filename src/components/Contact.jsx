import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_u9usrvk
// service_ggzqefe
// NBiRyZckHfolab85A

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_u9usrvk
    // service_ggzqefe
    // NBiRyZckHfolab85A
    emailjs
      .send(
        "service_ggzqefe",
        "template_u9usrvk",
        {
          from_name: form.name,
          to_name: "Supereka",
          from_email: form.email,
          to_email: "admin@su", // Change the email that the email goes to here!
          message: form.message,
        },
        "NBiRyZckHfolab85A"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you, as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="xl: xl:flex-row flex-column-reverse flex gap-5 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-grey p-8 rounded-2xl"
        >
          <p className="font-serif text-tertiary text-semibold text-[20px]">
            Get in touch!
          </p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            {/* Name */}
            <label className="flex flex-col">
              {/* <span className="text-primary font-medium mb-4">Your Name</span> */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name?"
                className="bg-tertiary2 py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col">
              {/* <span className="text-primary font-medium mb-4">Your Email</span> */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email?"
                className="bg-tertiary2 py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* Message */}
            <label className="flex flex-col">
              {/* <span className="text-primary font-medium mb-4">
                Your Message
              </span> */}
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What can we help you with?"
                className="bg-tertiary2 py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-primary py-3 px-8 outline-none w-fit text-white-100 font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending ..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-350px"
        >
          {/* <EarthCanvas /> */}
          {/* removed the 3D model of the structural, need to look for gltf of mechanical stuff */}
        </motion.div>
      </div>
      <div className="xl: xl:flex-row flex-column-reverse flex gap-5 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-grey p-8 rounded-2xl"
        ></motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-350px"
        >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="contact-details">
            <div className={styles.sectionSubText}>
              <div class="flex justify-between items-center mb-4">
                <div class="mr-2">🏢</div>
                <div class="text-right">
                  NATIONAL DESIGN CENTRE, <br></br>111 MIDDLE ROAD, <br></br>
                  #03-01, Postal 188969
                </div>
              </div>

              <div class="flex justify-between items-center mb-4">
                <div class="mr-2">✉️</div>
                <div class="text-right">admin@supereka-sg.com</div>
              </div>

              <div class="flex justify-between items-center mb-4">
                <div class="mr-2">📱</div>
                <div class="text-right">+65 9667 4754</div>
              </div>
            </div>
          </div>

          {/* <EarthCanvas /> */}
          {/* removed the 3D model of the structural, need to look for gltf of mechanical stuff */}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
