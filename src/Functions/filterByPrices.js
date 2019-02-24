function filterByPrices (items, from, to) {

  if (to === 0) to = Infinity;

  return items.filter(item => from <= item.price && item.price <= to);

}

export default filterByPrices;