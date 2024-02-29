import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProductPage from './component/ProductPage';
import CartPage from './component/CartPage';

const App = () => {
	const [show, setshow] = useState(true);
	const [cart , setcart] = useState([]);
	const [pwar, setWar] = useState(false);

	const handlefun = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWar(true);
			setTimeout(()=>{
				setWar(false);
			}, 2000);
			return ;
		}
		setcart([...cart, item]);
	}

	const onhandleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setcart([...tempArr])
	}

  return (
	<React.Fragment>
		<Navbar size={cart.length} setshow={setshow} />
		{
			show ? <ProductPage handlefun={handlefun} /> : <CartPage cart={cart} setcart={setcart} onhandleChange={onhandleChange} />
		}
		{
			pwar && <div className='warning'>Item is already in Cart</div>
		}
	</React.Fragment>
  )
}

export default App