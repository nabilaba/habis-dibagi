function Rumus(bilawal, bilakhir, rules) {
  let data = [];
  for (var i = bilawal; i < bilakhir; i++)
    if (rules === 1)
      if (i % 3 === 0 || i % 7 === 0) if (i % 5 !== 0) data.push(i);
  return data;
}

export default Rumus;