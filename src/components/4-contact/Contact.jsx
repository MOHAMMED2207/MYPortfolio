/* eslint-disable jsx-a11y/anchor-is-valid */
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { useState, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqayoege");
  const [formType, setFormType] = useState("");
  const [message, setMessage] = useState("");
  const [extraFields, setExtraFields] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // الرسائل الجاهزة
  const templates = {
    general: "Hello, I’d like to ask a general question about your services.",
    project:
      "Hi, I’m interested in building a new website. Here are some details about my project:",
    issue: "Hey, I’m facing a technical issue with my website. The problem is:",
    quote:
      "Hello, I’d like to request a price quote for a web development service. My requirements are:",
  };

  // عند تغيير نوع الفورم
  const handleTypeChange = (e) => {
    const type = e.target.value;
    setFormType(type);
    setMessage(templates[type] || "");
    setExtraFields({});
  };

  // إعادة ضبط الفورم بعد الإرسال
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setFormType("");
        setMessage("");
        setExtraFields({});
        state.succeeded = false; // إعادة ضبط الحالة يدويًا
      }, 3000); // 3 ثواني
      return () => clearTimeout(timer);
    }
  }, [state]);

  // عرض الأسئلة الديناميكية
  const renderExtraQuestions = () => {
    switch (formType) {
      case "project":
        return (
          <>
            <div className="flex" style={{ marginTop: "20px" }}>
              <label htmlFor="siteType">Website Type:</label>
              <select
                id="siteType"
                name="siteType"
                className="stylev1"
                onChange={(e) =>
                  setExtraFields({ ...extraFields, siteType: e.target.value })
                }
              >
                <option className="txtv1" value="">
                  Select type
                </option>
                <option className="txtv1" value="business">
                  Business Website
                </option>
                <option className="txtv1" value="ecommerce">
                  E-commerce Store
                </option>
                <option className="txtv1" value="portfolio">
                  Portfolio
                </option>
                <option className="txtv1" value="blog">
                  Blog
                </option>
              </select>
            </div>

            <div className="flex" style={{ marginTop: "20px" }}>
              <label htmlFor="budget">Estimated Budget ($):</label>
              <input
                id="budget"
                name="budget"
                className="stylev1"
                type="number"
                placeholder="e.g. 500"
                max="10000"
                onChange={(e) =>
                  setExtraFields({ ...extraFields, budget: e.target.value })
                }
              />
            </div>
          </>
        );

      case "issue":
        return (
          <div className="flex" style={{ marginTop: "20px" }}>
            <label htmlFor="websiteUrl">Website URL:</label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              className="stylev1"
              type="url"
              placeholder="https://your-website.com"
              onChange={(e) =>
                setExtraFields({ ...extraFields, websiteUrl: e.target.value })
              }
            />
          </div>
        );

      case "quote":
        return (
          <div className="flex" style={{ marginTop: "20px" }}>
            <label htmlFor="deadline">Project Deadline:</label>
            <input
              id="deadline"
              name="deadline"
              className="stylev1"
              type="date"
              onChange={(e) =>
                setExtraFields({ ...extraFields, deadline: e.target.value })
              }
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span> Contact Us
      </h1>
      <p className="sub-title" id="ContactUs">
        Contact us for more information or to discuss your next project.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              placeholder="Please Enter Your Email@gmail.com"
              id="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* نوع الرسالة */}
          <div className="flex " style={{ marginTop: "20px" }}>
            <label htmlFor="formType">Message Type:</label>
            <select
              className="stylev1"
              id="formType"
              name="formType"
              value={formType}
              onChange={handleTypeChange}
              required
            >
              <option className="txtv1" value="">
                Select Type
              </option>
              <option className="txtv1" value="general">
                General Question
              </option>
              <option className="txtv1" value="project">
                New Website Project
              </option>
              <option className="txtv1" value="issue">
                Technical Issue
              </option>
              <option className="txtv1" value="quote">
                Request a Quote
              </option>
            </select>
          </div>

          {/* الأسئلة الإضافية */}
          {renderExtraQuestions()}

          {/* الرسالة */}
          <div
            className="flex"
            style={{ marginTop: "24px", alignItems: "baseline" }}
          >
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              placeholder="Write your message..."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* إرسال */}
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {/* نجاح */}
          {showSuccess && (
            <p
              className="flex success-message"
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                transition: "opacity 0.3s ease",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
