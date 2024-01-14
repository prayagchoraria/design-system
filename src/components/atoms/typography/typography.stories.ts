import type { Meta, StoryObj } from '@storybook/react';

import Typography from './typography';

const meta = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elementType: { control: 'radio' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    children: 'Typography',
    elementType: 'h1'
  },
};