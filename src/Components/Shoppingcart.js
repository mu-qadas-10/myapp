import React from 'react'
import '../style/Shoppingcart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { add, remove, removesingleitem } from '../Redux/cartslice'

const Shoppingcart= () => {
    const dispatch = useDispatch();
    const Delete =(id)=>{
          dispatch(remove(id))
    }
    const increment =(a)=>{
     dispatch(add(a))
    }
    const decrement =(a)=>{
      dispatch(removesingleitem(a))
     }
    const getdata = useSelector((state)=>state.cartReducer.carts)

  return (
   <div className="container bootdey mt-5">
  <div className="row bootstrap snippets ">
    
    <div className="clearfix visible-sm" />
    {/* Cart */}
    <div className="col-lg-9 col-md-9 col-sm-12 m-auto">
      <div className="col-lg-12 col-sm-12 bg-dark text-white p-2 mt-5">
        <span className="title ">SHOPPING CART</span>
      </div>
      <div className="col-lg-12 col-sm-12 hero-feature">
        <div className="table-responsive">
          <table className="table table-bordered tbl-cart">
            <thead>
              <tr>
                <td className="hidden-xs">Image</td>
                <td>Product Name</td>
                <td>-</td>
             
                <td className="td-qty">Quantity</td>
                <td>+</td>
                <td>Unit Price</td>
                <td>Sub Total</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
             {getdata.map((a)=>{
                return(
                    <tr>
                    <td className="hidden-xs">
                      <a href="#">
                        <img src={a.image}alt="Age Of Wisdom Tan Graphic Tee" title width={47} height={47} />
                      </a>
                    </td>
                    <td><a href="#" className='img1'>{a.title}</a>
                    </td>
                    <td>
                    <a href='#' ><button className='bg-primary' onClick={()=>decrement(a)}>-</button></a>
                    </td>
                    <td>{a.qty}</td>
                    <td>
                    <a href='#' className='plus'><button className='bg-warning' onClick={()=>increment(a)}>+</button></a>
                    </td>
                    <td className="price">$ {a.price}</td>
                    <td>$ {a.qty*a.price}</td>
                    <td className="text-center">
                      <a onClick={()=>Delete(a.id)} href="#" className="remove_cart" rel={2}>
                        <i className="fa fa-trash-o" />
                      </a>
                    </td>
                  </tr>
                )
             })}
           
              <tr>
                <td colSpan={6} align="right">Total</td>
                <td className="total" colSpan={2}><b>$ 163.47</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-group btns-cart">
          <Link to='/product'><button type="button" className="btn btn-primary"><i className="fa fa-arrow-circle-left" /> Continue Shopping</button></Link>
          <button type="button" className="btn btn-primary">Update Cart</button>
          <button type="button" className="btn btn-primary">Checkout <i className="fa fa-arrow-circle-right" /></button>
        </div>
      </div>
    </div>
    {/* End Cart */}
  </div>
</div>

  )
}

export default Shoppingcart