function filterBySquares (items, from, to) {

  if (to === 0) to = Infinity;

  return items.filter(item => from <= item.square && item.square <= to);

}

export default filterBySquares;