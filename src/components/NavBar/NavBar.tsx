import styles from './NavBar.module.scss'

type NavBarProps = {
    onSearchChange: (term: string) => void
}

const NavBar = ({ onSearchChange }: NavBarProps) => {

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value)
    };

    return (
        <div className={styles.nav_bar_container}>
            <div className={styles.logo_search_box}>
                <div className={styles.logo}>
                    <img
                        className={styles.logo_img}
                        src="https://img.freepik.com/premium-vector/sweet-shop-logo-vector_641950-75.jpg"
                        alt=""
                    />
                </div>
                <input
                    type="text"
                    className={styles.search_input}
                    onChange={searchChange}
                />
            </div>
        </div>
    )
};

export default NavBar;