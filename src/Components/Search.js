import React from 'react'
import data from '../data';
import { useState } from 'react';

const Search = () => {
    const[search , setSearch]=useState('');
    console.log(search);
      return (
    <div className='container'>
        <div className='row'>
      <input type='text' placeholder='Search product' onChange={(e)=>setSearch(e.target.value)} className='my-3 w-50'/>
      <div className='row'>
        {
        data.filter((x)=>{
            if(search==``){
                return x
            } else if(x.title.toLowerCase().includes(search.toLowerCase())){
                    return x
                }
        }).map((x)=>{
            return (
                <div className='col-md-3'>
                    <div className='card'>
                    <img src={x.image} className='card-img-top' alt=''/>
                        <div className='card-body'>
                            <h5 className='card-title'>{x.title}</h5>
                            <p className='card-text'>{x.description}</p>
                            <p className='card-text'>{x.price}</p>
                        </div>
                     </div>
                   </div>
            )
        })
        }
        </div>
           </div>
    </div> 
        )
}

export default Search;
