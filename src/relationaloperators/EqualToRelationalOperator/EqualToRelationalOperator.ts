import RelationalOperatorBase from '../RelationalOperatorBase';
import { EqualToEvaluateOptions, EqualToRelationalOperatorConfig } from './types';

/**
 * ===
 */
class EqualToRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  EqualToEvaluateOptions<V>,
  EqualToRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: EqualToRelationalOperatorConfig<V>): boolean {
    return target === config.value;
  }
}
export default EqualToRelationalOperator;
