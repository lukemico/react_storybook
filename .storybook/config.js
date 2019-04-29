import { configure, setAddon, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

addDecorator(
    withInfo({
      header: true, // Global configuration for the info addon across all of your stories.
    })
  ); 
setAddon(JSXAddon);

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(file => req(file));   
}

configure(loadStories, module);
