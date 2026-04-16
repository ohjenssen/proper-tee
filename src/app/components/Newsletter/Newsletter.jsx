'use client'
import styles from './Newsletter.module.css'
import { useState } from 'react'

export default function Newsletter(){
    const [showModal, setShowModal] = useState(false);

    function handleClick(){
        setShowModal(!showModal)
    }

    return (
        <section className={styles.container}>
            <div className={styles.newsletter}>
                <h2 className={styles.title}>Hold dig informeret med eksklusive opdateringer om kollektionens lancering, personlig kommunikation og de seneste nyheder</h2>
                <button className={styles.modalBtn} onClick={handleClick} >Tilmeld</button>
            </div>

            <div // overlay
                className={`${styles.overlay} ${showModal ? styles.active : ''}`} 
                onClick={handleClick}
            />
            
            <div className={`${styles.modal} ${showModal ? styles.active : ''}`}>
                <div className={styles.inputContainer}>
                    <label htmlFor='email'>Din email</label>
                    <input id='email' type='text' className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Dit navn</label>
                    <input id='name' type='text' className={styles.input}/>
                </div>

                <button type='submit' className={styles.signUpBtn}>Send ind</button>
            </div>
        </section>
    )
}