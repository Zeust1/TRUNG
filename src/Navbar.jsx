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
                            img ={JSON.parse(localStorage.getItem("items"))[0].img}
                            title={JSON.parse(localStorage.getItem("items"))[0].title}
                            
                            
                            
                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar