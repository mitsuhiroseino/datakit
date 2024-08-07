import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import AnyFormatter, { AnyFormatOptions, AnyFormatterConfig } from 'src/formatters/AnyFormatter';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Formatter = FormatterFactory.create(FORMATTER_TYPES.ANY);
      expect(result).toBeInstanceOf(AnyFormatter);
    });
  });
});

describe('AnyFormatter', () => {
  describe('format', () => {
    const FORMAT = (value: any, options: AnyFormatOptions) => {
      if (value instanceof Error) {
        throw value;
      } else if (value == null) {
        return value;
      }
      const result = value ? '○' : '×';
      return options.twice ? result + result : result;
    };
    describe('default', () => {
      const config: AnyFormatterConfig = {
          type: FORMATTER_TYPES.ANY,
          format: FORMAT,
        },
        formatter: AnyFormatter = FormatterFactory.get(config),
        result = formatter.format(true);
      expect(result).toBe('○');
    });
    describe('options', () => {
      test('任意のオプション', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get(config),
          result = formatter.format(false, { twice: true });
        expect(result).toBe('××');
      });
    });
    describe('値がundefined', () => {
      test('undefinedValueあり', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get({ ...config, undefinedValue: '◎' }),
          result = formatter.format(undefined);
        expect(result).toBe('◎');
      });
      test('undefinedValueなし', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get(config);
        expect(() => formatter.format(undefined)).toThrowError('undefined is an invalid value to format.');
      });
      test('undefinedValueなし & defaultValueあり', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get({ ...config, defaultValue: '▲' }),
          result = formatter.format(undefined);
        expect(result).toBe('▲');
      });
    });
    describe('値がnull', () => {
      test('nullValueあり', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get({ ...config, nullValue: '●' }),
          result = formatter.format(null);
        expect(result).toBe('●');
      });
      test('nullValueなし', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get(config);
        expect(() => formatter.format(null)).toThrowError('null is an invalid value to format.');
      });
      test('nullValueなし & defaultValueあり', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get({ ...config, defaultValue: '▲' }),
          result = formatter.format(null);
        expect(result).toBe('▲');
      });
    });
    describe('フォーマット失敗', () => {
      test('defaultValueあり', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get({ ...config, defaultValue: '▲' }),
          result = formatter.format(new Error('フォーマット失敗'));
        expect(result).toBe('▲');
      });
      test('defaultValueなし', () => {
        const config: AnyFormatterConfig = { type: FORMATTER_TYPES.ANY, format: FORMAT },
          formatter: AnyFormatter = FormatterFactory.get(config);
        expect(() => {
          formatter.format(new Error('フォーマット失敗'));
        }).toThrow(new Error('フォーマット失敗'));
      });
    });
  });
});
