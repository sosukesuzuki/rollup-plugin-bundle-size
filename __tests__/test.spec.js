process.chdir(__dirname);

const fs = require("fs");
const { rollup } = require("rollup");
const { bundleSize } = require("../lib/rollup-plugin-bundle-size.cjs");

const consoleLogMock = jest.fn();
global.console = { ...global.console, log: consoleLogMock };

beforeEach(() => {
  consoleLogMock.mockClear();
});

function testFixtures(dir, testName) {
  test(testName, async () => {
    const options = {
      input: `fixtures/${dir}/main.js`,
      plugins: [bundleSize()],
    };
    const build = await rollup(options);
    await build.generate({ format: "cjs" });
    expect(consoleLogMock.mock.calls.length).toBe(1);
  });
}

for (const dir of fs.readdirSync(`./fixtures`)) {
  testFixtures(dir, `${dir}`);
}
