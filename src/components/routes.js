import './routes.css';
import { useHistory } from 'react-router-dom';

const  Routes= () => {
    let history=useHistory();
    const home=()=>
    {
        history.push("/bookmark");
    }
    const bookmarks=()=>
    {
        history.push("/showBookmark")
    }
    return (
        <div className="routes-container">
        <nav>
        <h2 onClick={home}>Home</h2>
        <h2 onClick={bookmarks}>Bookmarks</h2>
        </nav>
        </div>
      );
}
 
export default Routes;