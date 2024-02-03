import classes from './CardRepos.module.css';
import { DiCode } from "react-icons/di";
import { FaCodeFork } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import {CardProps} from '../types/cardrepos';

const CardRepos = (repos: CardProps) =>{
 return(
  <div className={classes.cardRepos}>
      <h1>{repos.name}</h1>
      <div>
      <DiCode /><h2>{repos.language}</h2>
      </div>
      <div>
      <span>
      <CiStar /><h2>{repos.stargazers_count}</h2>
      </span>
      <span>
       <FaCodeFork/><h2>{repos.forks_count}</h2>
      </span>
      </div>
      <a href={repos.svn_url} target='_blank'><button>Ver código <FaBook /></button></a>
   </div>
 )
}

export default CardRepos;