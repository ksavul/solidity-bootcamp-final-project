/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { PokeToken, PokeTokenInterface } from "../../contracts/PokeToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_shopContract",
        type: "address",
      },
    ],
    name: "addShop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentShop",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f506f6b65546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f50544b000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000775565b508060049081620000a1919062000775565b505050620000c4620000b86200015060201b60201c565b6200015860201b60201c565b6200010333620000d96200021e60201b60201c565b600a620000e79190620009ec565b620f4240620000f7919062000a3d565b6200022760201b60201c565b620001186000801b336200039460201b60201c565b6200014a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200039460201b60201c565b62000b74565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000299576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002909062000ae9565b60405180910390fd5b620002ad600083836200048660201b60201c565b8060026000828254620002c1919062000b0b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000374919062000b57565b60405180910390a362000390600083836200048b60201b60201c565b5050565b620003a682826200049060201b60201c565b620004825760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620004276200015060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b505050565b505050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200057d57607f821691505b60208210810362000593576200059262000535565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005fd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005be565b620006098683620005be565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000656620006506200064a8462000621565b6200062b565b62000621565b9050919050565b6000819050919050565b620006728362000635565b6200068a62000681826200065d565b848454620005cb565b825550505050565b600090565b620006a162000692565b620006ae81848462000667565b505050565b5b81811015620006d657620006ca60008262000697565b600181019050620006b4565b5050565b601f8211156200072557620006ef8162000599565b620006fa84620005ae565b810160208510156200070a578190505b620007226200071985620005ae565b830182620006b3565b50505b505050565b600082821c905092915050565b60006200074a600019846008026200072a565b1980831691505092915050565b600062000765838362000737565b9150826002028217905092915050565b6200078082620004fb565b67ffffffffffffffff8111156200079c576200079b62000506565b5b620007a8825462000564565b620007b5828285620006da565b600060209050601f831160018114620007ed5760008415620007d8578287015190505b620007e4858262000757565b86555062000854565b601f198416620007fd8662000599565b60005b82811015620008275784890151825560018201915060208501945060208101905062000800565b8683101562000847578489015162000843601f89168262000737565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620008ea57808604811115620008c257620008c16200085c565b5b6001851615620008d25780820291505b8081029050620008e2856200088b565b9450620008a2565b94509492505050565b600082620009055760019050620009d8565b81620009155760009050620009d8565b81600181146200092e576002811462000939576200096f565b6001915050620009d8565b60ff8411156200094e576200094d6200085c565b5b8360020a9150848211156200096857620009676200085c565b5b50620009d8565b5060208310610133831016604e8410600b8410161715620009a95782820a905083811115620009a357620009a26200085c565b5b620009d8565b620009b8848484600162000898565b92509050818404811115620009d257620009d16200085c565b5b81810290505b9392505050565b600060ff82169050919050565b6000620009f98262000621565b915062000a0683620009df565b925062000a357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620008f3565b905092915050565b600062000a4a8262000621565b915062000a578362000621565b925082820262000a678162000621565b9150828204841483151762000a815762000a806200085c565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000ad1601f8362000a88565b915062000ade8262000a99565b602082019050919050565b6000602082019050818103600083015262000b048162000ac2565b9050919050565b600062000b188262000621565b915062000b258362000621565b925082820190508082111562000b405762000b3f6200085c565b5b92915050565b62000b518162000621565b82525050565b600060208201905062000b6e600083018462000b46565b92915050565b6129868062000b846000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c8063715018a6116100f9578063a457c2d711610097578063d547741f11610071578063d547741f146104e2578063dd62ed3e146104fe578063e32bab0d1461052e578063f2fde38b1461054c576101a9565b8063a457c2d714610464578063a9059cbb14610494578063d5391393146104c4576101a9565b80638da5cb5b116100d35780638da5cb5b146103da57806391d14854146103f857806395d89b4114610428578063a217fddf14610446576101a9565b8063715018a61461039857806378fbb04f146103a257806379cc6790146103be576101a9565b80632f2ff15d116101665780633950935111610140578063395093511461030057806340c10f191461033057806342966c681461034c57806370a0823114610368576101a9565b80632f2ff15d146102aa578063313ce567146102c657806336568abe146102e4576101a9565b806301ffc9a7146101ae57806306fdde03146101de578063095ea7b3146101fc57806318160ddd1461022c57806323b872dd1461024a578063248a9ca31461027a575b600080fd5b6101c860048036038101906101c39190611b24565b610568565b6040516101d59190611b6c565b60405180910390f35b6101e66105e2565b6040516101f39190611c17565b60405180910390f35b61021660048036038101906102119190611ccd565b610674565b6040516102239190611b6c565b60405180910390f35b610234610697565b6040516102419190611d1c565b60405180910390f35b610264600480360381019061025f9190611d37565b6106a1565b6040516102719190611b6c565b60405180910390f35b610294600480360381019061028f9190611dc0565b6106d0565b6040516102a19190611dfc565b60405180910390f35b6102c460048036038101906102bf9190611e17565b6106f0565b005b6102ce610711565b6040516102db9190611e73565b60405180910390f35b6102fe60048036038101906102f99190611e17565b61071a565b005b61031a60048036038101906103159190611ccd565b61079d565b6040516103279190611b6c565b60405180910390f35b61034a60048036038101906103459190611ccd565b6107d4565b005b61036660048036038101906103619190611e8e565b61080d565b005b610382600480360381019061037d9190611ebb565b610821565b60405161038f9190611d1c565b60405180910390f35b6103a0610869565b005b6103bc60048036038101906103b79190611ebb565b61087d565b005b6103d860048036038101906103d39190611ccd565b6108f3565b005b6103e2610913565b6040516103ef9190611ef7565b60405180910390f35b610412600480360381019061040d9190611e17565b61093d565b60405161041f9190611b6c565b60405180910390f35b6104306109a8565b60405161043d9190611c17565b60405180910390f35b61044e610a3a565b60405161045b9190611dfc565b60405180910390f35b61047e60048036038101906104799190611ccd565b610a41565b60405161048b9190611b6c565b60405180910390f35b6104ae60048036038101906104a99190611ccd565b610ab8565b6040516104bb9190611b6c565b60405180910390f35b6104cc610adb565b6040516104d99190611dfc565b60405180910390f35b6104fc60048036038101906104f79190611e17565b610aff565b005b61051860048036038101906105139190611f12565b610b20565b6040516105259190611d1c565b60405180910390f35b610536610ba7565b6040516105439190611ef7565b60405180910390f35b61056660048036038101906105619190611ebb565b610bd1565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105db57506105da82610c54565b5b9050919050565b6060600380546105f190611f81565b80601f016020809104026020016040519081016040528092919081815260200182805461061d90611f81565b801561066a5780601f1061063f5761010080835404028352916020019161066a565b820191906000526020600020905b81548152906001019060200180831161064d57829003601f168201915b5050505050905090565b60008061067f610cbe565b905061068c818585610cc6565b600191505092915050565b6000600254905090565b6000806106ac610cbe565b90506106b9858285610e8f565b6106c4858585610f1b565b60019150509392505050565b600060066000838152602001908152602001600020600101549050919050565b6106f9826106d0565b61070281611191565b61070c83836111a5565b505050565b60006012905090565b610722610cbe565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461078f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078690612024565b60405180910390fd5b6107998282611286565b5050565b6000806107a8610cbe565b90506107c98185856107ba8589610b20565b6107c49190612073565b610cc6565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66107fe81611191565b6108088383611368565b505050565b61081e610818610cbe565b826114be565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61087161168b565b61087b6000611709565b565b61088561168b565b6108af7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6826111a5565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610905826108ff610cbe565b83610e8f565b61090f82826114be565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6060600480546109b790611f81565b80601f01602080910402602001604051908101604052809291908181526020018280546109e390611f81565b8015610a305780601f10610a0557610100808354040283529160200191610a30565b820191906000526020600020905b815481529060010190602001808311610a1357829003601f168201915b5050505050905090565b6000801b81565b600080610a4c610cbe565b90506000610a5a8286610b20565b905083811015610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690612119565b60405180910390fd5b610aac8286868403610cc6565b60019250505092915050565b600080610ac3610cbe565b9050610ad0818585610f1b565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610b08826106d0565b610b1181611191565b610b1b8383611286565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610bd961168b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3f906121ab565b60405180910390fd5b610c5181611709565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2c9061223d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610da4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9b906122cf565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e829190611d1c565b60405180910390a3505050565b6000610e9b8484610b20565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610f155781811015610f07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efe9061233b565b60405180910390fd5b610f148484848403610cc6565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f81906123cd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ff9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff09061245f565b60405180910390fd5b6110048383836117cf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561108a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611081906124f1565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111789190611d1c565b60405180910390a361118b8484846117d4565b50505050565b6111a28161119d610cbe565b6117d9565b50565b6111af828261093d565b6112825760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611227610cbe565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611290828261093d565b156113645760006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611309610cbe565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ce9061255d565b60405180910390fd5b6113e3600083836117cf565b80600260008282546113f59190612073565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114a69190611d1c565b60405180910390a36114ba600083836117d4565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361152d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611524906125ef565b60405180910390fd5b611539826000836117cf565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156115bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115b690612681565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116729190611d1c565b60405180910390a3611686836000846117d4565b505050565b611693610cbe565b73ffffffffffffffffffffffffffffffffffffffff166116b1610913565b73ffffffffffffffffffffffffffffffffffffffff1614611707576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116fe906126ed565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6117e3828261093d565b61185a576117f08161185e565b6117fe8360001c602061188b565b60405160200161180f9291906127e1565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118519190611c17565b60405180910390fd5b5050565b60606118848273ffffffffffffffffffffffffffffffffffffffff16601460ff1661188b565b9050919050565b60606000600283600261189e919061281b565b6118a89190612073565b67ffffffffffffffff8111156118c1576118c061285d565b5b6040519080825280601f01601f1916602001820160405280156118f35781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061192b5761192a61288c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061198f5761198e61288c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026119cf919061281b565b6119d99190612073565b90505b6001811115611a79577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611a1b57611a1a61288c565b5b1a60f81b828281518110611a3257611a3161288c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611a72906128bb565b90506119dc565b5060008414611abd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab490612930565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b0181611acc565b8114611b0c57600080fd5b50565b600081359050611b1e81611af8565b92915050565b600060208284031215611b3a57611b39611ac7565b5b6000611b4884828501611b0f565b91505092915050565b60008115159050919050565b611b6681611b51565b82525050565b6000602082019050611b816000830184611b5d565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611bc1578082015181840152602081019050611ba6565b60008484015250505050565b6000601f19601f8301169050919050565b6000611be982611b87565b611bf38185611b92565b9350611c03818560208601611ba3565b611c0c81611bcd565b840191505092915050565b60006020820190508181036000830152611c318184611bde565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c6482611c39565b9050919050565b611c7481611c59565b8114611c7f57600080fd5b50565b600081359050611c9181611c6b565b92915050565b6000819050919050565b611caa81611c97565b8114611cb557600080fd5b50565b600081359050611cc781611ca1565b92915050565b60008060408385031215611ce457611ce3611ac7565b5b6000611cf285828601611c82565b9250506020611d0385828601611cb8565b9150509250929050565b611d1681611c97565b82525050565b6000602082019050611d316000830184611d0d565b92915050565b600080600060608486031215611d5057611d4f611ac7565b5b6000611d5e86828701611c82565b9350506020611d6f86828701611c82565b9250506040611d8086828701611cb8565b9150509250925092565b6000819050919050565b611d9d81611d8a565b8114611da857600080fd5b50565b600081359050611dba81611d94565b92915050565b600060208284031215611dd657611dd5611ac7565b5b6000611de484828501611dab565b91505092915050565b611df681611d8a565b82525050565b6000602082019050611e116000830184611ded565b92915050565b60008060408385031215611e2e57611e2d611ac7565b5b6000611e3c85828601611dab565b9250506020611e4d85828601611c82565b9150509250929050565b600060ff82169050919050565b611e6d81611e57565b82525050565b6000602082019050611e886000830184611e64565b92915050565b600060208284031215611ea457611ea3611ac7565b5b6000611eb284828501611cb8565b91505092915050565b600060208284031215611ed157611ed0611ac7565b5b6000611edf84828501611c82565b91505092915050565b611ef181611c59565b82525050565b6000602082019050611f0c6000830184611ee8565b92915050565b60008060408385031215611f2957611f28611ac7565b5b6000611f3785828601611c82565b9250506020611f4885828601611c82565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f9957607f821691505b602082108103611fac57611fab611f52565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600061200e602f83611b92565b915061201982611fb2565b604082019050919050565b6000602082019050818103600083015261203d81612001565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061207e82611c97565b915061208983611c97565b92508282019050808211156120a1576120a0612044565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612103602583611b92565b915061210e826120a7565b604082019050919050565b60006020820190508181036000830152612132816120f6565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612195602683611b92565b91506121a082612139565b604082019050919050565b600060208201905081810360008301526121c481612188565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612227602483611b92565b9150612232826121cb565b604082019050919050565b600060208201905081810360008301526122568161221a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006122b9602283611b92565b91506122c48261225d565b604082019050919050565b600060208201905081810360008301526122e8816122ac565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000612325601d83611b92565b9150612330826122ef565b602082019050919050565b6000602082019050818103600083015261235481612318565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006123b7602583611b92565b91506123c28261235b565b604082019050919050565b600060208201905081810360008301526123e6816123aa565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612449602383611b92565b9150612454826123ed565b604082019050919050565b600060208201905081810360008301526124788161243c565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006124db602683611b92565b91506124e68261247f565b604082019050919050565b6000602082019050818103600083015261250a816124ce565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612547601f83611b92565b915061255282612511565b602082019050919050565b600060208201905081810360008301526125768161253a565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006125d9602183611b92565b91506125e48261257d565b604082019050919050565b60006020820190508181036000830152612608816125cc565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061266b602283611b92565b91506126768261260f565b604082019050919050565b6000602082019050818103600083015261269a8161265e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006126d7602083611b92565b91506126e2826126a1565b602082019050919050565b60006020820190508181036000830152612706816126ca565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061274e60178361270d565b915061275982612718565b601782019050919050565b600061276f82611b87565b612779818561270d565b9350612789818560208601611ba3565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006127cb60118361270d565b91506127d682612795565b601182019050919050565b60006127ec82612741565b91506127f88285612764565b9150612803826127be565b915061280f8284612764565b91508190509392505050565b600061282682611c97565b915061283183611c97565b925082820261283f81611c97565b9150828204841483151761285657612855612044565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006128c682611c97565b9150600082036128d9576128d8612044565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061291a602083611b92565b9150612925826128e4565b602082019050919050565b600060208201905081810360008301526129498161290d565b905091905056fea2646970667358221220f1844e3ca9bcbee214bd6ce7a399a350798bf73bd270f302dc6611694749077264736f6c63430008130033";

type PokeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PokeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PokeToken__factory extends ContractFactory {
  constructor(...args: PokeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PokeToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PokeToken__factory {
    return super.connect(runner) as PokeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PokeTokenInterface {
    return new Interface(_abi) as PokeTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PokeToken {
    return new Contract(address, _abi, runner) as unknown as PokeToken;
  }
}