import React, { Component } from 'react';
import pic1 from './assets/1pic.png';
import pic2 from './assets/2pic.png';
import pic3 from './assets/3pic.png';
import pic4 from './assets/4pic.png';
import coins from './assets/coins.png';
import secretGif from './assets/logo-up.png';
import Web3Modal from "web3modal";
import down from './assets/down-arrow.png';
import './App.css';
import nft from './assets/6.png';
import Footer from './Components/footer';
import './stake.css';
import homeL from './assets/home.png';
import twitter from './assets/twitter.png';
import $ from 'jquery';
import telegram from './assets/telegram.png';
import logoUp from './assets/logo-up.png';
import bnb from './assets/bnb.png';
import mm from './assets/MetaMask_Fox.svg.png';
import wc from './assets/wc.png';
import { ethers, utils } from 'ethers';

// This function detects most providers injected at window.ethereum.
import MobileDetect from 'mobile-detect';

const home = () => {
	window.open("https://bonewhale.com/");
}

const tweet = () => {
	window.open("https://twitter.com/bonewhaletoken");
}

const tg = () => {
	window.open("https://t.me/+S_LoK30EjwthYmI5");
}

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;


let account;
let mintAmount = 1;
let valueOfNFTs = 0;
let totalSupplyNFT;
let totalSupplyNFT2;
let maxMintNFTs;
let onlyLeft;
let owner;
let publicSale;
let user_input;
let wMintAmount;
let myTokens = [];
let myTokens2 = [];
let adminWhitelistAddresses = [];
let adminPanel = 0;
let adminWhitelistAddresses2 = [];
let maxTokensToBuy = "";
let ingvalue;
let myTokenIDs = [];
let x = '';
let myTokenURLs = '';
let myTokenIDsForm = [];
let z = 0;
let myStakeNFT = '';
let isApproved = false;
let getMyStakedTokens = [];
let getStakedDetailsWindow = 0;
let myStakedTokenCount;
let getRewards = [];
let q = -1;
let getRewardsRounded;
let elementArray = [];
let rewardsTime;
let rewardDetails;
let getMyOwnNFTDetailsWindow = 0;
let myTokenAmount;
let pendingRewards = 0;
let allRewardsRealeasedByOwners = [];
let countOfOverallStakers;
let stakers;
let contractStaking;
let contractNFT;
let contractToken;
let rewardsAmount;

let ABIStaking = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIDs",
				"type": "uint256[]"
			}
		],
		"name": "batchClaimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIDs",
				"type": "uint256[]"
			}
		],
		"name": "batchStakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIDs",
				"type": "uint256[]"
			}
		],
		"name": "batchUnstakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			}
		],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_boneRewardsAmount",
				"type": "uint256"
			}
		],
		"name": "setBoneRewardsAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardsAmount",
				"type": "uint256"
			}
		],
		"name": "setRewardsAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			}
		],
		"name": "stakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenWithdrawal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_decimalNumber",
				"type": "uint256"
			}
		],
		"name": "setDecimalNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftContract",
				"type": "address"
			}
		],
		"name": "setNFTContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardsCircle",
				"type": "uint256"
			}
		],
		"name": "setRewardsCircle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardsRate",
				"type": "uint256"
			}
		],
		"name": "setRewardsRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			}
		],
		"name": "setTokenContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			}
		],
		"name": "unstakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_nft_Contract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_token_Contract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "boneRewardsAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "countofMyStakedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countOfOverallStakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "depositedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nft",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nft_awards_contracts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nft_awards_tokenIDs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nftOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsCircle",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardsReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakedTokenOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenStakedDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenStakedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalBoneRewardReleased",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBoneRewardsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalRewardReleased",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRewardsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let addressStaking = "0x9037fD6082C79f99c1c2626d90F2dEc2b727CeDa";

let ABIToken = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let addressToken = "0xc28bed74d149C3282048a162Fa20327996B1ef3a";

