import styles from './SweetCard.module.scss'

type SweetProps = {
    sweet: {
        name: string;
        price: number;
        url: string;
    };
};

const SweetCard = ({ sweet }: SweetProps) => {


    return (
        <div className={styles.sweet_card}>
            <img className={styles.sweet_img} src={sweet.url} />
            <div>{sweet.name}</div>
            <div>{sweet.price}</div>
        </div>
    )
}

export default SweetCard;