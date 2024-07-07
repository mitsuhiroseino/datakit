import RelationalOperatorBase from '../RelationalOperatorBase';
import { NotEqualToEvaluateOptions, NotEqualToRelationalOperatorConfig } from './types';

/**
 * !==
 */
class NotEqualToRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  NotEqualToEvaluateOptions<V>,
  NotEqualToRelationalOperatorConfig<V>
> {
  protected _evaluate(target: V, config: NotEqualToRelationalOperatorConfig<V>): boolean {
    return target !== config.value;
  }
}
export default NotEqualToRelationalOperator;
