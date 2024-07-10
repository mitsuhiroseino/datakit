import { FILTER_TYPES, Filter, FilterFactory } from 'src/filters';
import AnyFilter, { AnyFilterConfig } from 'src/filters/AnyFilter';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Filter = FilterFactory.create(FILTER_TYPES.ANY);
      expect(result).toBeInstanceOf(AnyFilter);
    });
  });
});

describe('AnyFilter', () => {
  describe('default', () => {
    test('常に不一致', () => {
      const config: AnyFilterConfig = { type: FILTER_TYPES.ANY, value: 'ABC' },
        filter: AnyFilter = FilterFactory.get(config),
        result = filter.match('ABC');
      expect(result).toBe(false);
    });
  });

  describe('options', () => {
    describe('match', () => {
      test('一致', () => {
        const config: AnyFilterConfig = {
            type: FILTER_TYPES.ANY,
            value: 'ABC',
            match: (value1: string, value2: string, config) => {
              return value1.startsWith(value2);
            },
          },
          filter: AnyFilter = FilterFactory.get(config),
          result = filter.match('ABCDEFGHIJ');
        expect(result).toBe(true);
      });

      test('不一致', () => {
        const config: AnyFilterConfig = {
            type: FILTER_TYPES.ANY,
            value: 'BCD',
            match: (value1: string, value2: string, config) => {
              return value1.startsWith(value2);
            },
          },
          filter: AnyFilter = FilterFactory.get(config),
          result = filter.match('ABCDEFGHIJ');
        expect(result).toBe(false);
      });
    });
  });
});
