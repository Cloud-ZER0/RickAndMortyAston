import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: "50px", background: "gray" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      description: "Варианты кнопки",
      control: {
        labels: {
          Primary: "Дефолтный вариант",
          Clear: "Вариант для кнопки очистить",
          Logout: "Вариант для кнопки выйти",
        },
      },
    },
    type: {
      description: "Типы кнопки",
      control: {
        labels: {
          submit: "Отправка формы",
          reset: "Сброс, отчистка",
          button: "Дефолтное значение",
        },
      },
    },
    fill: {
      description: "Вариант размера кнопки",
    },
    className: {
      description: "Дополнительный класс от пользователя",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "Primary",
    children: "Primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "Primary",
    children: "Large",
    fill: true,
  },
};

export const Clear: Story = {
  args: {
    variant: "Clear",
    children: "Clear",
  },
};

export const Logout: Story = {
  args: {
    variant: "Logout",
    children: "Logout",
  },
};
