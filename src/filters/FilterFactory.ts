import Factory from '@visue/core/factory/Factory';
import { FilterConfig, IFilter } from './types';

const FACTORY = new Factory<IFilter, FilterConfig>({
  category: 'filter',
});
export default FACTORY;
