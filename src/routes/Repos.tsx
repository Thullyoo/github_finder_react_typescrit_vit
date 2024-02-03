import { useParams } from 'react-router-dom'
import Repositories from '../components/Repositories';

const Respos = () =>{

 const {user} = useParams();
 
 return(
  <div>
   <Repositories user={user || ''}/>
  </div>
 )
}

export default Respos