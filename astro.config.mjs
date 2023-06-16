import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [partytown()]
});