import RelationalOperatorBase from '../RelationalOperatorBase';
import { LessThanEvaluateOptions, LessThanRelationalOperatorConfig } from './types';

/**
 * <
 */
class LessThanRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  LessThanEvaluateOptions<V>,
  LessThanRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: LessThanRelationalOperatorConfig<V>): boolean {
    return target < config.value;
  }
}
export default LessThanRelationalOperator;
