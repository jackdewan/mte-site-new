import { Meta, StoryObj } from "@storybook/react";

import { LogoDrop } from "./LogoDrop";

const meta: Meta<typeof LogoDrop> = {
  title: "Foundation/Logo/Drop Logo",
  component: LogoDrop,
  decorators: [(story) => <div className="h-48 w-48">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof LogoDrop>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};

export const AquaLight: Story = {
  args: {
    ...Primary.args,
    color: "aqualight",
  },
};
