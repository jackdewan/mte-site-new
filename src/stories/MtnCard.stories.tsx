import { Meta, StoryObj } from "@storybook/react";

import { MtnCard } from "./MtnCard";

const meta: Meta<typeof MtnCard> = {
  title: "Cards/Mtn Card",
  component: MtnCard,
};

export default meta;
type Story = StoryObj<typeof MtnCard>;

export const Primary: Story = {
  args: {
    data: {
      heading: "Heading",
      body: "This is some body text. Cannabis is life.",
      buttonLabel: "Learn More",
      subHeading: "Experience the mountaintop",
      mtnLine: true,
    },
  },
};