let ABINFT = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "receiver",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "quantity",
				"type": "uint256[]"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initNotRevealedUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalToCurrentOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ApproveToCaller",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "OperatorNotAllowed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TokenIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setMax_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MAX_SUPPLY",
				"type": "uint256"
			}
		],
		"name": "setMAX_SUPPLY",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_notRevealedURI",
				"type": "string"
			}
		],
		"name": "setNotRevealedURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_publicSaleCost",
				"type": "uint256"
			}
		],
		"name": "setPublicSaleCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_royaltyFeesInBips",
				"type": "uint96"
			}
		],
		"name": "setRoyaltyInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_total_wl_limit",
				"type": "uint256"
			}
		],
		"name": "setTotal_wl_limit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_whitelistCost",
				"type": "uint256"
			}
		],
		"name": "setWhitelistCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_wl_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setWl_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_public_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_wl_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleReveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "wl",
				"type": "address[]"
			}
		],
		"name": "whitelistAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "whitelistMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBaseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "notRevealedUri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "OPERATOR_FILTER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IOperatorFilterRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "public_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "publicMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSaleCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_wl_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_wl_limit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wl_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wl_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wlEligible",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wlMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let addressNFT = "0x86c9A731b6154e2f2743Fdd95ee736489618a6B7";

class Stake extends Component {

	state = {
		walletAddress: "",
		totalSupply: "",
		currentPrice: "",
		nextPrice: "",
		nextSessionAmount: "",
		onlyLeftAmount: "",
		statusError: false,
		statusLoading: false,
		success: false,
		nftMintingAmount: '1',
		totalValue: "",
		presaleValue: "0",
		maxmint: '',
		_adminPanel: 0,
		_adminWhitelistAddresses: [],
		_adminWhitelistAddresses2: [],
		_maxTokensToBuy: "",
		_ingValue: '',
		_myTokenIDs: [],
		_obj: 'pic',
		_myTokenURLs: '',
		_num: '',
		_value: '',
		_myStakeNFT: '',
		_isApproved: false,
		_getMyStakedTokens: [],
		_getStakedDetailsWindow: 0,
		_myStakedTokenCount: '',
		_getRewards: [],
		_rewardDetails: [],
		_elementArray: [],
		_getMyOwnNFTDetailsWindow: 0,
		_myTokenAmount: '',
		_pendingRewards: 0,
		_newPendingRewards: 0,
		_allRewardsRealeasedByOwners: [],
		_countOfOverallStakers: '',
		_stakers: '',
		_navbarOpen: 0,
		_rewardsAmount: ''
	}


	async checkForMetaMask() {
		if (typeof window.ethereum !== 'undefined') {
			// MetaMask is detected, show the MetaMask button
			$('#buttonForMetaMask').show();
		} else {
			// No MetaMask detected, show the normal browser button
			$('#buttonForNormalBrowser').show();
		}
	}

