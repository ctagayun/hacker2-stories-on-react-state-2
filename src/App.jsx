/* eslint-disable no-unused-vars */
import * as React from 'react';
 
 const welcome = {
   greeting: "My",
   title: 'Hacker',
   subject: 'Stories',
 };

 //JS Variables:Strings
 //var firstName = 'Chito';
 //var lastName = 'Tagayun';

 

// function getTitle(title) { - convert to arrow function
// Eliminate "return" statement and enclosing bracket
 const getTitle =(title) => 
    (title);
  
 // Eliminate "return" statement and enclosing bracket if no business 
 //business logic. Otherwise retain the {} and put a "return" statement
 const App = () => { 
     
      const stories = [
        {
          title: 'React',
          url: 'https://reactjs.org/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: 'Redux',
          url: 'https://redux.js.org/',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
       ]

       console.log('App component is rendered. This renders only on first rendering of the App')

      //We'll use React props to pass the list of stories to the List 
      //component
       return (
         <div>
           <h1> My Hacker Stories</h1>
           <Search/>
           <hr />
           <List list={stories}/>
         </div>
       );
    }

  // Search component - convert to arrow function. Eliminate return and 
  //enclosing {}. If we eliminate {} this means "Concise body". Otherwise
  //it is called block body
  const Search = () =>  { 
    //let searchTerm = ''; this will not work because it needs to be 
    //                     stateful value because it changes over time 
    //                     (i.e we type in the search criteria).
    
    //What is a stateful value? 
    //Answer: When React pass an immutable prop to a child component,
    //        React creates a "mutable" data structure called stateful value
    //        that can be passed to child components to modify the state
    //       
    //        We need to tell React that searchTerm is a stateful value by using
    //        the convention below. "setSearchTerm" is the method to use 
    //        to modify the state of searchTerm.
    //
    //        By using useState, we are telling React that we want to 
    //        have a stateful value which changes over time. 

    //        And whenever this stateful value changes, the affected components 
    //        (here: Search component) will re-render to use it 
    //        (here: to display the recent value).
    //            1. setSearchTerm is the state updater function
    //            2. searchTerm is the sate
    //            3. React.useState('') this method sets the initial value
    const [searchTerm, setSearchTerm] = React.useState('');

    //defining a function which could be an arrow function expression
    //or function declaration for the "change" event of the search input field.
    //In this case  am using an arrow function. See "return"
     const handleChange = (event) =>{
       // synthetic event
       console.log(event); 
       // value of target (here: input HTML element
       console.log(event.target.value);

       setSearchTerm(event.target.value);
     }

     const handleBlur = (event) =>{
      // synthetic event
      console.log(event); 
      // value of target (here: input HTML element
      console.log("Cursor Moved Out of Focus");
    }
     
     console.log('Search box is rendered. When you start typing on the search box only this component will renders.')
   
      //When the you type in sommething to the search text box the 
      //onChange event (an attribute of the text box) of the HTML input 
      //will fire and call "handleChange()"

      //Note without using useState, the searchTerm will not display as
      //you type in the criteria. We need to declare that searchTerm is 
      //stateful value. To do that we need to call useState() hook (see line 84).

      //Work flow of a useState:
      //     When the user types into the input field, the input field's change event 
      //     runs into the event handler. The handler's logic uses the event's value 
      //     of the target and the state updater function to set the updated state. 
      //     Afterward, the component re-renders (read: the component function runs). 
      //     The updated state becomes the current state (here: searchTerm) and is 
      //     displayed in the component's JSX.
      return(
      <div>
          <label htmlFor="Search">Search</label>
          <input id="search" type="text" onChange={handleChange} onBlur={handleBlur}></input>
          <p> 
            Searching for <strong>{searchTerm}</strong>
          </p>
      </div>
      );
      
    }

  //List component - convert to arrow function Eliminate return and 
  //enclosing {}. Eliminating return and bracket is optional. 
  //Here I did not remove the bracket and the return statement.

  //Instantiate Item component and using"map" instantiate "Item"
  //component" and pass each record to Item component as "props". 
  //item={item} means access of the record (item) and 
  //assign it to variable "item"
  const List = (props) =>  (
         <ul>
            console.log('List component is rendering. This renders only on first rendering')
            {props.list.map((item) => (
              <Item key={item.objectID} item={item} />
            ))}
         </ul>
        
     );
           
  //Create another component that will display list of stories.
  //This component called "Item" encapsulates the task of displaying 
  //each stories' record
  const Item = (props) => (
    
    <li>
       console.log('Item component renders. This renders only on first rendering')
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
    
  );     

 

export default App;

//========================================================== 
//Note on Map:
 //Within the map() method, we have access to each object and its properties.

 //concatenating variables into a string
 //var fullName = `${firstName} ${lastName}`
 //console.log(fullName);


 //useState
 //By using useState, we are telling React that we want to have a 
 //stateful value which changes over time. And whenever this stateful value 
 //changes, the affected components (here: Search component) 
 //will re-render to use it (here: to display the recent value).