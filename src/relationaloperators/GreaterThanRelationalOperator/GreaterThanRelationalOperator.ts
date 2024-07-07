import RelationalOperatorBase from '../RelationalOperatorBase';
import { GreaterThanEvaluateOptions, GreaterThanRelationalOperatorConfig } from './types';

/**
 * >
 */
class GreaterThanRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  GreaterThanEvaluateOptions<V>,
  GreaterThanRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: GreaterThanRelationalOperatorConfig<V>): boolean {
    return target > config.value;
  }
}
export default GreaterThanRelationalOperator;
