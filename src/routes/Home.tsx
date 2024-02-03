import { UserProps } from '../types/user';
import { useState } from 'react';

import Search from '../components/Search';
import User from '../components/User';
import Error from '../components/Error';
import Load from '../components/Load';

const Home = () =>{

 const [viewLoading, setViewLoading] = useState(true);
 const [error, setError] = useState(false);
 const [user, setUser] = useState<UserProps | null>(null)



 const loadUser = async(userName : string) => {
  
  setError(false);
  setUser(null);

 const res = await fetch(`https://api.github.com/users/${userName}`);

  if(res.status === 404){
   setError(true);
   return
  }

  const data = await res.json();

  const {avatar_url, login, location, followers, following} = data

  const userData: UserProps = {
   avatar_url,
   login,
   location,
   followers,
   following
  }
  

  
  setUser(userData)
  
  const resposs = await fetch(`https://api.github.com/users/${userName}/repos`);
  
  const data2 = await resposs.json();
  
  console.log(data)
  console.log(data2)
 }

 return(
  <div>
   <Search  loadUser={loadUser}/>
   {/* {viewLoading && <Load/>} */}
   {user && (
    <User
    avatar_url={user.avatar_url}
    login={user.login}
    followers={user.followers}
    following={user.following}
    location={user.location}
    />
   )}
   {error &&
    <Error/>
   }
  </div>
 );
}

export default Home;