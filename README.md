# An Example of a CLI Checkly Setup

To enable email alerts in the event of a failed check, add your email address to the address key of the emailChannel object in line 23 of the alert-channels.ts file. After you have deployed your Checkly project with
`npx checkly deploy`, you will receive an email alert to the given address whenever a check fails. Examples of
other alert channel types have been left commented out in the file in the event that you wish to add another
type of alert later.

All `.spec.ts` and `.check.ts` files should be placed in the `__checks__` directory. These checks can then be run with the `npx checkly test` command. In addition, Checkly will detect any `.spec.ts` file in the directory and
[create corresponding BrowserChecks for synthetic monitoring](https://www.checklyhq.com/docs/cli/constructs-reference/#project) using defaults defined in `checkly.config.ts`. These defaults can be adjusted to
suit your general needs or overridden in individual checks within a `.check.ts` file.

The `wiki.check.ts` and `https-wikipedia-com.spec.ts` files contain a very simple check sent to Wikipedia. The
commented-out check in the latter file is intentionally written to fail. Once you have added your email address
to the project, you can use this flawed test to verify that your email address is receiving messages upon a
failed check occurring.

If you wish to remove a check or checks, you can simply delete the corresponding code, commit the changes to
the repository, give the updated test suite a run with `npx checkly test`, and then deploy the changes to
Checkly with `npx checkly deploy`. Deleted checks will have been removed from your online profile.


# Below, you can find the original README generated when you create a Checkly CLI project

# Checkly Monitoring-as-code: Advanced Project

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow. We are using the
https://checklyhq.com website as a monitoring target.

1. Write API Checks and Playwright-powered Browser Checks.
2. Add Alert Channels, and dry-run your Checks on 20+ global locations.
3. Test -> Deploy: now you have your app monitored around the clock. All from your code base.

```
npm create checkly -- --template advanced-project
```

## Project Structure

This project has examples of all Checkly check types and showcases some advanced features. It also adds a GitHub Actions workflow.

- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.

- Running `npx checkly deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the
region `us-east-1` and `eu-west-1`

- An example GitHub Actions workflow is in the `.github/workflow.yml` file. It triggers all the checks in the project and deploys
them if they pass.

## CLI Commands

Run the core CLI commands with `npx checkly <command>`

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

## Adding and running `@playwright/test`

You can add `@playwright/test` to this project to get full code completion and run `.spec.ts` files for local debugging.
It's best to install the Playwright npm package version that matches your [Checkly runtime](https://www.checklyhq.com/docs/cli/npm-packages/).

```bash
npm install --save-dev @playwright/test@1.38.1
```

## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or
join our [Slack community](https://checklyhq.com/slack).
