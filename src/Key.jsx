const Key = ( {symbol, onClick: handleClick}) => {

  return ( 
    <button onClick={handleClick}>{symbol}</button>
   )
}
 
export default Key;