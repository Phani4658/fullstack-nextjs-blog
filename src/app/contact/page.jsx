import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <main className={styles.homeContainer}>
       <section className={styles.imageContainer}>
        <Image src="/contact.png" alt="contact image" fill />
      </section>
      <section className={styles.formContainer}>
        <form className={styles.contactForm}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea name='' id='' cols="30" rows="10" placeholder='Message' ></textarea>
          <button className={styles.sendButton}>Send</button>
        </form>
      </section>
    </main>
  )
}

export default Contact