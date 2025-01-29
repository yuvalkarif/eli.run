import { defineCommand, runMain } from "citty";
import open from "open";
import pc from "picocolors";
import ora from "ora";

const main = defineCommand({
  meta: {
    name: "eli",
    version: "0.1.0",
    description: "Open links directly from your terminal",
  },
  args: {
    run: {
      type: "positional",
      description: "what to run",
      required: true,
      default: "run",
    },
  },
  async run({ args }) {
    const searchTerms =
      typeof args.run === "string" ? [args.run, ...args._].join(" ") : "run";
    const url = "https://shorturl.at/lQUot";

    try {
      await mockAwait(`Searching for ${pc.blue(searchTerms)}...`);
      await open(url);
    } catch (error) {
      console.error(pc.red(`Failed to open browser:`), error);
      process.exit(1);
    }
  },
});

runMain(main);

async function mockAwait(text: string) {
  const spinner = ora({
    text,
    spinner: "dots", // You can choose any spinner from cli-spinners
  }).start();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  spinner.succeed("Wallak, there you go!");
}
