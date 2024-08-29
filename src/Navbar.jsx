import Item from './itemincart.jsx'

const navbar = (props) => {
    return(
        <>
            <div className="navbar">
                <h1>My project</h1>
                <div className="count-cart">
                    <p className="count">{localStorage.length ? JSON.parse(localStorage.getItem("items")).length : '0'}</p>
                    <div className="shopping-cart">
                        <i className="fa-solid fa-cart-plus fa-2xl"></i>
                    </div>
                    <div className="count-cart-details">
                        <div className="content">
                            <Item
                                items = {localStorage.length ? JSON.parse(localStorage.getItem("items"))[0]: 'No data' }
                            />
                                                        <Item
                                items = {localStorage.length ? JSON.parse(localStorage.getItem("items"))[1]: 'No data' }
                            />                            <Item
                            items = {localStorage.length ? JSON.parse(localStorage.getItem("items"))[2]: 'No data' }
                             />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar