import TextField from './TextField.svelte'

export default {
  title: 'Form/TextField',
  component: TextField
}

const TextFieldStory = (args) => ({
  Component: TextField,
  props: args
})

export const Default = TextFieldStory.bind({})
Default.args = {
  name: 'text-field',
  label: "Text Field"
}