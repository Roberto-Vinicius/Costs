import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list_social}>
                <li>
                    <a href="https://github.com/Roberto-Vinicius" target="_blank">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/r_suiciniv/" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robertoviniciusd" target="_blank">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p><strong>Desenvolvido por Roberto Vinicius</strong></p>
        </footer>
    )
}

export default Footer;