const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity !== String) return false;
  sampleActivity = parseFloat(sampleActivity);
  if (!isFinite(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  const ln2 = 0.693;
  let age = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivity)) / (ln2 / HALF_LIFE_PERIOD)
    );
    return age;
};
