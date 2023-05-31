function range_vision(n) {
  const digitos = String(n).split('').map(Number);
  let minVision = Infinity;
  let tieneUnoMasBajo = false;
  
  for (let i = 0; i < digitos.length; i++) {
    const vision = digitos.slice(Math.max(0, i - digitos[i]), i + digitos[i] + 1).reduce((acc, val) => acc + val, 0);
    if (vision < minVision) {
      minVision = vision;
      tieneUnoMasBajo = digitos[i] === 1;
    } else if (vision === minVision && digitos[i] === 1) {
      tieneUnoMasBajo = true;
    }
  }
  
  return tieneUnoMasBajo;
}
  
  

// console.log(range_vision(34315));


module.exports = range_vision;