	async componentDidMount() {

		try{

		if (!window.ethereum) {
			window.open("https://metamask.app.link/dapp/kudeta.io/");
			//window.location.replace("https://metamask.io");

			// Render something or redirect as needed
		} else {
			this.walletConnect();

			const handleAccountsChanged = (accounts) => {
				if (window.ethereum.chainId == "0x13881") {
					//infoNotification(accounts[0]);
				}
				// Just to prevent reloading for the very first time
				if (JSON.parse(localStorage.getItem('activeAccount')) != null) {
					setTimeout(() => { window.location.reload() }, 3000);
				}
			};

			const handleChainChanged = (chainId) => {
				if (chainId != "0x13881") {
					//infoNotification();
				}
				window.location.reload();
			}

			const handleDisconnect = () => { };

			window.ethereum.on("accountsChanged", handleAccountsChanged);
			window.ethereum.on("chainChanged", handleChainChanged);
			window.ethereum.on("disconnect", handleDisconnect);

		}


		totalSupplyNFT = await contractNFT.totalSupply();
		this.setState({ totalSupply: totalSupplyNFT });
		console.log("Total Supply:" + totalSupplyNFT);


		rewardsAmount = await contractStaking.rewardsAmount();
		this.setState({ _rewardsAmount: rewardsAmount });

		isApproved = await contractNFT.isApprovedForAll(account, addressStaking);
		this.setState({ _isApproved: isApproved });
		console.log(isApproved);

		publicSale = await contractNFT.balanceOf(account);
		this.setState({ myNFTWallet: publicSale });

		myStakedTokenCount = await contractStaking.countofMyStakedTokens(account);
		console.log("myStakedTokenCount : " + myStakedTokenCount);

		myTokenAmount = await contractToken.balanceOf(account);
		this.setState({ _myTokenAmount: myTokenAmount });

		let a;
		for (a = 0; a < myStakedTokenCount; a++) {
			getMyStakedTokens[a] = await contractStaking.stakedTokens(account, a);
			this.setState({ _getMyStakedTokens: getMyStakedTokens });
			console.log("getMyStakedTokens : " + getMyStakedTokens);

			let tokenTime = await contractStaking.tokenStakedTime(account, getMyStakedTokens[a]);
			let timeDuration = Date.now() - (tokenTime * 1000);

			if (timeDuration >= 0) {

				getRewards[a] = (Date.now() - (tokenTime * 1000)) * this.state._rewardsAmount / 86400000;

			} else {
				getRewards[a] = 0;
			}

			elementArray[a] = [getMyStakedTokens[a], getRewards[a].toFixed(4)];
			this.setState({ _elementArray: elementArray });

			this.setState({ _getRewards: getRewards });
			console.log("tokenTime :" + tokenTime * 1000);
			console.log("tokenTimeDuration :" + timeDuration);
			console.log("getRewards : " + getRewards[a].toFixed(2));

			this.setState({ _getMyStakedTokens: getMyStakedTokens });
			console.log("getMyStakedTokens : " + getMyStakedTokens);

		}

		for (let q = 0; q < getRewards.length; q++) {
			pendingRewards = pendingRewards * 1 + getRewards[q] * 1;
			this.setState({ _newPendingRewards: pendingRewards * 1 });
			console.log("_newPendingRewards :" + this.state._newPendingRewards);
		}

		for (let y = 0; y < this.state.myNFTWallet; y++) {
			myTokenIDs[y] = await contractNFT.tokenOfOwnerByIndex(account, y);
			this.setState({ _myTokenIDs: myTokenIDs });

		}

		console.log("myTokenIDs : " + myTokenIDs[0]);
		console.log("myTokenIDs : " + this.state._myTokenIDs);

		owner = await contractNFT.owner();
		console.log("Owner" + owner);


	} catch(err) {
		console.log("err: " + err);

	}
}
//.....................................................................//





onSubmit2 = async event => {
	////event.preventDefault();

	console.log(this.state.walletAddress);

	try {

		let owner = await contractNFT.owner();

		//	if (account != owner) {

		try {



			console.log("minAmount:" + mintAmount);
			console.log("valueOfNFTs:" + valueOfNFTs);

			//contract = new window.web3.eth.Contract(ABI,'0x802ec13e2e3afe078bc15035f80f0f82bea9bc6c');

			this.setState({ statusError: false, statusLoading: true });
			await contractNFT.mint(mintAmount * 1).send({ /*gasLimit: 390000,*//*gasLimit: 285000, maxPriorityFeePerGas: "196000000000", maxFeePerGas: "202000000000", */from: account, value: this.state.totalValue * 0 });
			this.setState({ statusLoading: false, success: true });
			console.log("Mint Amount :" + this.state.mintAmount);

		} catch (err) {
			this.setState({ errorMassage: "ERROR : " + err.message, statusLoading: false, success: false, statusError: true });
			console.log(err);

		}

	} catch (err) {

		console.log(err);

	}
}

walletConnect = async event => {
	////event.preventDefault();

	const web3Modal = new Web3Modal();
	const connection = await web3Modal.connect();

	if (typeof window.ethereum !== 'undefined') {

		let provider = new ethers.providers.Web3Provider(connection);
		const getnetwork = await provider.getNetwork();
		const goerliChainId = 80001;

		if (getnetwork.chainId != goerliChainId) {
			//warningNotification();
			try {
				await provider.provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: utils.hexValue(goerliChainId) }]
				}).then(() => window.location.reload());
			} catch (switchError) {
				if (switchError.code === 4902) {
					try {
						await provider.provider.request({
							method: "wallet_addEthereumChain",
							params: [
								{
									chainId: utils.hexValue(goerliChainId),
									chainName: 'Mumbai',
									rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
									blockExpolrerUrls: ['https://mumbai.polygonscan.com'],
									nativeCurrency:
									{
										decimals: 18,
										symbol: 'MATIC'
									}
								}
							]
						}.then(() => window.location.reload()));
					} catch (addError) {
						throw addError;
					}
				}
			}
		} else {
			const signer = provider.getSigner();
			const signerAddress = await signer.getAddress();

			contractNFT = new ethers.Contract(ABINFT, addressNFT, signer);
			console.log("contractNFT :" + contractNFT);

			contractToken = new ethers.Contract(ABIToken, addressToken, signer);
			console.log("contractToken :" + contractToken);

			contractStaking = new ethers.Contract(ABIStaking, addressStaking, signer);
			console.log("contractStaking :" + contractStaking);

		}
	}
	try {

		totalSupplyNFT = await contractNFT.totalSupply();
		this.setState({ totalSupply: totalSupplyNFT });
		console.log("Total Supply:" + totalSupplyNFT);

		rewardsAmount = await contractStaking.rewardsAmount();
		this.setState({ _rewardsAmount: rewardsAmount });

		isApproved = await contractNFT.isApprovedForAll(account, addressStaking);
		this.setState({ _isApproved: isApproved });
		console.log(isApproved);

		publicSale = await contractNFT.balanceOf(account);
		this.setState({ myNFTWallet: publicSale });

		myStakedTokenCount = await contractStaking.countofMyStakedTokens(account);
		console.log("myStakedTokenCount : " + myStakedTokenCount);

		myTokenAmount = await contractToken.balanceOf(account);
		this.setState({ _myTokenAmount: myTokenAmount });

		let a;
		for (a = 0; a < myStakedTokenCount; a++) {
			getMyStakedTokens[a] = await contractStaking.stakedTokens(account, a);
			this.setState({ _getMyStakedTokens: getMyStakedTokens });
			console.log("getMyStakedTokens : " + getMyStakedTokens);

			let tokenTime = await contractStaking.tokenStakedTime(account, getMyStakedTokens[a]);
			let timeDuration = Date.now() - (tokenTime * 1000);

			if (timeDuration >= 0) {

				getRewards[a] = (Date.now() - (tokenTime * 1000)) * this.state._rewardsAmount / 86400000;

			} else {
				getRewards[a] = 0;
			}

			elementArray[a] = [getMyStakedTokens[a], getRewards[a].toFixed(4)];
			this.setState({ _elementArray: elementArray });

			this.setState({ _getRewards: getRewards });
			console.log("tokenTime :" + tokenTime * 1000);
			console.log("tokenTimeDuration :" + timeDuration);
			console.log("getRewards : " + getRewards[a].toFixed(2));

			this.setState({ _getMyStakedTokens: getMyStakedTokens });
			console.log("getMyStakedTokens : " + getMyStakedTokens);

		}

		for (let q = 0; q < getRewards.length; q++) {
			pendingRewards = pendingRewards * 1 + getRewards[q] * 1;
			this.setState({ _newPendingRewards: pendingRewards * 1 });
			console.log("_newPendingRewards :" + this.state._newPendingRewards);
		}

		for (let y = 0; y < this.state.myNFTWallet; y++) {
			myTokenIDs[y] = await contractNFT.tokenOfOwnerByIndex(account, y);
			this.setState({ _myTokenIDs: myTokenIDs });

		}

		console.log("myTokenIDs : " + myTokenIDs[0]);
		console.log("myTokenIDs : " + this.state._myTokenIDs);

		owner = await contractNFT.owner();
		console.log("Owner" + owner);


	} catch (err) {
		console.log("err: " + err);
	}
}

