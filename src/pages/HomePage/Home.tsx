import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SweetList from "../../features/sweets/components/SweetList/SweetList"

import { data } from "../../features/sweets/services/sweetApi";
import styles from "./Home.module.scss";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showTop5, setShowTop5] = useState(true);

    const isSearching = searchTerm.trim() !== '';

    const filteredData = data.filter(sweet =>
        sweet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const top5Data = [...data]
        .sort((a, b) => a.price - b.price)
        .slice(0, 5);

    // this part decide what to show, top 5, all sweets or based on search
    const sweetsToShow = isSearching
        ? filteredData
        : showTop5
            ? top5Data
            : data;

    return <>
        <NavBar onSearchChange={setSearchTerm} />

        <div>
            <button
                className={styles.toggle_button}
                onClick={() => setShowTop5(prev => !prev)}>
                {showTop5 ? 'Show All' : 'Show Top 5 Cheapest'}
            </button>
        </div>
        <SweetList sweets={sweetsToShow} />
    </>
};

export default Home;