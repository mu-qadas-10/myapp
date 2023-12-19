import React from 'react'
import data from '../data';

const Home = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/pictures/golden-friday-sale.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/pictures/final_1.webp"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/pictures/golden-friday-sale.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div>
      <div className='container '>
       <div className='row '>
        <h3 className='mt-5 fs-1'>TRENDING</h3>
        <hr></hr>
        {
          data.map((a)=>{
            return(
              <div className='col-md-3 mt-5'>
                <div className='card'>
                  <img src={a.image} className='card-img-top' alt=''/>
                   <div className='card-body'>
                    <h5 className='card-title'>{a.title}</h5>
                    <p className='card-text'>{a.description.slice(0,50)}...</p>
                   <button className='btn btn-primary'><p className='card-text'>price: {a.price}</p></button> 
                  </div>
                </div>
              </div>
            )
          }
          )
            

            
          }
          
        
       </div>
      </div>
    </div>
    </div>
  )
}

export default Home;




