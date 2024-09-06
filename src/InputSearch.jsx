import React from 'react'

const InputSearch = (props) => {

const {textInput,setTextInput} =props
const hdlChange = (e) =>{(
  setTextInput(e.target.value)
)}


  return (
    <div>
      <label className='text-xl font-bold font-sans mx-4'> Input text :
    <input className='bg-slate-500 text-white mx-4 rounded-xl px-5 my-3' type="text" value={textInput} onChange={hdlChange} />
      </label>
    </div>
  )
}

export default InputSearch
