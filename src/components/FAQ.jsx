import { useState } from 'react';
import '../styles/components/FAQ.css'
import { FaAngleDown } from "react-icons/fa6";
import { faqs } from "../assets/assets.js"

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <section className="faq-section container section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {
          faqs.map((faq, index) => (
            <div className="faq-cont" key={index}>
              <button className={`accordion ${activeIndex === index ? "active" : ""}`} onClick={() => toggleIndex(index)}>
                <span className='faq-question'>{faq.question}</span>
                <FaAngleDown className={`arrow-icon ${activeIndex === index ? "rotate" : ""}`} />
              </button>
              <div className="panel">
                <div>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default FAQ;