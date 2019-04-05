import { Story } from '@storybook/vue'

function addStories (stories: Story, context) {
  context.keys().forEach(filename => {
    const addStory = context(filename).default
    addStory(stories)
  })
}

export {
  addStories
}