walletDisconnect = async event => {
	

}

setApprovalForAll = async event => {
	////event.preventDefault();

	try {
		await contractNFT.setApprovalForAll(addressStaking, true);
	} catch (err) {
		console.log(err);
	}

	window.location.reload(true);

}

	async stake(staking_id) {


	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + staking_id);

	try {
		isApproved = await contractNFT.isApprovedForAll(account, addressStaking);
		this.setState({ _isApproved: isApproved });
		console.log(isApproved);

		if (isApproved) {
			await contractStaking.stakeNFT(staking_id).send({ /*maxPriorityFeePerGas: 40000000000, gasLimit: 285000,*/ gasLimit: 685000, from: account });

		} else {

			await contractNFT.setApprovalForAll(addressStaking, true).send({ /*maxPriorityFeePerGas: 40000000000, gasLimit: 285000,*/ gasLimit: 685000, from: account });

		}
		window.location.reload(true);


	} catch (err) {
		console.log(err);
	}


}

batchStake = async event => {
	////event.preventDefault();

	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + myTokenIDs);

	try {
		isApproved = await contractNFT.isApprovedForAll(account, addressStaking);
		this.setState({ _isApproved: isApproved });
		console.log(isApproved);

		if (isApproved) {
			await contractStaking.batchStakeNFT(myTokenIDs).send({ /*maxPriorityFeePerGas: 40000000000, gasLimit: 285000,*/ gasLimit: 685000, from: account });

		} else {

			await contractNFT.setApprovalForAll(addressStaking, true).send({ /*maxPriorityFeePerGas: 40000000000, gasLimit: 285000,*/ gasLimit: 685000, from: account });

		}
		window.location.reload(true);

	} catch (err) {
		console.log(err);
	}


}

