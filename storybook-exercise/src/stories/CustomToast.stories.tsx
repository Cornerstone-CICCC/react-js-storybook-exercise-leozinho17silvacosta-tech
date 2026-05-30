import type { Meta, StoryObj } from "@storybook/react";
import CustomToast from "./CustomToast";

const meta: Meta<typeof CustomToast> = {
  title: "CustomToast",
  component: CustomToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomToast>;

export const Success: Story = {
  args: {
    status: "success",
    text: "Operation completed!",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "Be careful with this action",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    text: "Error. Try again later!",
    hasIcon: true,
  },
};
