// An updater function in React is a function passed as an argument to a state setter (like setCount) that calculates the next state based on the previous state

// ❌ Direct Value (Can lead to bugs with multiple updates)
setCount(count + 1);

// Updater Function (Safe and reliable)

setCount(prevCount => prevCount + 1);  // Full Prefix
count => count+1                       // Repeated Name
c => c+1                               // First Letter (Most Common for short blocks):

//_____________________________________________________________________________________________________________

function handleClick() {
  setCount(count + 1); // count is 0 -> React queues "replace with 1"
  setCount(count + 1); // count is still 0 -> React queues "replace with 1"
  setCount(count + 1); // count is still 0 -> React queues "replace with 1"
}

function handleClick() {
  setCount(prev => prev + 1); // Queues: take pending state and add 1
  setCount(prev => prev + 1); // Queues: take pending state and add 1
  setCount(prev => prev + 1); // Queues: take pending state and add 1
}
