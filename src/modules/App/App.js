import React from 'react';
import styles from './App.module.css';
import Card from "../Card/Card";

class App extends React.Component{

     state = {

        backgroundColor:'lightblue'

    }

    getValue = (e) => {

         e.preventDefault();

         this.setState({

             backgroundColor:this.inputRef.value + ''

         })

        let inp = document.querySelector('.inp')

        inp.value = ''

    }

   render(){

       return(

           <div className={styles.App}>

               <Card color = {this.state.backgroundColor} />

               <form onSubmit={this.getValue}>
                   <label>
                       <input className='inp' ref = {(inputRef) => this.inputRef = (inputRef)} type="text"/>
                   </label>

                   <label>
                       <input type="submit"/>
                   </label>
               </form>

           </div>
       )
   }
}

export default App;