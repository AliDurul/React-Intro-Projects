import logo from "../assets/nba-logo.png"

const Header = ({ setQuery }) => {

    const handleInput = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="header container mt-4 text-center">
            <img className="fullTurn" src={logo} alt="" />
            <h1 className="my-3 text-bold text-white">NBA Legends</h1>
            <input onChange={handleInput} className="form-control mb-4 w-50 m-auto" type="text" placeholder="Search Player.." />
        </div>
    )
}

export default Header