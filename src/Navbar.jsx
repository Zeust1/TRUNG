import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./app/pushdata.js";
import Item from "./itemincart.jsx";

const navbar = (props) => {
  const data = useSelector(selectCount);

  return (
    <>
      <div className="navbar">
        <h1>My project</h1>
        <div className="count-cart">
          <p className="count">{data.length ? data.length : 0}</p>
          <div className="shopping-cart">
            <i className="fa-solid fa-cart-plus fa-2xl"></i>
          </div>
          <div className="count-cart-details">
            <div className="content">
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <Item
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      afterdiscount={item.afterdiscount}
                    />
                  );
                })}
              {console.log(data)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
