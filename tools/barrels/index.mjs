#!/usr/bin/env ts-node
import fs from "fs-extra";
import {globby} from "globby";
import {join} from "node:path";

function resolveConfig() {
  return [
    join(process.cwd(), ".barrelsby.json"),
    join(process.cwd(), ".barrels.json")
  ].find((path) => {
    return fs.existsSync(path);
  });
}

function getConfig() {
  const configPath = resolveConfig();

  if (!configPath) {
    return {};
  }

  return fs.readJSON(configPath, "utf8");
}

async function cleanIndex(cwd, excluded) {
  const patterns = [
    "**/index.ts",
    ...excluded
  ];

  const files = await globby(patterns, {
    cwd: cwd
  });

  return Promise.all(files.map((file) => fs.unlink(join(cwd, file))));
}

async function build() {
  const {
    directory = ["./src"],
    exclude = ["**/__mock__", "**/__mocks__", "**/*.spec.ts", "**/*.benchmark.ts"],
    delete: shouldDelete
  } = await getConfig();
  const excluded = exclude
    .map((path) => `!${path}`)
    .concat(directory.map((path) => `!${path}/index.ts`));

  const promises = directory
    .map(async (directory) => {
      const baseIndex = join(process.cwd(), directory);

      // if (shouldDelete) {
      //   await cleanIndex(directory, excluded);
      // }

      const files = await globby([
        "**/*.ts",
        "!index.ts",
        ...excluded
      ], {
        cwd: directory
      });

      const exports = files
        .sort((a, b) => a.localeCompare(b))
        .map((file) => {
          return `export * from "./${file.replace(".ts", ".js")}";`;
        });

      const content = [
        "/**",
        " * @file Automatically generated by @tsed/barrels.",
        " */",
        ...exports
      ];

      await fs.writeFile(join(baseIndex, "index.ts"), content.join("\n") + "\n", {encoding: "utf8"});
    });

  await Promise.all(promises);
}


await build();
