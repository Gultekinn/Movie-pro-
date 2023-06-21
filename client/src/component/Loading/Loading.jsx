import React from 'react'
import '../Loading/Loading.scss'
import RingLoader from 'react-spinners/RingLoader'


const Loading = () => {
  return (
    <div className='loader'>
      
<RingLoader color="#36d7b7" />
    </div>
  )
}

export default Loading
