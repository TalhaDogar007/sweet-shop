import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SweetList from "../features/sweets/components/SweetList/SweetList"

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    return <>
        <NavBar onSearchChange={setSearchTerm} />
        <SweetList searchTerm={searchTerm} />
    </>
};

export default Home;