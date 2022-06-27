const { ethers } = require("ethers"); // for nodejs only

// Arjun sir Mainnet node hai, pls dont share with any1.....

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
const addr = "0xF9680D99D6C9589e2a93a78A04A279e509205945";
const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider);


// setInterval(myTimer, 3000);

var interval = setInterval(function(){myTimer()},2000);
function myTimer() {

priceFeed.latestRoundData().then((roundData) => {
  // Do something with roundData
  
let unixTimestamp = roundData.updatedAt.toString();

let milliseconds = unixTimestamp * 1000 // 1575909015000

const dateObject = new Date(milliseconds);

const humanDateFormat = dateObject.toLocaleString();

    console.log("Timestamp:", humanDateFormat ,   " ...................   ",      "Price:", roundData.answer.toString());


});
}