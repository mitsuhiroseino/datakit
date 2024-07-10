import { PARSER_TYPES, Parser, ParserFactory } from 'src/parsers';
import BooleanParser, { BooleanParserConfig } from 'src/parsers/BooleanParser';

describe('BooleanParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: Parser = ParserFactory.create(PARSER_TYPES.BOOLEAN);
      expect(parser).toBeInstanceOf(BooleanParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: BooleanParserConfig = {
          type: PARSER_TYPES.BOOLEAN,
        },
        parser: BooleanParser = ParserFactory.get(config),
        result = parser.parse('true');
      expect(result).toBe(true);
    });
    test('options', () => {
      const config: BooleanParserConfig = {
          type: PARSER_TYPES.BOOLEAN,
          trueValues: ['ON'],
        },
        parser: BooleanParser = ParserFactory.get(config),
        result = parser.parse('ON');
      expect(result).toBe(true);
    });
  });
});
