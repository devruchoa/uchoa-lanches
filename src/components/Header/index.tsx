import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.header__titulo}>Uchoa <span className={styles.header__highlight}>Lanches</span></h1>
    </header>
  )
}
