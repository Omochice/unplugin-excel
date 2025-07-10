import { readFileSync } from "node:fs";
import { createUnplugin, type UnpluginFactory } from "unplugin";
import { read, utils } from "xlsx";
import type { Options } from "./types";

const extensions = new Set([".xlsx", ".xls"]);

export const unpluginFactory: UnpluginFactory<Options> = (_ = {}) => ({
  name: "unplugin-excel",
  load: (id) => {
    if (extensions.values().every((ext) => !id.endsWith(ext))) {
      return;
    }
    const fileContent = readFileSync(id).buffer;
    const workbook = read(fileContent, { type: "buffer" });
    const book = workbook.SheetNames.map((sheetName) => {
      const jsonData = utils.sheet_to_json(workbook.Sheets[sheetName]);
      return [sheetName, jsonData] as const;
    });
    return `const book = new Map(${JSON.stringify(book)});export default book;`;
  },
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
