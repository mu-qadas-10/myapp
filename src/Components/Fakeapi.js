// import axios from "axios"
import  React,{ useState} from "react";
import {Link} from "react-router-dom";


const Fakeapi = () => {
  //  const {id} = useParams
   const[a,setA]=useState([])
    fetch('https://fakestoreapi.com/products').then((response)=>response.json()).then((result)=>setA(result)) 
  //  const getdata = async () =>{
  //     let data = await axios.get("https://fakestoreapi.com/products/").then((result)=>setA(result.data));
  //   };
  //   (()=>{
  //     getdata();
  //   },[]);
   
    // axios.get('https://fakestoreapi.com/products').then((result)=>setA(result.data))
    
  return (
    <div className="container">
      <div className="row">
    {a.map((x)=>{
      return (
        <div className="col-md-4"> 
          <div className="card">
           <Link to={`/fakeapi/${x.id}`}> <img className="card-img-top" src={x.image} alt="Card image cap" /></Link>
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text">{x.description}</p>
              <p className="card-text">Price: {x.price}</p>
            </div>
          </div>
        </div>
      )
    }

    )}
      </div>
    </div>
  )
}

export default Fakeapi;
