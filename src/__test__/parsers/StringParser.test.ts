import { PARSER_TYPES, Parser, ParserFactory } from 'src/parsers';
import StringParser, { StringParserConfig } from 'src/parsers/StringParser';

describe('StringParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: Parser = ParserFactory.create(PARSER_TYPES.STRING);
      expect(parser).toBeInstanceOf(StringParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: StringParserConfig = {
          type: PARSER_TYPES.STRING,
        },
        parser: StringParser = ParserFactory.get(config),
        result = parser.parse('ABC');
      expect(result).toBe('ABC');
    });
  });
});
