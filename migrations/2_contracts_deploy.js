const bep20Token = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(bep20Token);
};
