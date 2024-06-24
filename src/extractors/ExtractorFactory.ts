import Factory from '@visue/core/factory/Factory';
import { ExtractorConfig, IExtractor } from './types';

const FACTORY = new Factory<IExtractor, ExtractorConfig>({
  category: 'extractor',
});
export default FACTORY;
