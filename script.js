const { ethers } = require("ethers"); // for nodejs only


const provider = new ethers.providers.JsonRpcProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/mMfnhnw_str2-AI369Ert6FHpCYF9lRb"
);
const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "getRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
const Eth = "0xF9680D99D6C9589e2a93a78A04A279e509205945";
const Btc = "0xc907E116054Ad103354f2D350FD2514433D57F6f";
const Xrp = "0x785ba89291f676b5386652eB12b30cF361020694";
const EthpriceFeed = new ethers.Contract(Eth, aggregatorV3InterfaceABI, provider);
const BtcpriceFeed = new ethers.Contract(Btc, aggregatorV3InterfaceABI, provider);
const XrppriceFeed = new ethers.Contract(Xrp, aggregatorV3InterfaceABI, provider);


// setInterval(myTimer, 3000);

// var interval1 = setInterval(function(){ETH()},2000);
// function ETH() {

// priceFeed.latestRoundData().then((roundData) => {
//   // Do something with roundData
  
// let unixTimestamp = roundData.updatedAt.toString();

// let milliseconds = unixTimestamp * 1000 // 1575909015000

// const dateObject = new Date(milliseconds);

// const humanDateFormat = dateObject.toLocaleString();

//     console.log("Timestamp:", humanDateFormat ,   " ...................   ",      "Price:", roundData.answer.toString());


// });
// }







var interval2 = setInterval(function(){BTC()},2000);
function BTC() {

BtcpriceFeed.latestRoundData().then((roundData) => {
  // Do something with roundData
  
let unixTimestamp = roundData.updatedAt.toString();

let milliseconds = unixTimestamp * 1000 // 1575909015000

const dateObject = new Date(milliseconds);

const humanDateFormat = dateObject.toLocaleString();

    console.log("Timestamp:", humanDateFormat ,   " ...................   ",      "Price:", roundData.answer.toString());


});
}






// var interval3 = setInterval(function(){XRP()},2000);
// function XRP() {

// XrppriceFeed.latestRoundData().then((roundData) => {
//   // Do something with roundData
  
// let unixTimestamp = roundData.updatedAt.toString();

// let milliseconds = unixTimestamp * 1000 // 1575909015000

// const dateObject = new Date(milliseconds);

// const humanDateFormat = dateObject.toLocaleString();

//     console.log("Timestamp:", humanDateFormat ,   " ...................   ",      "Price:", roundData.answer.toString());


// });
// }