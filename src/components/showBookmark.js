const  Show= ({toAdd}) => {
    return ( 


        <div className="container">
           <div className="ite">
            {toAdd.map((item)=>{
                        const remove=()=>
                        {
                            localStorage.removeItem(item.name);
                            window.location.reload();
                        }
                
                return(
                    <div className='card' key={item.id} onClick={remove}>
                    <div className="img-div"><img src={require(`./images/${item.image}`)} alt={item.name}/> </div>
                    <div className="name-div"><p className="name">{item.name}</p></div>
                    <div className="location-div"><p>{item.location}</p></div>
                    <div className="to-bookmark"><p>Click to remove</p></div>
                    </div>            
                )
        })}
        </div>
        </div>
     );
}
 
export default Show;