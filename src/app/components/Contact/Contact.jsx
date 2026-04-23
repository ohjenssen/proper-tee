 'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    emne: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.emne) {
      alert('Udfyld venligst alle felter!');
      return;
    }
    alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Emne</label>
          <textarea
            name="emne"
            className={styles.textarea}
            onChange={handleChange}
          />
        </div>

        <p className={styles.hint}>
          Venligst skriv dit spørgsmål ind her så vender vi tilbage så hurtigt som muligt.
        </p>

        <button className={styles.submitBtn} onClick={handleSubmit}>
          Send ind
        </button>
      </div>
    </div>
  );
}