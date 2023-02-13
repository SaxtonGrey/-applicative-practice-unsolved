export function minBy(array, cb) {
  if (array.length === 0) return undefined;

  let minElement = array[0];
  let minValue = cb(minElement);

  for (let i = 1; i < array.length; i++) {
    let element = array[i];
    let value = cb(element);
    if (value < minValue) {
      minElement = element;
      minValue = value;
    }
  }

  return minElement;
}

export function maxBy(array, cb) {
  if (array.length === 0) return undefined;

  let maxValue =cb(array[0]) ;
  let maxElement = array[0];
  
  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue > maxValue) {
      maxElement = array[i];
      maxValue = currentValue;
    }
  }
  
  return maxElement;
}
