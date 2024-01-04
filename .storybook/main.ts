import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.stories.ts",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook-vue/nuxt",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;