import { useParams } from 'react-router-dom'
import Repositories from '../components/Repositories';
import BackBtn from '../components/BackBtn';

const Respos = () =>{

 const {user} = useParams();
 
 return(
  
  <div>
   <BackBtn/>
   <Repositories user={user || ''}/>
  </div>
 )
}

export default Respos