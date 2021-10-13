import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
function App() {
  console.log('App Rendered');
  return (
    <div>
      <Counter initialCount={100} />
      <CounterHooks initialCount={10} />
    </div>
  );
}

export default App;
