import './App.css'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'

function App() {

  return (
    <>
     <div className='navbar'>
        <Navbar/>
     </div>
     <div className='product-lists'>
        <Card>
        </Card>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
