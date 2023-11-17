import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';




function App() {
// const [nr, setNr]=useState(0);
const [data,setData]=useState([]);

const keistiPatiekloStatusa = (id)=>{
  setData(data.map(el=>{
    if(el.id===id){
      fetch(`http://localhost:8080/patiekalas/${id}`,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({tasted: !el.tasted})
      });
      return {
        ...el,
        tasted: !el.tasted
      }
    }else{
      return el;
    }
  }))
}

const pridetiNaujaPatiekala=(patiekalas)=>{
  setData([...data, patiekalas]);
  fetch(`http://localhost:8080/patiekalas`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(patiekalas)
  });
  
}
// naujas 
const [formInputs, setFormInputs]=useState({
  title:'',
  image:'',
  description:'',
  tasted:false
})

  useEffect(()=>{
  fetch(`http://localhost:8080/patiekalas`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setData(data);
  })
// return ()=>console.log('baigesi')
},[])
  

  // 
  return (
    <>
    {/* <h1>Number is :{nr}</h1>
    <button onClick ={()=> setNr(nr-1)}>Lower</button>
    <button onClick = {()=> setNr(nr+1)}>Higer</button> */}
    
    <Header
    bendrasKiekis ={data.length}
    ragautuKiekis={data.filter(el=>el.tasted).length}
    neragautuKiekis={data.filter(el=>!el.tasted).length}
    // ragautuKiekis={data.filter(patiekalas=>patiekalas.tasted).length}
    // neragautuKiekis={data.filter(patiekalas=>!patiekalas.tasted).length}
    />


    <Main
    data={data}
    keistiPatiekloStatusa={keistiPatiekloStatusa}
    formInputs={formInputs}
    setFormInputs={setFormInputs}
    pridetiNaujaPatiekala={pridetiNaujaPatiekala}
    />
    </>
  );
}

export default App;
