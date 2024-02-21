import { UserConfig } from "vitest";
import { mergeConfig } from "vitest/config";

import defaultConfig from "../vitest.config.js";

export default mergeConfig(defaultConfig, {
  include: ["**/*.e2e-spec.ts"],
} satisfies UserConfig);
