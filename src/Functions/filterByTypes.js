function filterByTypes (items, type) {

  const types = Object.entries(type);
  const ifFiltersEmpty = types.every(el => el[1] === false);

  const trueTypes = types
    .filter(type => type[1])
    .map(type =>  type[0]);

  if (ifFiltersEmpty) {
    return items;
  } else {
    const filtered = items.filter(item => {
      return trueTypes.some(type => item.type === type);
    });
    return filtered;
  }
}

export default filterByTypes;