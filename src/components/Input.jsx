import { useRef } from 'react'
function Input() {
  const referenciaAInput = useRef(null)

  const handleFocus = () => {
    referenciaAInput.current.focus()
  }

  return (
    <div>
      <input placeholder="buscar" ref={referenciaAInput}></input>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Input
