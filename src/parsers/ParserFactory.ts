import Factory from '@visue/core/factory/Factory';
import { IParser, ParserConfig } from './types';

const FACTORY = new Factory<IParser, ParserConfig>({
  category: 'parser',
});
export default FACTORY;
