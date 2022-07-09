import React from 'react';

export default function  Meme(){

   

    /* const [things, setThings]=React.useState(["thing 1","thing 2"])
  
    function addItem(){
  const newThingText =` thing ${ things.length + 1 }`
  setThings(prevState=>[...prevState,newThingText])
  console.log(things)
    }

    const elements=things.map(thing=>thing) */
   

return (<main>
        <div className="form">
        <input type="text"  placeholder="Top Text" className="form-inputs"/>
        <input type="text"  placeholder="Bottom Text" className="form-inputs"/>
        <button className="form-button" key="ff"onClick="">Get a new meme image</button>
        
     {/*  
     <button className="form-button" key="ff"onClick={addItem}>Get a new meme image</button>
     <p>{elements}</p> */} 
  
        </div>
    </main>)
}