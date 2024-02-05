import loading from '../img/loading.gif';
import classes from './Load.module.css';


const Load  = () =>{
 return(
  <div className={classes.load}>
   <img src={loading} alt="loading" />
  </div>
 )
}

export default Load;