batchUnstake = async event => {
	////event.preventDefault();

	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + getMyStakedTokens);

	try {

		await contractStaking.batchUnstakeNFT(getMyStakedTokens).send({ /*maxPriorityFeePerGas: 40000000000,/*gasLimit: 285000,*/ gasLimit: 685000, from: account });

		window.location.reload(true);

	} catch (err) {
		console.log(err);
	}

}

batchClaimRewards = async event => {
	////event.preventDefault();

	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + getMyStakedTokens);

	try {

		await contractStaking.batchClaimRewards(getMyStakedTokens).send({ /*maxPriorityFeePerGas: 40000000000,*/ /*gasLimit: 285000,*/ gasLimit: 685000, from: account });
		window.location.reload(true);

	} catch (err) {
		console.log(err);
	}

}

	async claimRewards(claiming_id) {

	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + claiming_id);

	try {

		await contractStaking.claimRewards(claiming_id).send({ /*maxPriorityFeePerGas: 40000000000,*/ gasLimit: 685000, from: account });
		window.location.reload(true);

	} catch (err) {
		console.log(err);
	}


}

	async unstake(unstaking_id) {

	/*var tokenIDForm = document.getElementById('tokenIDURL').value;*/
	console.log("tokenIDForm:" + unstaking_id);

	try {

		await contractStaking.unstakeNFT(unstaking_id).send({ /*maxPriorityFeePerGas: 40000000000,*/ gasLimit: 685000, from: account });
		window.location.reload(true);


	} catch (err) {
		console.log(err);
	}


}

getStakedDetails = async event => {
	////event.preventDefault();

	if (this.state.walletAddress != "") {
		getStakedDetailsWindow = 1;
		this.setState({ _getStakedDetailsWindow: getStakedDetailsWindow });
		console.log("getStakedDetailsWindow :" + getStakedDetailsWindow);
	}

	try {

		myStakedTokenCount = await contractStaking.countofMyStakedTokens(account);
		console.log("myStakedTokenCount : " + myStakedTokenCount);

		let a;
		for (a = 0; a < myStakedTokenCount; a++) {
			getMyStakedTokens[a] = await contractStaking.stakedTokens(account, a);
			//	getRewards = await contractStaking.getRewards(getMyStakedTokens[a]).send({ from: account });

			let tokenTime = await contractStaking.tokenStakedTime(account, getMyStakedTokens[a]);
			let timeDuration = Date.now() - (tokenTime * 1000);

			if (timeDuration >= 0) {

				getRewards[a] = (Date.now() - (tokenTime * 1000)) * this.state._rewardsAmount / 86400000;

			} else {
				getRewards[a] = 0;
			}

			elementArray[a] = [getMyStakedTokens[a], getRewards[a].toFixed(4)];
			this.setState({ _elementArray: elementArray });

			this.setState({ _getRewards: getRewards });
			console.log("tokenTime :" + tokenTime * 1000);
			console.log("tokenTimeDuration :" + timeDuration);
			console.log("getRewards : " + getRewards[a].toFixed(2));

			this.setState({ _getMyStakedTokens: getMyStakedTokens });
			console.log("getMyStakedTokens : " + getMyStakedTokens);

		}


		/*for (let q = 0; q < getRewards.length; q++) {
			pendingRewards = pendingRewards * 1 + getRewards[q] * 1;
			this.setState({ _newPendingRewards: pendingRewards * 1 });
			console.log("_newPendingRewards :" + this.state._newPendingRewards);
	
		}*/


	} catch (err) {
		console.log(err);
	}

}

