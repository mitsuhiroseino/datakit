import Factory from '@visue/core/factory/Factory';
import { ISorter, SorterConfig } from './types';

const FACTORY = new Factory<ISorter, SorterConfig>({
  category: 'sorter',
});
export default FACTORY;
