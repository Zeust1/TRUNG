import { Children } from "react"

const card = () => {
    return (
        <>
                <div className="product-card">
                    <div className="discountpercent">
                        <p>20%</p>
                    </div>
                   <div className="img-product">
                        <img src="./public/Imgproduct/1.png" alt="this watch image" />
                   </div>
                   <h3>Black Sports Watch</h3>
                   <div className="rating">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                   </div>
                   <div className="price">
                        <h3 className="pricebefore">$ 499</h3>
                        <h3>$ 399</h3>
                   </div>
                   <button className="btn-addcard">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add to card
                   </button>
                </div>
        </>
    )
}

export default card