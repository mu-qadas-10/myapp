import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import data from '../data';

const Detailpage = () => {
  const {id}= useParams();
  const resultImageURL = data.find((x)=>x.id == id)
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center fs-1 fw-bold my-5'>Deatailpage of Product</h1>
        <hr></hr>
        <center>
        <div className='col-md-6'>
          <h1>{resultImageURL.title}</h1>
          <p className='p'>
            <strong>description</strong>
            ${resultImageURL.description}
          </p>
          <p className='para'>
            <strong>Price:</strong>$
            {resultImageURL.price}
           </p>
      </div>
      </center>
      <p>Detail page{resultImageURL.price}</p>
         </div>
         <div className='col-md-4 mx-5'
         style={{ width:`400px`,height:`500px`}}>
          <div style={{ width:`80%`}}>
          <ReactImageMagnify
           {...{
    smallImage: {
        alt: "",
        isFluidWidth: true,
        src: resultImageURL.image,
        width: 140,
        height: 162,
    },
    largeImage: {
        src: resultImageURL.image,
        width: 800,
        height: 1100
    },
    isHintEnabled: true,
  }}
  />
      </div>
      </div>
      <div className='col-md-4'></div>
    </div>
    
  );
};

export default Detailpage;
