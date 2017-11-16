export const addPrefix = (sources, prefixes) =>
  sources.reduce((pre, cur) =>
    [...pre, ...prefixes.map( prefix => prefix + cur)]
  , []);