import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import StringFormatter, { StringFormatterConfig } from 'src/formatters/StringFormatter';

describe('StringFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: Formatter = FormatterFactory.create(FORMATTER_TYPES.STRING);
      expect(formatter).toBeInstanceOf(StringFormatter);
    });
  });
  describe('format', () => {
    test('default', () => {
      const config: StringFormatterConfig = {
          type: FORMATTER_TYPES.STRING,
          params: { mark: '☆', firstName: 'FIRST', lastName: 'LAST', age: 99 },
        },
        formatter: StringFormatter = FormatterFactory.get(config),
        result = formatter.format('[{{mark}}] {{firstName}} {{lastName}} ({{age}})');
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
    test('optionsのparams', () => {
      const config: StringFormatterConfig = {
          type: FORMATTER_TYPES.STRING,
          params: { mark: '☆' },
        },
        formatter: StringFormatter = FormatterFactory.get(config),
        result = formatter.format('[{{mark}}] {{firstName}} {{lastName}} ({{age}})', {
          params: { firstName: 'FIRST', lastName: 'LAST', age: 99 },
        });
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
    test('カスタムエンクロージャー', () => {
      const config: StringFormatterConfig = {
          type: FORMATTER_TYPES.STRING,
          tokenBracket: ['[', ']'],
        },
        formatter: StringFormatter = FormatterFactory.get(config),
        result = formatter.format('[[mark]] [firstName] [lastName] ([age])', {
          params: { mark: '☆', firstName: 'FIRST', lastName: 'LAST', age: 99 },
        });
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
  });
});
