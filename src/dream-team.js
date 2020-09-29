const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))  return false;
    let coolSecretName = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== "string" || members[i].trim() ==="") continue;
      let currentName = members[i].trim().toUpperCase();
      coolSecretName.push(currentName[0]);
    };
    if (coolSecretName === []) return false;
    return coolSecretName.sort().join("");
};