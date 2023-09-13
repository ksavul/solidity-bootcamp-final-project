/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Shop, ShopInterface } from "../../contracts/Shop";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pokeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pokeNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nftPrize",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "buyNFTWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenDigitalWithEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNftPrize",
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
    inputs: [],
    name: "pokeNft",
    outputs: [
      {
        internalType: "contract IPokeNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pokeToken",
    outputs: [
      {
        internalType: "contract IPokeToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161094938038061094983398181016040528101906100329190610163565b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028190555080600381905550505050506101ca565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100fa826100cf565b9050919050565b61010a816100ef565b811461011557600080fd5b50565b60008151905061012781610101565b92915050565b6000819050919050565b6101408161012d565b811461014b57600080fd5b50565b60008151905061015d81610137565b92915050565b6000806000806080858703121561017d5761017c6100ca565b5b600061018b87828801610118565b945050602061019c87828801610118565b93505060406101ad8782880161014e565b92505060606101be8782880161014e565b91505092959194509250565b610770806101d96000396000f3fe60806040526004361061004a5760003560e01c8063421ef1b01461004f5780634268fdf51461007a5780638655ee2f146100a55780638cdb0c4a146100bc578063baae0728146100e7575b600080fd5b34801561005b57600080fd5b506100646100f1565b6040516100719190610433565b60405180910390f35b34801561008657600080fd5b5061008f610117565b60405161009c919061046f565b60405180910390f35b3480156100b157600080fd5b506100ba61013b565b005b3480156100c857600080fd5b506100d16102c5565b6040516100de91906104a3565b60405180910390f35b6100ef6102cf565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb306003546040518363ffffffff1660e01b81526004016101989291906104df565b6020604051808303816000875af11580156101b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101db9190610545565b61021a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610211906105cf565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a1448194336004546040518363ffffffff1660e01b81526004016102799291906104df565b600060405180830381600087803b15801561029357600080fd5b505af11580156102a7573d6000803e3d6000fd5b50505050600460008154809291906102be9061061e565b9190505550565b6000600354905090565b60003411610312576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610309906106d8565b60405180910390fd5b60006002543461032291906106f8565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b815260040161037f9291906104df565b600060405180830381600087803b15801561039957600080fd5b505af11580156103ad573d6000803e3d6000fd5b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103f96103f46103ef846103b4565b6103d4565b6103b4565b9050919050565b600061040b826103de565b9050919050565b600061041d82610400565b9050919050565b61042d81610412565b82525050565b60006020820190506104486000830184610424565b92915050565b600061045982610400565b9050919050565b6104698161044e565b82525050565b60006020820190506104846000830184610460565b92915050565b6000819050919050565b61049d8161048a565b82525050565b60006020820190506104b86000830184610494565b92915050565b60006104c9826103b4565b9050919050565b6104d9816104be565b82525050565b60006040820190506104f460008301856104d0565b6105016020830184610494565b9392505050565b600080fd5b60008115159050919050565b6105228161050d565b811461052d57600080fd5b50565b60008151905061053f81610519565b92915050565b60006020828403121561055b5761055a610508565b5b600061056984828501610530565b91505092915050565b600082825260208201905092915050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b60006105b9601183610572565b91506105c482610583565b602082019050919050565b600060208201905081810360008301526105e8816105ac565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106298261048a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361065b5761065a6105ef565b5b600182019050919050565b7f457468657220616d6f756e74206d75737420626520677265617465722074686160008201527f6e20300000000000000000000000000000000000000000000000000000000000602082015250565b60006106c2602383610572565b91506106cd82610666565b604082019050919050565b600060208201905081810360008301526106f1816106b5565b9050919050565b60006107038261048a565b915061070e8361048a565b925082820261071c8161048a565b91508282048414831517610733576107326105ef565b5b509291505056fea2646970667358221220df8731296bf7a5e15c0ecd3b00771be796611b179320a4b2ed04a9ad42aff2c064736f6c63430008130033";

type ShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Shop__factory extends ContractFactory {
  constructor(...args: ShopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _pokeToken: AddressLike,
    _pokeNft: AddressLike,
    _ratio: BigNumberish,
    _nftPrize: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _pokeToken,
      _pokeNft,
      _ratio,
      _nftPrize,
      overrides || {}
    );
  }
  override deploy(
    _pokeToken: AddressLike,
    _pokeNft: AddressLike,
    _ratio: BigNumberish,
    _nftPrize: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _pokeToken,
      _pokeNft,
      _ratio,
      _nftPrize,
      overrides || {}
    ) as Promise<
      Shop & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Shop__factory {
    return super.connect(runner) as Shop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopInterface {
    return new Interface(_abi) as ShopInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Shop {
    return new Contract(address, _abi, runner) as unknown as Shop;
  }
}
