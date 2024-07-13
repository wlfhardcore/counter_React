const Counter = ({counter,artir,azalt,incrementValue,handleChange}) =>{
return(
    <div className='App-header'>
    <input
      type="number"
      value={incrementValue}
      onChange={handleChange}
      style={{ fontSize: 20, margin: '10px' }}
    />
    <button onClick={(artir)} style={{
      fontSize: 50
    }}>+</button>
    <div style={{
      fontSize: 50
    }}>{counter}
    </div>
    <button onClick={(azalt)} style={{
      fontSize: 50
    }}>-</button>
  </div>
)
}
export default Counter;