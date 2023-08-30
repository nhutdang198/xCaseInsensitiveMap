import { xCaseInsensitiveMap } from './xCaseInsensitiveMap';

describe('XCaseInsensitiveMap', () => {
  let map: xCaseInsensitiveMap<string, any>;

  beforeEach(() => {
    map = new xCaseInsensitiveMap<string, any>();
  });

  it('should set and get values correctly', () => {
    map.set('apple', 'Sweet fruit');
    map.set('Banana', 'Yellow fruit');

    expect(map.get('APPLE')).toBe('Sweet fruit');
    expect(map.get('banana')).toBe('Yellow fruit');
  });

  it('should return undefined for non-existent keys', () => {
    expect(map.get('grape')).toBeUndefined();
  });

  it('should check if a key exists', () => {
    map.set('apple', 'Sweet fruit');

    expect(map.has('APPLE')).toBe(true);
    expect(map.has('banana')).toBe(false);
  });

  it('should return the correct size', () => {
    map.set('apple', 'Sweet fruit');
    map.set('Banana', 'Yellow fruit');

    expect(map.size()).toBe(2);
  });
});
