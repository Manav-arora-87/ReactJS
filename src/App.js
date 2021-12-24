import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist.js' ;
import Footer from './components/Footer.js';
import Additems from './components/Additems';

function App() {
  const products=[
    {
      price:99999,
      name:"I-Phone 10s Max",
      quantity:0,
    },
    {
      price:9999,
      name:"Redmi Note 10s Max",
      quantity:0,
    }
  ]

  let [productlist , setproductlist]=useState(products);
  let [totalamt , settotalamt]=useState(0);

  const incrementqty=(index)=>{
    let newproductlist = [...productlist]
    let newtotalamt = totalamt
    newproductlist[index].quantity++
    newtotalamt+= newproductlist[index].price
    setproductlist(newproductlist);
    settotalamt(newtotalamt);
  }

  const decrementqty=(index)=>{
    let newproductlist = [...productlist]
    let newtotalamt = totalamt
    if(newproductlist[index].quantity > 0 )
    {
      newproductlist[index].quantity --
      newtotalamt-= newproductlist[index].price

    };
    setproductlist(newproductlist)
    settotalamt(newtotalamt);


  }

  const resetqty=()=>{

    let newproductlist = [...productlist]
    newproductlist.map((products=>{products.quantity=0}))
    setproductlist(newproductlist);
    settotalamt(0);



  }
  const removeitem=(index)=>{
    let newproductlist = [...productlist]
    let newtotalamt = totalamt
    newtotalamt-=newproductlist[index].quantity*newproductlist[index].price
    newproductlist.splice(index,1)
    setproductlist(newproductlist);
    settotalamt(newtotalamt);


  }

  const additem=(name,price)=>{
    let newproductlist = [...productlist]
    newproductlist.push({
      price:price,
      name:name,
      quantity:0
    });
    setproductlist(newproductlist);
  }
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
      <Additems additem={additem}/>
    <Productlist removeitem={removeitem} productlist={productlist} incrementqty={incrementqty} decrementqty={decrementqty} />

    </main>
    <Footer totalamt={totalamt} resetqty={resetqty}/>
    </>
  );
}

export default App;
