'use client'
import styles from './Faq.module.css'
import { useState } from 'react'

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.questionContainer} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.question}>{question}</h2>
        <button className={styles.openFaq}>
          {isOpen ? '−' : '+'}
        </button>
      </div>
      
      <div className={styles.answerWrapper}>
        <div className={styles.answerContent}>
          <p className={styles.faqAnswer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.title}>FAQ</h2>
      
      <FaqItem 
        question="Hvordan får jeg mine t-shirts?" 
        answer="Vi sender dine t-shirts direkte til din dør eller nærmeste pakkeshop med lynhurtig levering. Så snart din pakke forlader vores lager, modtager du et trackingnummer via e-mail, så du kan følge din levering hele vejen hjem til dig." 
      />

      <FaqItem 
        question="Hvad hvis de er i forkert størrelse?" 
        answer="Bare rolig – hvis pasformen ikke sidder lige i skabet, tilbyder vi 30 dages fuld returret. Du kan nemt bytte til en anden størrelse eller få pengene tilbage. Du skal blot benytte den vedlagte returlabel." 
      />
    </section>
  )
}