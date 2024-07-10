export default function Child({count, increment, decrement}) {
  
  return <>
    <h3>Count: {count}</h3>
    <button onClick={decrement}>Decrease</button>
    <button onClick={increment}>Increase</button>
  </>;
}
