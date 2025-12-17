# deno-type-lint

Deno lint plugin

## type-lint/no-array-shorthand

```ts
function removeEmptyStringInArray(array: readonly string[]): string[] {
  return array.filter((item) => item !== "");
}
```

↓

```ts
function removeEmptyStringInArray(array: ReadonlyArray<string>): Array<string> {
  return array.filter((item) => item !== "");
}
```
