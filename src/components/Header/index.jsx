import styles from './Heade.module.scss'
import Logo from './logo.png'

export default function Header() {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt='Logo'/>
    </div>
  )
}
