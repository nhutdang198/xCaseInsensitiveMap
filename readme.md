**xCaseInsensitiveMap** is a TypeScript class that provides a map implementation supporting case-insensitive keys. It allows you to store key-value pairs where the keys are treated as case-insensitive. This is achieved by generating permutations of the keys in both lowercase and uppercase forms, enabling case-insensitive lookups and retrievals.

## Installation

To use xCaseInsensitiveMap, you'll need to include the provided TypeScript file in your project.

1. Download the `xCaseInsensitiveMap.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xCaseInsensitiveMap` class into your TypeScript code:

   ```typescript
   import { xCaseInsensitiveMap} from 'x-case-insensitive-map'

   // Create an instance of xCaseInsensitiveMap
   const caseInsensitiveMap = new xCaseInsensitiveMap<string, any>();

2. Import the `xCaseInsensitiveMap` class into your Javascript code:

   ```javascript
   const { xCaseInsensitiveMap } = require("x-case-insensitive-map")

   // Create an instance of xCaseInsensitiveMap
   const caseInsensitiveMap = new xCaseInsensitiveMap();

## Notes

Keep in mind that the approach of generating permutations for every key can have performance implications, especially for larger datasets. Consider using this class for relatively small maps or where case-insensitive lookups are a necessity.

This class is designed to work primarily with string keys. Using non-string keys might lead to unexpected behavior.

