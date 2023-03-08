/* 

function well(x){
  
  let good = 0
  let bad = 0
  x.forEach(x => x === 'good' ? good++ : bad++)
return  good > 2 ? 'I smell a series!' : good >= 1 ? 'Publish!' : 'Fail!'
}

*/

function well(x) {
  let good = 0;
  let bad = 0;
  x.forEach((x) => (x === 'good' ? good++ : bad++));
  return good > 2 ? 'I smell a series!' : good >= 1 ? 'Publish!' : 'Fail!';
}

//consider using filter!

const well = (x) => {
  const good_count = x.filter((x) => x == 'good').length;
  return good_count < 1
    ? 'Fail!'
    : good_count < 3
    ? 'Publish!'
    : 'I smell a series!';
};
