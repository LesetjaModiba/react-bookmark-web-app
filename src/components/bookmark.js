import "./bookmark.css";
import React from "react";



const Bookmark= ({productItems,click1})=> {

    return(
     <div className="container">
         
       
         
         <div className="item">
            {productItems.map((productItem)=>{
                
                
                    return(
                        <div className='card' key={productItem.id} onClick={()=>click1(productItem.id)}>
                        <div className="img-div"><img src={require(`./images/${productItem.image}`)} alt={productItem.name}/> </div>
                        <div className="name-div"><p className="name">{productItem.name}</p></div>
                        <div className="location-div"><p>{productItem.location}</p></div>
                        <div className="to-bookmark"><p>Click to bookmark</p></div>

                        </div>            
                    )
            })}
         </div>
         
     
     </div>
    )
}

export default Bookmark;