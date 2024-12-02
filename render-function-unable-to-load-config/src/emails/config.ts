import tailwindConfig from "@/../tailwind.config";

import { type TailwindProps } from 'jsx-email';

const twConfig = {
  theme: {
    colors: tailwindConfig.theme.extend.colors,
  }
} satisfies TailwindProps['config']

export {
  twConfig
}
