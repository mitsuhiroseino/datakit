import RelationalOperatorBase from '../RelationalOperatorBase';
import { IncludeEvaluateOptions, IncludeRelationalOperatorConfig } from './types';

/**
 * include
 */
class IncludeRelationalOperator<V extends string = string> extends RelationalOperatorBase<
  V,
  IncludeEvaluateOptions<V>,
  IncludeRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: IncludeRelationalOperatorConfig<V>): boolean {
    return config.value.includes(target);
  }
}
export default IncludeRelationalOperator;
