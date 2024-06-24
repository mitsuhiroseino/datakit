import Factory from '@visue/core/factory/Factory';
import { FormatterConfig, IFormatter } from './types';

const FACTORY = new Factory<IFormatter, FormatterConfig>({
  category: 'formatter',
});
export default FACTORY;
