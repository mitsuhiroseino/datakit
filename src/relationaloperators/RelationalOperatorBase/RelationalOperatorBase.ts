import Base from '@visue/core/base/Base';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import { RelationalOperator } from '../types';
import { EvaluateOptionsBase, RelationalOperatorConfigBase } from './types';

/**
 * リーダー
 */
abstract class RelationalOperatorBase<
    V = any,
    O extends EvaluateOptionsBase<V> = EvaluateOptionsBase<V>,
    C extends RelationalOperatorConfigBase<V> = RelationalOperatorConfigBase<V>,
  >
  extends Base<C>
  implements RelationalOperator<V>
{
  readonly isRelationalOperator = true;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  constructor(config: C) {
    super(config);
    assignIdentifier(this, this.config);
  }

  evaluate(target: V, options: O): boolean {
    const config = this._withConfig(options);
    return this._evaluate(target, config);
  }

  protected abstract _evaluate(target: V, config: C): boolean;
}
export default RelationalOperatorBase;
