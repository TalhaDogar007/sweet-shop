import SweetCard from "../SweetCard/SweetCard"
import styles from './SweetList.module.scss';

type Sweet = {
    name: string;
    price: number;
    url: string;
};

type SweetListProps = {
    sweets: Sweet[];
};

const SweetList = ({ sweets }: SweetListProps) => {


    return <>
        <div>
            <h1 className={styles.title}>Town's Best Sweet Shop 🍬</h1>
            <div className={styles.sweet_list_container} data-testid="sweet_list_container">
                {sweets.map(sweet =>
                    (<SweetCard sweet={sweet} />)
                )}
            </div>
        </div>
    </>
};

export default SweetList;