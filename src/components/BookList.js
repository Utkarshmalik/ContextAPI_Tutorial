import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {

  static contextType = ThemeContext;


  // render() { 
  //   return (
      
  //     <ThemeContext.Consumer >
  //     {
  //       (context)=>{

  //         console.log(context);

  //         const {isLightTheme,light,dark}=context;
  //         const theme= (isLightTheme)?light:dark;

  //         return(<div style={{color:theme.syntax , background:theme.bg }} className="book-list">
  //         <ul>
  //           <li style={{backgroundColor:theme.ui}} >the way of kings</li>
  //           <li  style={{backgroundColor:theme.ui}}>the name of the wind</li>
  //           <li  style={{backgroundColor:theme.ui}} >the final empire</li>
  //         </ul>
  //       </div>)

  //       }
  //     }
  //     </ThemeContext.Consumer>

  //   );
  // }




  render() { 

    console.log(this.context);

    const {isLightTheme,light,dark}=this.context;
    const theme= (isLightTheme)?light:dark;

    return ( 
      <div style={{color:theme.syntax , background:theme.bg }} className="book-list">
        <ul>
          <li style={{backgroundColor:theme.ui}} >the way of kings</li>
          <li  style={{backgroundColor:theme.ui}}>the name of the wind</li>
          <li  style={{backgroundColor:theme.ui}} >the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;