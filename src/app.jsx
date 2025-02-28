import Header from "./components/header";
import ProductList from "./components/productList";

export default function App(){
    return(
 <>
 <Header/>
<div className='container mt-3'>
<ProductList/>
</div>
 </>
    );
}