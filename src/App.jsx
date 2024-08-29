import './App.css'
import Card from './Card.jsx'

import Navbar from './Navbar.jsx'

function App() {
  const viewDetail = (productItem) => {
    console.log(productItem)
  }

  return (
    <>
     <div className='navbar'>
        <Navbar/>
     </div>
     <div className='product-lists'>
        <Card discount={"20%"} img={'./public/Imgproduct/1.png'} title={'Black Sports Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/2.png'} title={'Black Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/3.png'} title={'Chrome Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/4.png'} title={'Classic Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/5.png'} title={'Custom Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/6.png'} title={'Gold Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/7.png'} title={'Navy Blut Watch '} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
        <Card discount={"20%"} img={'./public/Imgproduct/8.png'} title={'Pink Watch'} beforediscount={"$ 499"} afterdiscount={"$ 399"} Detail={viewDetail}/>
      </div>
    </>
  )
}

export default App
