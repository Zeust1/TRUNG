import { useSelector, useDispatch } from 'react-redux'
import { pushdata , selectCount} from "./app/pushdata";


const Card = (props) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className="product-card">
        <div className="img-discout">
          <div className="discountpercent">
            <p>{props.discount}</p>
          </div>
          <div className="img-product">
            <img src={props.img} alt="this watch image" />
          </div>
        </div>
        <h3>{props.title}</h3>
        <div className="rating">
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="price">
          <h3 className="pricebefore">{props.beforediscount}</h3>
          <h3>{props.afterdiscount}</h3>
        </div>
        <button className="btn-addcard"
          onClick={() => 
            {
              props.Detail(props)
              dispatch(pushdata(props))
            }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          Add to card
        </button>
      </div>
    </>
  );
};

export default  Card ;
