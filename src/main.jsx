import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App(){
  return (
    <>
    <Header/>
    <div className='container'>
    <ProductList/>
    </div>
    </>
  );
}
function Header(){
   return <header>
    <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
<div className='container'>
  <a href="#" className='navbar-brand'>Store App</a>

</div>
    </nav>
   </header>
}
function ProductList(){
  return(
    <>
    <h2 className='title'>Product List</h2> 
    <Product/>
    <Product/>
    <Product/>
    <Footer/>
    </>
  );
}

function Product(){
 const image = "1.jpg";
 const title = "Iphone 16";
 const description = "Lorem ipsum dolor sit amet.";
 const price = 80000;

 const product_item={
"image" : "1.jpg",
"title":"Iphone16",
"description":"Lorem ipsum dolor sit amet.",
"price":80000
 };

  return (
   <div>
    <img src={"public/"+product_item.image}alt=""/>
    <h2>{product_item.title}</h2>
    <p>{product_item.description}</p>
    <span className='price'>{product_item.price}</span>
   </div>
  );
}
function Footer(){
  const hour = new Date().getHours();
  const openHour=8;
  const closeHour=20;
  const isOpen = hour => openHour && hour <= closeHour;

return(
  <footer>{
isOpen ? (
  <p>Aksam {closeHour} saatine kadar acigiz. </p>
):
(
  <p>Acilis saatimiz {openHour} .</p>
)
}
  </footer>
);
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
  </StrictMode>,
)
