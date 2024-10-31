#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const program = new Command();

const ensurePackageJson = async () => {
  try {
    await fs.access("package.json");
  } catch (error) {
    console.error(
      chalk.red("Error: package.json not found in the current directory.")
    );
    console.log(
      chalk.yellow("Please run this command in your project root directory.")
    );
    process.exit(1);
  }
};

program
  .name("gooni")
  .description("CLI for installing custom components")
  .version("1.0.0");

program
  .command("add <componentName>")
  .description("Add a component to your project")
  .action(async (componentName) => {
    await ensurePackageJson();

    const componentPath = path.join(
      __dirname,
      "..",
      "components",
      `${componentName}.tsx`
    );

    if (!fs.existsSync(componentPath)) {
      console.error(chalk.red(`Component "${componentName}" not found.`));
      process.exit(1);
    }

    const { destination } = await inquirer.prompt([
      {
        type: "input",
        name: "destination",
        message: "Where do you want to add the component?",
        default: `src/components/${componentName}.tsx`,
      },
    ]);

    try {
      await fs.copy(componentPath, destination);
      console.log(
        chalk.green(
          `Component "${componentName}" added successfully to ${destination}`
        )
      );

      // Check and install dependencies
      const packageJson = await fs.readJson("package.json");
      const dependencies = [
        "react",
        "lucide-react",
        "@radix-ui/react-popover",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-separator",
        "@radix-ui/react-scroll-area"
      ];
      const missingDeps = dependencies.filter(
        (dep) => !packageJson.dependencies[dep]
      );

      if (missingDeps.length > 0) {
        console.log(chalk.yellow("Installing missing dependencies..."));
        const { packageManager } = await inquirer.prompt([
          {
            type: "list",
            name: "packageManager",
            message: "Choose your package manager:",
            choices: ["npm", "yarn"],
          },
        ]);

        const installCmd =
          packageManager === "npm" ? "npm install" : "yarn add";
        const { execSync } = require("child_process");
        execSync(`${installCmd} ${missingDeps.join(" ")}`, {
          stdio: "inherit",
        });
        console.log(chalk.green("Dependencies installed successfully!"));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(chalk.red(`Error adding component: ${error.message}`));
      } else {
        console.error(
          chalk.red("An unknown error occurred while adding the component")
        );
      }
    }
  });

program.parse(process.argv);
