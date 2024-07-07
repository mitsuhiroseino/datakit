import RelationalOperatorBase from '../RelationalOperatorBase';
import { LessThanOrEqualToEvaluateOptions, LessThanOrEqualToRelationalOperatorConfig } from './types';

/**
 * <=
 */
class LessThanOrEqualRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  LessThanOrEqualToEvaluateOptions<V>,
  LessThanOrEqualToRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: LessThanOrEqualToRelationalOperatorConfig<V>): boolean {
    return target <= config.value;
  }
}
export default LessThanOrEqualRelationalOperator;
