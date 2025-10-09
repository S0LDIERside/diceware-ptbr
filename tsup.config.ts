import { copyFileSync } from "fs"
import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    minify: true,
    dts: true,
    clean: true,
    onSuccess: async () => {
        copyFileSync("src/words.txt", "dist/words.txt")
        console.log(`\x1b[35mWORDS.TXT\x1b[0m successfully updated to the output folder`)
    }
})