getMyOwnNFTDetails = async event => {
	////event.preventDefault();

	if (this.state.walletAddress != "") {
		getMyOwnNFTDetailsWindow = 1;
		this.setState({ _getMyOwnNFTDetailsWindow: getMyOwnNFTDetailsWindow });
		console.log("getMyOwnNFTDetailsWindow :" + getMyOwnNFTDetailsWindow);
	}

	try {


		for (let y = 0; y < this.state.myNFTWallet; y++) {
			myTokenIDs[y] = await contractNFT.tokenOfOwnerByIndex(account, y);
			this.setState({ _myTokenIDs: myTokenIDs })

		}


	} catch (err) {
		console.log(err);
	}

}

closeWindow = async event => {
	////event.preventDefault();

	getStakedDetailsWindow = 0;
	this.setState({ _getStakedDetailsWindow: getStakedDetailsWindow });

}

closeWindow2 = async event => {
	////event.preventDefault();

	getMyOwnNFTDetailsWindow = 0;
	this.setState({ _getMyOwnNFTDetailsWindow: getMyOwnNFTDetailsWindow });

}


closeNav = () => {
	const navBar = document.querySelector(".littleNav");
	navBar.classList.add("hidden");
}

closeNav = async event => {
	////event.preventDefault();

	this.setState({ _navbarOpen: 0 });
}

navbarOpen = async event => {
	////event.preventDefault();

	this.setState({ _navbarOpen: 1 });
}

walletConnect2 = async event => {
	////event.preventDefault();
	/*
			// Check if MetaMask is installed
			if (window.ethereum) {
				const provider = window.ethereum;
	
				try {
					// Request access to the user's MetaMask wallet
					await provider.request({ method: "eth_requestAccounts" });
	
					// Deep link to your website
					window.location.href = "https://metamask.app.link/dapp/nftstake.Dork Wadzchain.io/";
					// window.location.href = "https://go.cb-w.com/dapp?cb_url=https:///stake-Dork Wadzchain.pages.dev/";
	
	
	
	
				} catch (error) {
					console.error(error);
				}
			} else {
				// MetaMask is not installed, provide a link to download
				window.location.href = "https://metamask.app.link/dapp/nftstake.Dork Wadzchain.io/";
			}
	
	*/

	// This returns the provider, or null if it wasn't detected.
	//const provider = await detectEthereumProvider();

	/*if (provider) {
	  // From now on, this should always be true:
	  // provider === window.ethereum
	  startApp(provider); // initialize your app
	} else {
	  console.log('Please install MetaMask!');
	}*/

	// startApp(provider) {
	// If the provider returned by detectEthereumProvider isn't the same as
	// window.ethereum, something is overwriting it – perhaps another wallet.

	// Deep link to your website
	window.location.href = "https://metamask.app.link/dapp/nftstake.Dork Wadzchain.io/";

	/*  if (provider !== window.ethereum) {
		console.error('Do you have multiple wallets installed?');
	  }*/
	// Access the decentralized web!
}




