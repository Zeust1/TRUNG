const items = (props) => {
    return (
        <>
            <div className="item">
                <img src={props.img} alt="img" style={{width: '40px', height: '40px'}}/>
                <h4>{props.title}</h4>          
            </div>
        </>
    )
}


export default items