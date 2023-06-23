import React from 'react'
import '../Dropdown/Dropdown.scss'
const Dropdown = () => {
  const {children} = props
  const [toggle,setToggle] = React.useState(true)
  const [effect,setEffect] = React.useState('')
  const handleClick = e=>{
    setToggle(!toggle)
  }
  React.useEffect(()=>{
    if (toggle) {
      setEffect('slideOutLeft fadeOut')
    } else {
      setEffect('slideInLeft fadeIn')
    }
  }, [toggle])
  return (
    <div>
      <div id='app'>
        
      </div>
    </div>
  )
}

export default Dropdown
