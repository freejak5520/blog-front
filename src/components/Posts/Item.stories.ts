import type { Meta, StoryObj } from "@storybook/react";
import Item from "./Item";

const meta = {
  title: "Components/Posts/Item",
  component: Item,
  argTypes: {
    date: {
      type: "string",
      control: "text",
    },
  },
  args: {
    title: "Zsh에서 Option + Arrow 키로 단어 단위 이동하기",
    description:
      "macOS의 기본 쉘인 Zsh에서는 기본적으로 Option + Arrow 키를 사용하여 이러한 이동을 할 수 없습니다. 하지만 간단한 설정을 통해 이 기능을 활성화할 수 있습니다.",
    date: "2024-01-01",
    href: "#",
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Min: Story = {
  args: {
    title: "1",
    description: "1",
    date: "2024-01-01",
  },
};
