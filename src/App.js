import Counter from "./Counter";
function App() {
  console.log('App Rendered');
  return (
    <div>
      <Counter initialCount={100} />
    </div>
  );
}

export default App;
