import React from "react";

import { Header } from "./Header";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header/Logo Center",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    backgroundColor: "bg-primary",
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: "bg-primarydark",
  },
};

export const Dark: Story = {
  args: {
    backgroundColor: "bg-aqua-850",
  },
};

export const Darkest: Story = {
  args: {
    backgroundColor: "bg-aqua-900",
  },
};
