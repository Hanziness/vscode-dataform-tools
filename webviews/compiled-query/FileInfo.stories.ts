import type { Meta, StoryObj } from '@storybook/react-vite';

import { FileInfo } from './FileInfo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Preview panel/File information',
  component: FileInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    filePath: { control: "text" },
    dataPath: { control: "text" },
    lastModified: { control: "date" }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { dataPath: "database-staging.schema.table", filePath: "nothing interesting", lastModified: new Date() },
} satisfies Meta<typeof FileInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    dataPath: "database-staging.schema.table",
    filePath: "nothing interesting",
    lastModified: new Date()
  },
};
