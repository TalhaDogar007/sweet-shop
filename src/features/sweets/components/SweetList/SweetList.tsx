import SweetCard from "../SweetCard/SweetCard"
import { data } from '../../services/sweetApi'
import styles from './SweetList.module.scss';

type SweetListProp = {
    searchTerm: string;
}

const SweetList = ({ searchTerm }: SweetListProp) => {

    const filteredData = data.filter(sweet =>
        sweet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.sweet_list_container}>
            {filteredData.map(sweet =>
                (<SweetCard sweet={sweet} />)
            )}
        </div>


    )
};

export default SweetList;