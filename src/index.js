
/**
 * Esta es una funcion de un numero random
 * 
 * @param {Number} min Un numero pequeño
 * @param {Number} max UN numero maximo
 * @returns {Number} Retorna un numero random
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
