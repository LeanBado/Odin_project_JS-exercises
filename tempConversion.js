const ftoc = function(fahren) {
  return Math.round(((fahren-32)*5)/9);
 ;
};
console.log(ftoc(32))
const ctof = function(celsius) {
  return Math.round(((celsius*9)/5)+32);
  ;
};
console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
