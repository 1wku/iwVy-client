import styles from './index.module.scss'

export default function Body({content, img}) {
    return (
        <div className={styles.container}>
            <p className={styles.content}>{content}</p>
            <img src={img} alt="" className={styles.img} />
        </div>
    )
}
