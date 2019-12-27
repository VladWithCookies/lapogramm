const toCSSFilter = (filters) => {
  const hue = filters.hue

  if (hue) {
    filters['hue-rotate'] = `${hue}deg`
    delete filters.hue
  }

  return Object
    .keys(filters)
    .map((filterName) => `${filterName}(${filters[filterName]})`)
    .join(' ')
}

export default toCSSFilter
