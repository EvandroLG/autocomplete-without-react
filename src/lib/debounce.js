function debounce(callback, wait, immediate) {
  let timeout = null;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;

      if (!immediate){
        callback.apply(this, args);
      }
    }, wait);

    if (immediate && !timeout) {
      func.apply(this, [...args]);
    }
  }
}

export default debounce;
