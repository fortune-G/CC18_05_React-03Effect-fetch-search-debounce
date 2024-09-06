import { data } from 'autoprefixer'
import React from 'react'

const ShowMsg = (props) => {
  const {data} = props
  return (
    <div className='bg-sky-200 rounded-lg'>
      <pre>{JSON.stringify(data,null,3)}</pre>
    </div>
  )
}

export default ShowMsg
