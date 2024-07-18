import ConfigurableBase from '@visue/core/ConfigurableBase';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import toValidValue from '@visue/utils/lang/toValidValue';
import { Formatter } from '../types';
import { FormatOptionsBase, FormatterConfigBase } from './types';

export default abstract class FormatterBase<
    V = any,
    O extends FormatOptionsBase = FormatOptionsBase,
    C extends FormatterConfigBase = FormatterConfigBase,
  >
  extends ConfigurableBase<C>
  implements Formatter<V, O>
{
  readonly isFormatter = true;

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

  format(value: V, options?: O): string {
    const config = this._withConfig(options),
      validValue = toValidValue(value, config);

    if (validValue !== value) {
      // undefined または nullの場合の値が指定されていた場合
      return validValue;
    }

    let error;
    try {
      //フォーマットを実行
      const result = this._format(value, config);
      if (result != null) {
        return result;
      }
    } catch (e) {
      error = e;
    }
    // フォーマットできなかった場合
    if ('defaultValue' in config) {
      return config.defaultValue as string;
    } else {
      throw error || new Error(`${value} is an invalid value to format.`);
    }
  }

  protected abstract _format(value: V, config: C): string | null;
}
