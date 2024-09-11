import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { linkedin, twitter, instagram, github_logo } from "../assets"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_7stj0xb',
      'template_njmlvho',
      {
        from_name: form.name,
        to_name: "Abilaash",
        from_email: form.email,
        to_email: "abilaash2001@gmail.com",
        message: form.message,
      },
      'z-ruZqAzrI67szUDt'
    )
      .then(
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Ahh, something went wrong. Please try again.")
        }
      )
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="mt-2 text-white font-medium flex items-center gap-2">
            <p className="mr-2">Socials:</p>
            <a
              href="https://github.com/Abilaash01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github_logo}
                className="w-8 h-8"
                alt="github logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abilaash01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                className="w-8 h-8"
                alt="linkedin logo"
              />
            </a>
            <a
              href="https://x.com/flowspec_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                className="w-8 h-8"
                alt="twitter logo"
              />
            </a>
            <a
              href="https://www.instagram.com/abilaash_01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                className="w-8 h-8"
                alt="instagram logo"
              />
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")