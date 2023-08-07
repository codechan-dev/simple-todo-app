
import './App.css';
import { useState } from 'react';
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';

function App() {

  const [items,setitems]= useState(

    [ {
       id:1,
       item:"work",
       checked:true
   
     },
     
     {
       id:2,
       item:"bath",
       checked:true
   
     },
     
     {
       id:3,
       item:"drink",
       checked:0
   
     }]
   
    );
 
 
 return(
 <div>
 <Header title="chan"/>
 <Content items={items}
 setitems={setitems} />
 <Footer items={items.length}/>
 </div>
  );
}

export default App;
