function Button({ children, callback, color }) {
  return (
    <button onClick={callback} className={'btn'} style={{ backgroundColor: color, color: 'white' }}>
      {children}
    </button>
  )
}

export default Button
