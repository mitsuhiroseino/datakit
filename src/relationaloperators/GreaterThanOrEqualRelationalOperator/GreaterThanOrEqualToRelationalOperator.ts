import RelationalOperatorBase from '../RelationalOperatorBase';
import { GreaterThanOrEqualToEvaluateOptions, GreaterThanOrEqualToRelationalOperatorConfig } from './types';

/**
 * >=
 */
class GreaterThanOrEqualToRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  GreaterThanOrEqualToEvaluateOptions<V>,
  GreaterThanOrEqualToRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: GreaterThanOrEqualToRelationalOperatorConfig<V>): boolean {
    return target >= config.value;
  }
}
export default GreaterThanOrEqualToRelationalOperator;
