import { html, TemplateResult } from 'lit';
import '../src/run-test.js';

export default {
  title: 'RunTest',
  component: 'run-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <run-test style="--run-test-background-color: ${backgroundColor}" .header=${header}></run-test>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
