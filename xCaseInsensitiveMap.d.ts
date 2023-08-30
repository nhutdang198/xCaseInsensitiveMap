declare module 'xCaseInsensitiveMap' {
  export class XCaseInsensitiveMap<T, U> {
    constructor();
    set(rawKey: T, value: U): this;
    get(key: T): U | undefined;
    has(key: T): boolean;
    size(): number;
  }
}
