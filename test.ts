import { assertEquals } from "@std/assert";
import plugin from "./mod.ts";
import example from "./example.ts" with { type: "text" };

Deno.test("no-array-shorthand", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "example.ts",
    example,
  );

  assertEquals(diagnostics.length, 6);

  const expectedErrors = [
    {
      message: "Use ReadonlyArray<T> instead of readonly T[]",
      fixText: "ReadonlyArray<string>",
      line: 1,
    },
    {
      message: "Use ReadonlyArray<T> instead of readonly T[]",
      fixText: "ReadonlyArray<string>",
      line: 5,
    },
    {
      message: "Use ReadonlyArray<T> instead of readonly T[]",
      fixText: "ReadonlyArray<string>",
      line: 5,
    },
    {
      message: "Use ReadonlyArray<T> instead of readonly T[]",
      fixText: "ReadonlyArray<string>",
      line: 7,
    },
    {
      message: "Use ReadonlyArray<T> instead of readonly T[]",
      fixText: "ReadonlyArray<string>",
      line: 7,
    },
    {
      message: "Use Array<T> instead of T[]",
      fixText: "Array<number>",
      line: 15,
    },
  ];

  for (const [i, d] of diagnostics.entries()) {
    assertEquals(d.id, "my-plugin/no-array-shorthand");
    assertEquals(d.message, expectedErrors[i].message);
    const fix = d.fix?.[0];
    if (fix && expectedErrors[i].fixText) {
      assertEquals(fix.text, expectedErrors[i].fixText);
    }
  }
});
