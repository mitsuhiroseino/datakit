import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import NoopFormatter, { NoopFormatterConfig } from 'src/formatters/NoopFormatter';

describe('NoopFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: Formatter = FormatterFactory.create(FORMATTER_TYPES.NOOP);
      expect(formatter).toBeInstanceOf(NoopFormatter);
    });
  });
  describe('format', () => {
    test('値あり', () => {
      const config: NoopFormatterConfig = { type: FORMATTER_TYPES.NOOP },
        formatter: NoopFormatter = FormatterFactory.get(config),
        result = formatter.format('😊');
      expect(result).toBe('😊');
    });
    test('undefined', () => {
      const config: NoopFormatterConfig = { type: FORMATTER_TYPES.NOOP },
        formatter: NoopFormatter = FormatterFactory.get(config);
      expect(() => formatter.format(undefined)).toThrowError('undefined is an invalid value to format.');
    });
    test('null', () => {
      const config: NoopFormatterConfig = { type: FORMATTER_TYPES.NOOP },
        formatter: NoopFormatter = FormatterFactory.get(config);
      expect(() => formatter.format(null)).toThrowError('null is an invalid value to format.');
    });
  });
});
