// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class PoolCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PoolCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type PoolCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PoolCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): PoolCreated | null {
    return changetype<PoolCreated | null>(
      store.get_in_block("PoolCreated", id.toHexString()),
    );
  }

  static load(id: Bytes): PoolCreated | null {
    return changetype<PoolCreated | null>(
      store.get("PoolCreated", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get fee(): i32 {
    let value = this.get("fee");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set fee(value: i32) {
    this.set("fee", Value.fromI32(value));
  }

  get tickSpacing(): i32 {
    let value = this.get("tickSpacing");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickSpacing(value: i32) {
    this.set("tickSpacing", Value.fromI32(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Pool | null {
    return changetype<Pool | null>(store.get_in_block("Pool", id));
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get fee(): i32 {
    let value = this.get("fee");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set fee(value: i32) {
    this.set("fee", Value.fromI32(value));
  }

  get tickSpacing(): i32 {
    let value = this.get("tickSpacing");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickSpacing(value: i32) {
    this.set("tickSpacing", Value.fromI32(value));
  }

  get totalLiquidity(): BigInt | null {
    let value = this.get("totalLiquidity");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalLiquidity(value: BigInt | null) {
    if (!value) {
      this.unset("totalLiquidity");
    } else {
      this.set("totalLiquidity", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalLiquidityIn(): BigInt | null {
    let value = this.get("totalLiquidityIn");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalLiquidityIn(value: BigInt | null) {
    if (!value) {
      this.unset("totalLiquidityIn");
    } else {
      this.set("totalLiquidityIn", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalLiquidityOut(): BigInt | null {
    let value = this.get("totalLiquidityOut");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalLiquidityOut(value: BigInt | null) {
    if (!value) {
      this.unset("totalLiquidityOut");
    } else {
      this.set("totalLiquidityOut", Value.fromBigInt(<BigInt>value));
    }
  }

  get averageLiquidityIn(): BigInt | null {
    let value = this.get("averageLiquidityIn");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set averageLiquidityIn(value: BigInt | null) {
    if (!value) {
      this.unset("averageLiquidityIn");
    } else {
      this.set("averageLiquidityIn", Value.fromBigInt(<BigInt>value));
    }
  }

  get averageLiquidityOut(): BigInt | null {
    let value = this.get("averageLiquidityOut");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set averageLiquidityOut(value: BigInt | null) {
    if (!value) {
      this.unset("averageLiquidityOut");
    } else {
      this.set("averageLiquidityOut", Value.fromBigInt(<BigInt>value));
    }
  }

  get mintCount(): i32 {
    let value = this.get("mintCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set mintCount(value: i32) {
    this.set("mintCount", Value.fromI32(value));
  }

  get burnCount(): i32 {
    let value = this.get("burnCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set burnCount(value: i32) {
    this.set("burnCount", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get swaps(): SwapLoader {
    return new SwapLoader("Pool", this.get("id")!.toString(), "swaps");
  }

  get mints(): MintLoader {
    return new MintLoader("Pool", this.get("id")!.toString(), "mints");
  }

  get burns(): BurnLoader {
    return new BurnLoader("Pool", this.get("id")!.toString(), "burns");
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Swap must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Swap | null {
    return changetype<Swap | null>(store.get_in_block("Swap", id));
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get amount0In(): BigInt | null {
    let value = this.get("amount0In");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount0In(value: BigInt | null) {
    if (!value) {
      this.unset("amount0In");
    } else {
      this.set("amount0In", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount1In(): BigInt | null {
    let value = this.get("amount1In");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount1In(value: BigInt | null) {
    if (!value) {
      this.unset("amount1In");
    } else {
      this.set("amount1In", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount0Out(): BigInt | null {
    let value = this.get("amount0Out");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount0Out(value: BigInt | null) {
    if (!value) {
      this.unset("amount0Out");
    } else {
      this.set("amount0Out", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount1Out(): BigInt | null {
    let value = this.get("amount1Out");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount1Out(value: BigInt | null) {
    if (!value) {
      this.unset("amount1Out");
    } else {
      this.set("amount1Out", Value.fromBigInt(<BigInt>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Mint | null {
    return changetype<Mint | null>(store.get_in_block("Mint", id));
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get tickLower(): i32 {
    let value = this.get("tickLower");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickLower(value: i32) {
    this.set("tickLower", Value.fromI32(value));
  }

  get tickUpper(): i32 {
    let value = this.get("tickUpper");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickUpper(value: i32) {
    this.set("tickUpper", Value.fromI32(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount0(): BigInt | null {
    let value = this.get("amount0");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount0(value: BigInt | null) {
    if (!value) {
      this.unset("amount0");
    } else {
      this.set("amount0", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount1(): BigInt | null {
    let value = this.get("amount1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount1(value: BigInt | null) {
    if (!value) {
      this.unset("amount1");
    } else {
      this.set("amount1", Value.fromBigInt(<BigInt>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Burn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Burn", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Burn | null {
    return changetype<Burn | null>(store.get_in_block("Burn", id));
  }

  static load(id: string): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get tickLower(): i32 {
    let value = this.get("tickLower");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickLower(value: i32) {
    this.set("tickLower", Value.fromI32(value));
  }

  get tickUpper(): i32 {
    let value = this.get("tickUpper");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set tickUpper(value: i32) {
    this.set("tickUpper", Value.fromI32(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount0(): BigInt | null {
    let value = this.get("amount0");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount0(value: BigInt | null) {
    if (!value) {
      this.unset("amount0");
    } else {
      this.set("amount0", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount1(): BigInt | null {
    let value = this.get("amount1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount1(value: BigInt | null) {
    if (!value) {
      this.unset("amount1");
    } else {
      this.set("amount1", Value.fromBigInt(<BigInt>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class SwapLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Swap[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Swap[]>(value);
  }
}

export class MintLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Mint[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Mint[]>(value);
  }
}

export class BurnLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Burn[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Burn[]>(value);
  }
}
