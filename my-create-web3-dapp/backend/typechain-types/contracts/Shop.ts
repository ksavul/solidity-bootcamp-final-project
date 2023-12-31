/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ShopInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyNFTWithToken"
      | "buyTokenDigitalWithEther"
      | "getNftPrize"
      | "mintedTokens"
      | "pokeNft"
      | "pokeToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyNFTWithToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenDigitalWithEther",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNftPrize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pokeNft", values?: undefined): string;
  encodeFunctionData(functionFragment: "pokeToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "buyNFTWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenDigitalWithEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNftPrize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pokeNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pokeToken", data: BytesLike): Result;
}

export interface Shop extends BaseContract {
  connect(runner?: ContractRunner | null): Shop;
  waitForDeployment(): Promise<this>;

  interface: ShopInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  buyNFTWithToken: TypedContractMethod<[], [void], "nonpayable">;

  buyTokenDigitalWithEther: TypedContractMethod<[], [void], "payable">;

  getNftPrize: TypedContractMethod<[], [bigint], "view">;

  mintedTokens: TypedContractMethod<[], [bigint[]], "view">;

  pokeNft: TypedContractMethod<[], [string], "view">;

  pokeToken: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyNFTWithToken"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "buyTokenDigitalWithEther"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "getNftPrize"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mintedTokens"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "pokeNft"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pokeToken"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
