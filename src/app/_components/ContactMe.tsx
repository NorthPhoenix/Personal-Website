"use client"

import ErrorPopup from "~/app/_components/ErrorPopup"
import { useFormik } from "formik"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import * as Yup from "yup"
import { twMerge } from "tailwind-merge"

export declare type ContactMeData = {
  name: string
  email: string
  message: string
}

const ContactMe = ({ className = "" }: { className?: string }) => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  return (
    <section
      className={twMerge("relative font-helvetica text-nier-200", className)}
      id="contact"
    >
      {submitted ?
        <div className="container mx-auto px-5 py-24 pt-36 md:pt-44">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 font-exodus-striped text-2xl font-medium tracking-wide text-nier-200 sm:text-4xl">
              Thank you for contacting me!
            </h1>
            <p className="mx-auto text-base font-semibold leading-relaxed tracking-wide opacity-80 lg:w-2/3">
              I will get back to you as soon as possible.
            </p>
            <button
              className="mx-auto mt-10 flex rounded border-0 bg-nier-700 px-8 py-2 text-lg text-nier-200 hover:bg-nier-300 hover:text-black focus:outline-none"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        </div>
      : <div className="container mx-auto px-5 py-24 pt-28 md:pt-36">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 font-exodus-striped text-2xl font-medium text-nier-200 sm:text-4xl ">
              Contact Me
            </h1>
            <p className="mx-auto text-base font-semibold leading-relaxed tracking-wide opacity-80 lg:w-2/3">
              Let's build your users' next experiences together.
            </p>
          </div>
          <Form setSubmitted={setSubmitted} setError={setError} />
        </div>
      }
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:right-[unset] sm:flex sm:w-80 sm:flex-col sm:gap-2">
        <AnimatePresence>
          {error && (
            <ErrorPopup
              header="Error sending message"
              message="Please try again later."
              close={() => {
                setError(false)
              }}
              closeAfter={5000}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

type FormProps = {
  setSubmitted: (submitted: boolean) => void
  setError: (error: boolean) => void
}

const Form = ({ setSubmitted, setError }: FormProps) => {
  const [sending, setSending] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(30, "Name must be 30 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setSending(true)
      // Send email
      const body: ContactMeData = {
        name: values.name,
        email: values.email,
        message: values.message,
      }
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((_) => {
          resetForm()
          setSubmitted(true)
          setSending(false)
          // console.log(res)
        })
        .catch((_) => {
          setSending(false)
          setError(true)
          // console.log(err)
        })
    },
  })
  return (
    <form
      onReset={formik.handleReset}
      onSubmit={formik.handleSubmit}
      className="-m-2 mx-auto flex flex-wrap md:w-2/3 lg:w-1/2"
    >
      <div className="w-1/2 p-2">
        <label
          htmlFor="name"
          className={`text-sm leading-7 ${
            formik.touched.name && formik.errors.name ?
              "text-amber-300"
            : "text-nier-300"
          } `}
        >
          {formik.touched.name && formik.errors.name ?
            formik.errors.name
          : "Name"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          className="w-full rounded border border-nier-400 bg-black bg-opacity-50 px-3 py-1 text-base leading-8 text-nier-200 outline-none transition-colors duration-200 ease-in-out selection:bg-nier-300 selection:text-black focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200"
        ></input>
      </div>
      <div className="w-1/2 p-2">
        <label
          htmlFor="email"
          className={`text-sm leading-7 ${
            formik.touched.email && formik.errors.email ?
              "text-amber-300"
            : "text-nier-300"
          } `}
        >
          {formik.touched.email && formik.errors.email ?
            formik.errors.email
          : "Email"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className="w-full rounded border border-nier-400 bg-black bg-opacity-50 px-3 py-1 text-base leading-8 text-nier-200 outline-none transition-colors duration-200 ease-in-out selection:bg-nier-300 selection:text-black focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200"
        ></input>
      </div>
      <div className="w-full p-2">
        <label
          htmlFor="message"
          className={`text-sm leading-7 ${
            formik.touched.message && formik.errors.message ?
              "text-amber-300"
            : "text-nier-300"
          } `}
        >
          {formik.touched.message && formik.errors.message ?
            formik.errors.message
          : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          className="h-32 w-full resize-none rounded border border-nier-400 bg-black bg-opacity-50 px-3 py-1 text-base leading-6 text-nier-200 outline-none transition-colors duration-200 ease-in-out selection:bg-nier-300 selection:text-black focus:border-nier-200 focus:bg-neutral-900 focus:ring-2 focus:ring-neutral-200"
        ></textarea>
      </div>
      <div className="w-full p-2">
        <button
          disabled={sending}
          className="mx-auto flex rounded border-0 bg-nier-700 px-8 py-2 text-lg text-nier-200 hover:bg-nier-300 hover:text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-nier-700 disabled:hover:text-nier-200"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactMe
