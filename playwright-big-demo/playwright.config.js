const {
    defineConfig,
    devices
} = require("@playwright/test");


module.exports = defineConfig({

    testDir: "./tests",

    timeout: 60000,

    fullyParallel: false,

    workers: 1,

    reporter: [
        ["list"],
        ["html"]
    ],

    use: {

        baseURL: "http://127.0.0.1:3000",

        headless: false,

        slowMo: 1500,

        screenshot: "only-on-failure",

        video: "retain-on-failure",

        trace: "on-first-retry"

    },

    webServer: {

        command: "npx http-server webpage -p 3000",

        url: "http://127.0.0.1:3000",

        reuseExistingServer: true

    },

    projects: [

        {
            name: "chromium",

            use: {
                ...devices["Desktop Chrome"]
            }
        }

    ]

});