import { useEffect, useState } from 'react';
import classes from './Repositories.module.css';
import CardRepos from './CardRepos'
import { CardProps } from '../types/cardrepos';
import Load from './Load';

const Repositories = ({ user }: { user: string }) => {

  const [loadRemove, setLoad] = useState(false);

  const [repositories, setRepositories] = useState<CardProps[]>([]);


  useEffect(() => {
    
      async function getRespositories(user: string) {

        await fetch(`https://api.github.com/users/${user}/repos`)
          .then((res) => res.json())
          .then((data) => {
            if (Array.isArray(data) && data.length > 0) {
              setRepositories(data.sort((a, b) => b.stargazers_count - a.stargazers_count));
            }
          })
          .catch((err) => console.log(err))
        setLoad(true)
        return repositories;
      }

      getRespositories(user);
    
  }, [])

  return (
    <div className={classes.repos_container}>
      <h2>Explore o repositório de {user}</h2>
      <div className={classes.repos}>
        {repositories.length > 0 && (
          repositories.map((repos: CardProps) => (
            <CardRepos key={repos.name} name={repos.name} language={repos.language} stargazers_count={repos.stargazers_count} forks_count={repos.forks_count} svn_url={repos.svn_url}
            />
          ))
        )}
        {!loadRemove && <Load />}
      </div>

    </div>
  )
}

export default Repositories