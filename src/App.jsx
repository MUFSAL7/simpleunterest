import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { easing } from '@mui/material';





function App() {

  const[principle,setPrinciple]=useState(0)
  const[interest,setInterest]=useState(0)
  const[year,setYear]=useState(0)
  //calculate  simple interest and store 
  const[simpleInterest,setSimpleInterest]=useState(0)

  const[isInavalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const[isInavalidInterest,setIsInvalidInterest]=useState(false)
  const[isInavalidYear,setIsInvalidYear]=useState(false)




  console.log(principle);

  const validateInput=(tag)=>{
      const {name,value}=tag

      console.log(name,value);
      console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
      if(!!value.match(/^\d*.?[0-9]+$/)){

        if(name=='principle'){
          setPrinciple(value)
          setIsInvalidPrinciple(false)
        }
        else if(name=='interest'){
          setInterest(value)
          setIsInvalidInterest(false)
        }
        else{
          setYear(value)
          setIsInvalidYear(false)
        }
      }
      else{
         if(name=='principle'){
          setIsInvalidPrinciple(true)
         }
         else if(name=='interest'){
          setIsInvalidInterest(true)
         }
         else{
          setIsInvalidYear(true)
         }
      }
      
      
    console.log(tag);
    
  }


  const handleCalculate=(e)=>{
    e.preventDefault()
    
    console.log("button click");
    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)
      // console.log(setSimpleInterest);
      
    }
    else{
      alert("please fill the field properly")
    }

    
  }
  const resetButton=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)

    setIsInvalidPrinciple(false)
    setIsInvalidInterest(false)
    setIsInvalidYear(false)
  }

  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-dark d-flex align-item-center justify-content-center' style={{minHeight:'100vh',width:'100%'}}>
    <div className='bg-light p-5 rounded  mt-5' style={{width:'600px', height:'100%'}}>
      <h2>Simple Interest Calculator</h2>
      <h6>Calculator youre simple interest easily</h6>
      <div className='bg-warning d-flex align-items-center justify-content-center p-4 mt-3 flex-column rounded'>
      <h2 >{simpleInterest}</h2>
      <h3>Total Simple Interest</h3>
      </div>
      <form action="" className='mt-5'>

<div className='mb-3'>
        <TextField  name='principle' value={principle || ""} onChange={e=>validateInput(e.target)}  className='mt-3' style={{width:'100%'}} id="outlined-basic" label="₹ Principle Ammount" variant="outlined"  />
  
</div> 
{
  isInavalidPrinciple &&
  <p className='d-flex text-danger'>please eneter valid data</p>
}
<div className='mb-3'>
       <TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)} className='mt-3' style={{width:'100%'}} id="outlined-basic" label="Rate" variant="outlined"  />
  
</div> 
{
  isInavalidInterest &&
  <p className='d-flex text-danger'>please eneter valid data</p>
}

<div className='mb-3'>
    <TextField name='year' className='mt-3' value={year || ""} onChange={e=>validateInput(e.target)} style={{width:'100%'}} id="outlined-basic" label="Time Priod" variant="outlined"  />
  
</div>  
{
  isInavalidYear &&
  <p className='d-flex text-danger'>please eneter valid data</p>
}
      <Stack direction="row" spacing={2}>
       <Button  disabled={isInavalidPrinciple || isInavalidInterest || isInavalidYear} type='submit' onClick={handleCalculate} className='mt-3 mb-2 w-100' style={{height:'50px', color:'#fff',fontWeight:'900', fontSize:'15px'}} variant="contained"  color="primary">
         Calculate
        </Button>
        <Button className='mt-3 mb-2 w-100 '  onClick={resetButton} style={{height:'50px', color:'#333',fontWeight:'900', fontSize:'15px'}} variant="contained" color="light">
         Reset
        </Button>
      </Stack>

  </form>
   
    </div>
    </div>
    </>
  )
}

export default App
