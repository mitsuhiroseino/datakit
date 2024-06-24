import DestructibleBase from '@visue/core/base/DestructibleBase';
import asArray from '@visue/utils/array/asArray';

/**
 * DestructibleBaseインスタンスの破棄を行う
 * @param targets
 */
const destroy = (targets: DestructibleBase | DestructibleBase[]): void => {
  asArray(targets).forEach((target) => {
    if (target) {
      target.destructor();
    }
  });
};
export default destroy;
