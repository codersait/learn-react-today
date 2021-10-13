import { useState } from "react";

export default function CounterHooks({ initialCount }) {
  console.log('Counter Hooks rendered');
  // const [state, setState] = useState({ count: props.initialCount })
  const [count, setCount] = useState(initialCount)
  return (
    <div>
      <button onClick={() => {
        // first step asenkron oldugu icin birden fazla calisinca dogru degeri vermez
        // setState({ count: state.count - 1 })

        // second step birden fazla calisinca dogru deger verir
        // setState(prevState => ({ count: prevState.count - 1 }));

        // third step obje olarak degil direk deger tutmak
        setCount(prevCount => prevCount - 1);
      }}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
    </div>
  )
}