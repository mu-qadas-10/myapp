import React from 'react'
import data from '../data'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/cartslice'


const Product = () => {
  const dispatch = useDispatch();
  const addcart =(a)=>{
    dispatch(add(a))
  }
  const {id}= useParams();
  return (
    <div className='container my-5'>
      <div className='row'>
        {
          data.map((a)=>{
            return(
              <div className='col-md-4'>
                <div className='card'>
                  <Link to={`/product/${a.id}`}><img src={a.image} className='card-img-top' alt=''/></Link>
                   <div className='card-body'>
                    <h5 className='card-title'>{a.title}</h5>
                   <button className='btn bg-warning'> <p className='card-text'>{a.price}</p></button>
                   <button type="button" className='btn bg-warning rounded mx-5' onClick={()=>addcart(a)}>
                    Add Cart</button>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Product;


