import web3 from './web3';

const address = '0x34Da8b34c82988e7FF8F98CA35963057fC0ec9bb';

const abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "optionsExchange",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "oracleAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "optionsContracts",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_optionsExchangeAddr",
          "type": "address"
        },
        {
          "name": "_oracleAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "OptionsContractCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "asset",
          "type": "string"
        },
        {
          "indexed": true,
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "AssetAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "asset",
          "type": "string"
        },
        {
          "indexed": true,
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "AssetChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "asset",
          "type": "string"
        }
      ],
      "name": "AssetDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_collateralType",
          "type": "string"
        },
        {
          "name": "_collateralExp",
          "type": "int32"
        },
        {
          "name": "_underlyingType",
          "type": "string"
        },
        {
          "name": "_underlyingExp",
          "type": "int32"
        },
        {
          "name": "_oTokenExchangeExp",
          "type": "int32"
        },
        {
          "name": "_strikePrice",
          "type": "uint256"
        },
        {
          "name": "_strikeExp",
          "type": "int32"
        },
        {
          "name": "_strikeAsset",
          "type": "string"
        },
        {
          "name": "_expiry",
          "type": "uint256"
        },
        {
          "name": "_windowSize",
          "type": "uint256"
        }
      ],
      "name": "createOptionsContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNumberOfOptionsContracts",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "addAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "changeAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        }
      ],
      "name": "deleteAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_asset",
          "type": "string"
        }
      ],
      "name": "supportsAsset",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

export default new web3.eth.Contract(abi, address);
