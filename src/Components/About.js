import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from './Data';


const About = () => {
  const {id}= useParams();
  return (
    <div className='container my-5'>
      <div className='row'>
        {
          Data.map((a)=>{
            return(
              <div className='col-md-4'>
                <div className='card'>
                  <Link to={`/about/${a.id}`}><img src={a.image} className='card-img-top' alt=''/></Link>
                   <div className='card-body'>
                    <h5 className='card-title'>{a.Title}</h5>
                    <button className='btn btn-primary'><p className='card-text'>{a.price}</p></button>
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

export default About
