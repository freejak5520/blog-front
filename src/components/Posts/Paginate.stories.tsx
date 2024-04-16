import { Meta, StoryObj } from "@storybook/react";
import Paginate from "./Paginate";

const meta = {
  component: Paginate,
} satisfies Meta<typeof Paginate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageCount: 10,
  },
};
