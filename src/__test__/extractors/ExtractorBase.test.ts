import { Extractor, ExtractorFactory } from 'src/extractors';
import ExtractorBase, { ExtractOptionsBase, ExtractorConfigBase } from 'src/extractors/ExtractorBase';

const TYPE = 'test';

type TestExtractOptions = ExtractOptionsBase & {
  optionsProp?: boolean;
};

type TestExtractorConfig = ExtractorConfigBase &
  TestExtractOptions & {
    configProp?: boolean;
  };

// テスト対象を継承したクラス
class TestExtractor extends ExtractorBase<any, any, TestExtractOptions, TestExtractorConfig> {
  protected _validate(source: any, config: TestExtractorConfig) {
    switch (source) {
      case 'INVALID':
        return false;
      default:
        return true;
    }
  }
  protected _extract(source: any, config: TestExtractorConfig) {
    switch (source) {
      case 'ERROR':
        throw new Error('Error!!!');
      default:
        return config;
    }
  }
}
ExtractorFactory.register(TYPE, TestExtractor);

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Extractor = ExtractorFactory.get(TYPE);
      expect(result).toBeInstanceOf(TestExtractor);
    });
  });
});

describe('ExtractorBase', () => {
  describe('extract', () => {
    describe('default', () => {
      test('[Invalid]', () => {
        const config: TestExtractorConfig = { type: TYPE },
          extractor: TestExtractor = ExtractorFactory.get(config),
          fn = () => extractor.extract('INVALID');
        expect(fn).toThrowError('INVALID is invalid source.');
      });

      test('[Error]', () => {
        const config: TestExtractorConfig = { type: TYPE },
          extractor: TestExtractor = ExtractorFactory.get(config),
          fn = () => extractor.extract('ERROR');
        expect(fn).toThrowError('Error!!!');
      });

      test('config', () => {
        const config: TestExtractorConfig = { type: TYPE, configProp: true },
          extractor: TestExtractor = ExtractorFactory.get(config),
          result = extractor.extract(null as any, { optionProp: true } as any);
        expect(result).toEqual({ type: TYPE, configProp: true, optionProp: true });
      });
    });

    describe('options', () => {
      test('defaultValue', () => {
        const config: TestExtractorConfig = { type: TYPE, defaultValue: 'DEFAULT' },
          extractor: TestExtractor = ExtractorFactory.get(config),
          result = extractor.extract('ERROR');
        expect(result).toBe('DEFAULT');
      });
    });
  });
});
