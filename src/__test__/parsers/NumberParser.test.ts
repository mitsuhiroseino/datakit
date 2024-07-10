import { PARSER_TYPES, Parser, ParserFactory } from 'src/parsers';
import NumberParser, { NumberParserConfig } from 'src/parsers/NumberParser';

describe('NumberParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: Parser = ParserFactory.create(PARSER_TYPES.NUMBER);
      expect(parser).toBeInstanceOf(NumberParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: NumberParserConfig = {
          type: PARSER_TYPES.NUMBER,
        },
        parser: NumberParser = ParserFactory.get(config),
        result = parser.parse('12,345.6789');
      expect(result).toBe(12345.6789);
    });
    test('options', () => {
      const config: NumberParserConfig = {
          type: PARSER_TYPES.NUMBER,
          thousandsSeparator: '.',
          decimalPoint: ',',
        },
        parser: NumberParser = ParserFactory.get(config),
        result = parser.parse('12.345,6789');
      expect(result).toBe(12345.6789);
    });
  });
});
