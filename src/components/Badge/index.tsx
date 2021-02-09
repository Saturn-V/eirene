import styles from './index.module.scss'

interface Props {
    children: any
}
export default function Badge(props: Props) {
    return (<div className={styles.Badge}>{props.children}</div>)
}