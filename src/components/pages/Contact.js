import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact_container}>
            <h1>Meus Contatos</h1>
            <ul>
                <li>
                    <a href="https://github.com/Roberto-Vinicius" target="_blank">
                        <FaGithub />
                    </a>
                    <p>GitHub</p>
                </li>
                <li>
                    <a href="https://www.instagram.com/r_suiciniv/" target="_blank">
                        <FaInstagram />
                    </a>
                        <p>Instagram</p>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robertoviniciusd" target="_blank">
                        <FaLinkedin />
                    </a>
                        <p>Linkedin</p>
                </li>
            </ul>
        </div>
    )
}

export default Contact;