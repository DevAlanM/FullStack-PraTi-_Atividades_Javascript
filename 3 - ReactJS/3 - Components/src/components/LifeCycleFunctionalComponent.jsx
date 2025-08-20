import {useState, useEffect} from "react";

function LifeCycleFunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component has mounted");

    return () => {
      console.log("Component is about to be unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component has updated");
    console.log(`Count changed to ${count}`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default LifeCycleFunctionalComponent;