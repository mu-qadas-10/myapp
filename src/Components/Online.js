import React from 'react'
import Pro from './Onlinedata'
import { useState } from 'react';
const Online = () => {
    const[search , setSearch]=useState('');
    console.log(search);
  return (
    
      <div className='container'>
       <div className='row'>
       <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
       {
        Pro.filter((x)=>{
            if(search == ``){
                return x
            }else if(x.title.toLowerCase().includes(search.toLowerCase())){
                return x
            }
        }).map((x)=>{
            return(
                <div className='col-md-3 mt-5'>
                <div className='card'>
                  <img src={x.img} className='card-img-top' alt=''/>
                   <div className='card-body'>
                    <h5 className='card-title'>{x.title}</h5>
                    <p className='card-text'>{x.desc.slice(0,50)}...</p>
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

export default Online;
