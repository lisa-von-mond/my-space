import styles from '../styles/Home.module.css'
import pstyles from '../styles/Project.module.css'
import Link from 'next/link'

export function SubPageHeader(){

return(

    <header className={styles.header}>
      <div className={styles.lisa_wrapper}>LISA LU</div>
      <div className={pstyles.back_button_wrapper}>
        <Link href="/" target="blank" rel="noopener">
      <button className={pstyles.back_button}>
          back
      </button>
      </Link>
        
      </div>
    </header>

)
}