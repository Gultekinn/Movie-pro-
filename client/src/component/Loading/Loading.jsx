import React from 'react'
import '../Loading/Loading.scss'
import ScaleLoader from 'react-spinners/ScaleLoader'


const Loading = () => {
  return (
    <div className='loader'>
      

     <ScaleLoader color= "#ff0000" />
     

    </div>
  )
}

export default Loading
