# @omochice/unplugin-excel

Plugin for bundling excel files with [`unplugin`](https://unplugin.unjs.io/).

<!-- automd:badges color="yellow" license name="@omochice/unplugin-excel" bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@omochice/unplugin-excel?color=yellow)](https://npmjs.com/package/@omochice/unplugin-excel)
[![npm downloads](https://img.shields.io/npm/dm/@omochice/unplugin-excel?color=yellow)](https://npm.chart.dev/@omochice/unplugin-excel)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@omochice/unplugin-excel?color=yellow)](https://bundlephobia.com/package/@omochice/unplugin-excel)
[![install size](https://badgen.net/packagephobia/install/@omochice/unplugin-excel?color=yellow)](https://packagephobia.com/result?p=@omochice/unplugin-excel)
[![license](https://img.shields.io/github/license/Omochice/unplugin-excel?color=yellow)](https://github.com/Omochice/unplugin-excel/blob/main/LICENSE)

<!-- /automd -->

## Usage

<!-- automd:pm-install name="@omochice/unplugin-excel" dev -->

```sh
# ✨ Auto-detect
npx nypm install -D @omochice/unplugin-excel

# npm
npm install -D @omochice/unplugin-excel

# yarn
yarn add -D @omochice/unplugin-excel

# pnpm
pnpm install -D @omochice/unplugin-excel

# bun
bun install -D @omochice/unplugin-excel

# deno
deno install --dev @omochice/unplugin-excel
```

<!-- /automd -->

```typescript
// vite.config.ts
import excel from "unplugin-excel/vite";

export default defineConfig({
  plugins: [
    excel(),
  ],
});
```

## License

[zlib](./LICENSE)
