/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  require('@nomiclabs/hardhat-ethers');
 require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: "0.8.4",
// };

module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0 // hardhat london fork error fix for coverage
    }
  },
  paths: {
    sources: './src/*',
    artifacts: './build',
    tests: './src/tests/*'
  },
};
