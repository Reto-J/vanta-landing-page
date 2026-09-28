import { useState } from "react";
import { faq } from "../data/faq";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__header">
        <span className="section-label">
          GOT QUESTIONS?
        </span>

        <h2>
          WE'VE GOT
          <br />
          <span>ANSWERS.</span>
        </h2>
      </div>

      <div className="faq__list">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-item ${
                isOpen ? "faq-item--open" : ""
              }`}
              key={item.question}
            >
              <button
                className="faq-item__question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>

                <span className="faq-item__icon">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;