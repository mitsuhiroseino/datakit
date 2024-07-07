import Base from '@visue/core/base/Base';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import { Matcher } from '../types';
import { MatchOptionsBase, MatcherConfigBase } from './types';

/**
 * 値の比較をする
 */
export default abstract class MatcherBase<
    V = any,
    O extends MatchOptionsBase = MatchOptionsBase,
    C extends MatcherConfigBase = MatcherConfigBase,
  >
  extends Base<C>
  implements Matcher<O>
{
  readonly isMatcher = true;

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

  /**
   * 2つの値の比較
   * @param value1 値1
   * @param value2 値2
   * @param options オプション
   * @returns 比較結果
   */
  match(value1: V, value2: V, options?: O): boolean {
    const me = this,
      config = me._withConfig(options),
      result = me._match(value1, value2, config);
    return config.not ? !result : result;
  }

  /**
   * 2つの値の比較
   * @param value1 値1
   * @param value2 値2
   * @param config コンフィグ
   * @returns 比較結果
   */
  protected abstract _match(value1: V, value2: V, config: C): boolean;
}
