import { items } from "../data";
import Product from "./product";

export default function ProductList(){
    return(
      <>
      { items.length > 0 ? (
        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
{
    items.map((item,index)=> (
        <div className='col' key ={index} >
        <Product porductObj={item}/>
         </div>
         ))
        }
        </div>
      ):(
        <p>Su anda satista olan urunumuz yok.</p>
      )
      }
      </>
    );
  }