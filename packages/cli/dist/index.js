#!/usr/bin/env node

// src/index.ts
import { defineCommand, runMain } from "citty";
import open from "open";
import pc from "picocolors";
var main = defineCommand({
  meta: {
    name: "eli",
    version: "0.1.0",
    description: "Open links directly from your terminal"
  },
  args: {
    terms: {
      type: "positional",
      description: "Search terms",
      required: true,
      array: true
    }
  },
  async run({ args }) {
    const searchTerms = args.terms;
    const url = "https://g.co/kgs/PX7HS6f";
    try {
      await open(url);
      console.log(pc.green("\u2728"), pc.bold(`Searching for ${pc.blue(searchTerms)}...`));
    } catch (error) {
      console.error(pc.red(`Failed to open browser:`), error);
      process.exit(1);
    }
  }
});
runMain(main);
