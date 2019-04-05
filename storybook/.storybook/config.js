import { configure, addDecorator, addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withInfo } from 'storybook-addon-vue-info'
import theme from './theme'

addDecorator(withInfo)
addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme
  },
  viewport: {
    defaultViewport: 'iphone6',
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  },
  info: true
})

function loadStories() {
  const context = require.context('..', true, /\.stories\.ts$/)
  context.keys().forEach(context)
}

configure(loadStories, module)
