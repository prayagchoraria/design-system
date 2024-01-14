import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest'

import Button from './button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button'
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play:async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {name: 'Button'});
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50')
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90')
    expect(button).toHaveClass('h-10 px-4 py-2')
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();
  }
};

export const Secondary: Story = {
  play:async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {name: 'Button'});
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50')
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90')
    expect(button).toHaveClass('h-10 px-4 py-2')
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    tone: 'secondary'
  }
};

export const Destructive: Story = {
  args: {
    tone: 'destructive'
  }
};

export const Outline: Story = {
  args: {
    intent: 'outline'
  }
};

export const Ghost: Story = {
  args: {
    tone: 'ghost'
  }
};

export const Link: Story = {
  args: {
    intent: 'link'
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    size: 'large'
  }
};

export const SecondaryLarge: Story = {
  args: {
    ...Secondary.args, ...Large.args
  }
};
