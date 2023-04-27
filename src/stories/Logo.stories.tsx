import { Meta, StoryObj } from "@storybook/react";

import { LogoCircle } from "./LogoCircle";

const meta: Meta<typeof LogoCircle> = {
  title: "Foundation/Logo/Circle Logo",
  component: LogoCircle,
  decorators: [(story) => <div className="">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof LogoCircle>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    secondary: true,
  },
};
