const permuteString = (
  result: string[] = [],
  key: any,
  start: string = ""
): void => {
  if (key.length === 0) {
    result.push(start);
    return;
  }
  const ch = String(key[0]).toLowerCase();
  const ch2 = String(key[0]).toUpperCase();
  key = key.substr(1);
  permuteString(result, key, start + ch);
  permuteString(result, key, start + ch2);
};
/**
 * A map implementation that supports case-insensitive keys.
 */
export class xCaseInsensitiveMap<T, U> {
  /**
   * Internal data store for the key-value pairs.
   */
  private data = new Map<T, U>();

  /**
   * Count of items in the map.
   */
  private count = 0;

  /**
   * Sets a key-value pair in the map. The key is treated as case-insensitive.
   * @param rawKey - The key to set, can be of type T.
   * @param value - The value associated with the key.
   * @returns The XCaseInsensitiveMap instance.
   */
  set(rawKey: T, value: U): this {
    if (typeof rawKey === "string") {
      rawKey = rawKey as any as T;
      const keys: string[] = [];
      permuteString(keys, rawKey);
      this.count += 1;
      for (const key of keys) {
        this.data.set(key as any, value);
      }
    }
    return this;
  }

  /**
   * Retrieves the value associated with a key.
   * @param key - The key to look up, can be of type T.
   * @returns The value associated with the key, or undefined if the key is not found.
   */
  get(key: T): U | undefined {
    if (typeof key === "string") {
      key = key as any as T;
    }
    return this.data.get(key);
  }

  /**
   * Checks if a key exists in the map.
   * @param key - The key to check, can be of type T.
   * @returns True if the key exists in the map, otherwise false.
   */
  has(key: T): boolean {
    if (typeof key === "string") {
      key = key as any as T;
    }
    return this.data.has(key);
  }

  /**
   * Returns the number of key-value pairs in the map.
   * @returns The number of items in the map.
   */
  size(): number {
    return this.count;
  }
}
