const items = (props) => {
    return (
        <>
            <div className="item" style={{display: "flex", justifyContent: "space-between"}}>
                        <img src={props.items.img} alt="item" style={{width: "100px", height: "100px"}}/>
                        <div>
                             <h3>{props.items.title}</h3>
                             <p>{props.items.afterdiscount}</p>
                        </div>
            </div>
        </>
    )
}


export default items