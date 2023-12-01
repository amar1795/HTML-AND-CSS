// debouncing

let count = 1;
function showCount() {
  count++;
  console.log({ count });
}

function debounce(fx, time) {
  let id = null;
  return function (x) {
    if (id) {
      clearTimeout(id);
    }
    console.log({ id });
    id = setTimeout(() => {
      fx(x);
      id = null;
    }, time);
  };
}

// decorator pattern

let task = {
    name: 'demo',
    heavy(x) {
      console.log(x + ':heavy:' + this.name);
      return x + ':heavy' + this.name;
    },
  };
  
  function memoized(fx) {
    let map = new Map();
    return function (x) {
      if (map.has(x)) {
        return map.get(x);
      } else {
        let memoValue = fx.call(this,x);
        map.set(x, memoValue);
        return memoValue;
      }
    };
  }
  task.memoizedHeavy = memoized(task.heavy) 
  task.memoizedHeavy(1) // 1:heavydemo
  
  