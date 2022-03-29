import styles from './styles.module.css'
export const Button = () => {

    return (
        <div className={styles.frame}>
            <button className={styles.button}>Clique aqui</button>
            <p className={styles.bigLetter}>Reaje mulher</p>
        </div>
        
    );

}