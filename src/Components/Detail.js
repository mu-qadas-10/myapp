import React from 'react'
import { useParams } from 'react-router-dom';
import Data from './Data';

const Detail = () => {
  const {id}= useParams();
  const result = Data.find((x)=>x.id == id)
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center fs-1 fw-bold my-5'>Detail of Product</h1>
        <hr></hr>
        <div className='col-md-6'>
         <img src={result.image} className="img-thumbnail" alt=''/>
        </div>
        <div className='col-md-6'>
          <p><strong>description</strong>${result.desciption}</p>
          <p><strong>Price: </strong>${result.price}</p>
          <p><strong>Title:</strong>${result.Title}</p>
      </div>
      <p>Detail page{result.price}</p>
         </div>
    </div>
      
    
  )
}

export default Detail;

