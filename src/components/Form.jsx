import { child, get, push, ref, set } from "firebase/database";
import React, { useState, useEffect } from "react";
import { db } from "../firebase_config";
import Modal from "./Modal";
import TableData from "./TableData";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [faqData, setFaqData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !question) {
      setShowValidationMessage(true); // Show validation message
      return; // Prevent form submission
    }

    try {
      const faqRef = push(ref(db, "faq/"));
      await set(faqRef, {
        name: name,
        email: email,
        question: question,
      });
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1500);

      getData();
    } catch (error) {
      console.error(error);
    }

    setName("");
    setEmail("");
    setQuestion("");
    setShowValidationMessage(false); // Hide validation message
  }

  async function getData() {
    try {
      const faqRef = ref(db, "faq/");
      const snapshot = await get(faqRef);
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setFaqData(snapshot.val());
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label for="name">Name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="person-name"
          />
        </div>

        <div className="form-row">
          <label for="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="person-email"
          />
        </div>

        <div className="form-row">
          <label for="question">Question </label>
          <textarea
            type="text"
            name="question"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="person-question"
          />
        </div>

        <button type="submit" className="btn">
          Send
        </button>

        {showValidationMessage && (
          <p style={{ color: "red", fontSize: "20px" }}>
            ❌ Prasome ivesti visus laukus !
          </p>
        )}
      </form>

      <TableData faqData={faqData} />

      {showModal && <Modal />}
    </div>
  );
};

export default Form;
