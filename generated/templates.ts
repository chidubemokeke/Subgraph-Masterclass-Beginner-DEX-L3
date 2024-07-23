// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext,
} from "@graphprotocol/graph-ts";

export class UniswapV3Pool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("UniswapV3Pool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "UniswapV3Pool",
      [address.toHex()],
      context,
    );
  }
}
