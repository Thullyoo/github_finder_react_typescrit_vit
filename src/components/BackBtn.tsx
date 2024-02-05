import classes from './BackBtn.module.css';


const BackBtn = () => {
 return(
  <div className={classes.btn}>
   <a href="/"><button>Voltar</button></a>
  </div>
  
 )
}

export default BackBtn;