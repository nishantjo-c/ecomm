const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  hashing: async (unencrypted) => {
    const encrypted = await bcrypt
      .hash(unencrypted, saltRounds)
      .then((hash) => {
        return hash;
      });
    return encrypted;
  },
  comparing: async (password, encrypted) => {
    const check = await bcrypt.compare(password, encrypted).then((result) => {
      return result;
    });
    return check;
  },
};
