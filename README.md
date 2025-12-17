# deno-type-lint

```ts
function removeEmptyStringInArray(array: readonly string[]): readonly string[] {
  return array.filter((item) => item !== "");
}
```

↓

```ts
function removeEmptyStringInArray(
  array: ReadonlyArray<string>,
): ReadonlyArray<string> {
  return array.filter((item) => item !== "");
}
```
