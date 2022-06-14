
import Bookmark from './components/bookmark';

import './App.css';
import data from './components/data';
import Show from './components/showBookmark';



function App() {
  const {productItems}= data;
  const toAdd= [];
  for(let i=0;i<productItems.length;i++)
  {
          if(localStorage.getItem(productItems[i].name))
          {toAdd.push(JSON.parse(localStorage.getItem(productItems[i].name)))}
                   
  }

  const click1=(id)=>{
       for(let i=0;i<productItems.length;i++)
    {
 

          if(id===productItems[i].id)
          {
            localStorage.setItem(productItems[i].name,JSON.stringify(productItems[i]));
             window.location.reload();
    
          }
         
    }
 
     


   }
 
  return (
    <div className="App">
      <div className="container1">
      <h1>IT Companies</h1>
      <Bookmark productItems={productItems}  click1={click1}  />

      </div>
      <div className="container2">
      <h1>Bookmarks</h1>
      <Show toAdd={toAdd} />
      </div>


    </div>

  );
}

export default App;
