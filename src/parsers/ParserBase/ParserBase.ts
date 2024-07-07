import Base from '@visue/core/base/Base';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import toValidValue from '@visue/utils/lang/toValidValue';
import { Parser } from '../types';
import { ParseOptionsBase, ParserConfigBase } from './types';

export default abstract class ParserBase<
    R = any,
    O extends ParseOptionsBase = ParseOptionsBase,
    C extends ParserConfigBase = ParserConfigBase,
  >
  extends Base<C>
  implements Parser<R, O>
{
  readonly isParser = true;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  constructor(config?: C) {
    super(config);
    assignIdentifier(this, this.config);
  }

  parse(value: any, options?: O): R {
    const config = this._withConfig(options),
      validValue = toValidValue(value, config);

    if (validValue !== value) {
      // undefined または nullの場合の値が指定されていた場合
      return validValue;
    }

    let error;
    try {
      // パースを実行
      const result = this._parse(value, config);
      if (result != null) {
        return result;
      }
    } catch (e) {
      error = e;
    }
    // パースできなかった場合
    if ('defaultValue' in config) {
      return config.defaultValue;
    } else {
      throw error || new Error(`${value} is an invalid value to parse.`);
    }
  }

  protected abstract _parse(value: string, config: C): R | null;
}
