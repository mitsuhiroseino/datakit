import FormatterBase from '../FormatterBase';
import { NoopFormatOptions, NoopFormatterConfig } from './types';

class NoopFormatter extends FormatterBase<any, NoopFormatOptions, NoopFormatterConfig> {
  /**
   * 何もしない
   * @param value 値
   * @returns
   */
  protected _format(value: any): string | null {
    return value;
  }
}
export default NoopFormatter;
