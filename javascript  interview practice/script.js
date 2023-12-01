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

