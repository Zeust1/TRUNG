const items = (props) => {
    return (
        <>
            <div className="item" style={{display: "flex", justifyContent: "space-between"}}>
                
                        <img src={props.img} alt="item" style={{width: "100px", height: "100px"}}/>
                        <div>
                             <h3>{props.title}</h3>
                             <p style={{display: "flex", justifyContent: "flex-end"}}>{props.afterdiscount}</p>
                        </div>
            </div>
        </>
    )
}


export default items