render() {

	return (
		<div class="stakeMainDiv">
			<div class="stakeMain">

				<div class="navBarStake">

					<Element name="up">

						<div class="miniBarMain">
							<div class="title" onClick={home}><img class="logoUp" src={logoUp} />Dork Wadz</div>
							<div class="connect2">
								{this.state.walletAddress === '' ?
									(<form onSubmit={this.walletConnect} class="connect2-2">
										<button class="button-87">
											Connect
										</button>
									</form>) : (<form class="connect2-2" onSubmit={this.walletDisconnect}>
										<button class="button-87">
											{this.state.walletAddress.slice(0, 3) + "..." + this.state.walletAddress.slice(39, 42)}

										</button>
									</form>)}

								<div class="connect2btns">
									<form class="connect2-2-Mob" onClick={this.walletConnect}>

										<img class="mm" onClick={this.mm} src={mm} />

									</form>

									{this.state.walletAddress === '' ?
										(<form onClick={this.walletConnect} class="connect2-2-Mob">
											<img onClick={this.walletConnect} class="mm" src={wc} />
										</form>) : (<form onSubmit={this.walletDisconnect}>
											<button class="connect2-2-Mob-2">
												{this.state.walletAddress.slice(0, 3) + "..." + this.state.walletAddress.slice(39, 42)}

											</button>
										</form>)}
								</div>
							</div>
						</div>

						<div class="headers">

							<div class="h1">
								<div class="title" onClick={home}><img class="logoUp" src={logoUp} />Dork Wadz</div>

								<div class="right">

									<div class="icons">
										<img onClick={home} src={homeL} />
										<img onClick={tweet} src={twitter} />
										<img onClick={tg} src={telegram} />
									</div>
									<div class="connect2">

										{this.state.walletAddress === '' ?
											(<form onSubmit={this.walletConnect} class="connect2-2">
												<button class="button-87">
													Connect
												</button>
											</form>) : (<form class="connect2-2" onSubmit={this.walletDisconnect}>
												<button class="button-87">
													{this.state.walletAddress.slice(0, 3) + "..." + this.state.walletAddress.slice(39, 42)}

												</button>
											</form>)}

									</div>

								</div>

							</div>
						</div>

						{this.state._navbarOpen > 0 ?
							(<div class="littleNav" data-aos="fade-left">
								<div class="icons">
									<img onClick={home} src={homeL} />
									<img onClick={tweet} src={twitter} />
									<img onClick={tg} src={telegram} />
								</div>
							</div>) : null}
					</Element>

				</div>

				<div class="markBarMain">
					<div class="markBar">

						<div class="markBarCon">
							<img src={pic1} />
							<div class="markBar2">
								<div class="num">{this.state._getMyStakedTokens.length}</div>
								<div class="name">STAKED</div>
							</div>
						</div>

						<div class="markBarCon">
							<img src={pic2} />
							<div class="markBar2">
								<div class="num">{this.state._rewardsAmount} $WBONES / Day</div>
								<div class="name">REWARDS</div>
							</div>
						</div>

						<div class="markBarCon">
							<img src={pic3} />
							<div class="markBar2">
								<div class="num">{(this.state._myTokenAmount / 1000000000).toFixed(2)} $WBONES</div>
								<div class="name">BALANCE</div>
							</div>
						</div>

						<div class="markBarCon">
							<img src={pic4} />
							<div class="markBar2">
								<div class="num">{this.state._newPendingRewards.toFixed(2)} $WBONES</div>
								{this.state._newPendingRewards < 0.001 ?

									(<button class="nameClaim2" onClick={this.batchClaimRewards} disabled>CLAIM ALL</button>) :
									(<button class="nameClaim" onClick={this.batchClaimRewards}>CLAIM ALL</button>)}
							</div>
						</div>

					</div>

				</div>

				<div class="boardMain">
					<div class="board">

						<div class="boardPics">
							<div class="stakeT">STAKE</div>

						</div>

						<div class="boardPics">
							<div class="image2Size">
								<img class="nftImgLogo" src={nft} />
								<div class="num2">Dork Wadz NFTs : {this.state.myNFTWallet}</div>
								<div class="name2">Available</div>
							</div>

							<div class="image2Size">
								<img class="nftImg" src={coins} />
								<div class="num2">$Rewards : {this.state._rewardsAmount}</div>
								<div class="name2">Per Day</div>
							</div>
						</div>


						<div class="walletConnect">
							<form class="formStake" onSubmit={this.getMyOwnNFTDetails}>
								<button class="wallet3" type='submit'>DWADZ to Stake<img class="lookDown" src={down} /></button>
							</form>
						</div>

						<div class="approveBtns">
							{this.state._isApproved === false ?
								(<form onSubmit={this.setApprovalForAll}><button class="approveBtns1">APPROVE</button></form>) :
								(<form onSubmit={this.batchStake}><button class="approveBtns1">STAKE ALL</button></form>)}
						</div>
					</div>

					<div class="board">

						<div class="boardPics">
							<div class="stakeT">UNSTAKE</div>


						</div>

						<div class="boardPics">
							<div>
								<img class="nftImgLogo" src={nft} />
								<div class="num2">Dork Wadz NFTs : {this.state._getMyStakedTokens.length}</div>
								<div class="name2">Staked</div>
							</div>
						</div>

						<div class="walletConnect">
							<form class="formStake" onSubmit={this.getStakedDetails}>
								<button class="wallet3" type='submit'>DWADZ to Unstake<img class="lookDown" src={down} /></button>
							</form>
						</div>

						<div class="approveBtns">
							{this.state._getMyStakedTokens.length < 1 ?
								(<form onSubmit={this.batchUnstake}><button class="approveBtns3Dis" disabled>UNSTAKE ALL</button>
								</form>) :
								(<form onSubmit={this.batchUnstake}><button class="approveBtns3">UNSTAKE ALL</button></form>)}
						</div>

					</div>
				</div>

				{this.state._getStakedDetailsWindow > 0 ? (
					<div class="formMain1">
						<div class="formMain">

							<div class="tS">My Staked NFTs</div>

							<div class="tokenIds" >
								{this.state._elementArray.map((element1) => {

									console.log("ID :" + element1[0]);
									console.log("Time :" + element1[1]);

									let url = secretGif;

									// url = "https://dogeum.com/images/" + ID + ".jpg";
									console.log("url :" + url);
									console.log("element1 :" + element1[0]);
									console.log("rewards1 :" + element1[1]);

									return (
										<div class="tokenIds2">
											<div class="flip-card">
												<div class="flip-card-inner">
													<div class="flip-card-front">
														<div class="unStakeImg"><img class="images_show" src={url} /></div>
													</div>

													<div class="flip-card-back">
														<button class="stake2" onClick={() => this.claimRewards(element1[0])}>
															Claim
															<div class="elementName2">{element1[1]} <img class="claimIcon" src={logoUp} /></div>
														</button>

														<div class="elementName3">ID : {element1[0]}</div>
														{element1[1] >= 0 ?
															(<button class="stake3" onClick={() => this.unstake(element1[0])}>Unstake</button>) :
															(<button class="stake3" disabled>Unstake</button>)}

													</div>
												</div>
											</div></div>);

								})}
							</div>

							<form onSubmit={this.closeWindow}>
								<button class="closeNote">✖</button>
							</form>
						</div></div>) : null}


				{this.state._getMyOwnNFTDetailsWindow > 0 ?
					(<div class="formMain1">
						<div class="formMain">
							<div class="tS">My Own NFTs</div>

							<div class="tokenIds" >

								{this.state._myTokenIDs.map((element) => {


									var ID = element;

									let url = secretGif;

									//url = "https://dogeum.com/images/" + ID + ".jpg";
									console.log("url :" + url);

									return (
										<div class="tokenIds2">
											<div class="flip-card">
												<div class="flip-card-inner">
													<div class="flip-card-front">

														<img class="images_show" src={url} /></div>
													<div class="flip-card-back">
														<div class="elementName">{element}</div>
														{this.state._isApproved ?
															(<button class="stake" onClick={() => this.stake(element)}>Stake</button>) :
															(<button class="stake" onClick={() => this.stake(element)}>Approve</button>)
														}
													</div>
												</div>
											</div></div>);



								})}


							</div>
							<form onSubmit={this.closeWindow2}>
								<button class="closeNote">✖</button>
							</form>
						</div></div>
					) :
					null}

			</div>
			<Footer />

		</div>)
}
	}

export default Stake;