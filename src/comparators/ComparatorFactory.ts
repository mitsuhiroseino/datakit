import Factory from '@visue/core/factory/Factory';
import { ComparatorConfig, IComparator } from './types';

const FACTORY = new Factory<IComparator, ComparatorConfig>({
  category: 'comparator',
});
export default FACTORY;
