import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowMsg from './ShowMsg'
import InputSearch from './InputSearch'

function App() {
  const [search,setSearch] = useState('')
  const [textInput,setTextInput] = useState('')
  const [data, setData] = useState([])



  useEffect(()=>{
    let setTimer = setTimeout(()=>{
      setSearch(textInput)
    },1000)
    return ()=>{
      clearTimeout(setTimer)
    }
  },[textInput])  


useEffect(()=>{
  const fetchData = async() => {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const result = await resp.json()
    setData(result.products)
  }
  fetchData()
},[search])




  return (
    <>
    <h1 className='font-bold font-sans text-2xl mt-3 ml-2  '>SEARCH TEXT : {search}</h1>
    <InputSearch setTextInput = {setTextInput} textInput = {textInput}/> 
    <ShowMsg data= {data}/>
    </>
  )
}

export default App
