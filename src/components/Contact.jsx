const Contact = () => (
  <section id="contact" className="contact animate-on-scroll" aria-labelledby="contact-title">
    <h2 id="contact-title">Contact Me</h2>
    <form>
      <input type="text" placeholder="Name" aria-label="Your name" required />
      <input type="email" placeholder="Email" aria-label="Your email" required />
      <textarea placeholder="Message" rows="4" aria-label="Your message" required></textarea>
      <button type="submit" aria-label="Send message">Send Message</button>
    </form>
  </section>
);

export default Contact;