import React from 'react';
// import { wInfo } from './utils';
// import { action } from '@storybook/addon-actions';


// import { storiesOf, addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button } from './Button';

// storiesOf('Button', module)
//     .addWithJSX(
//         'with background 1', 
//         wInfo(`description`
//         ) 
//         <Button bg="palegoldenrod">Hello World 1</Button>
//     ))
//     .addWithJSX('with background 2', () => (
//         <Button bg="green">Hello World 2</Button>
//     ));





// storiesOf('Button', module).add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
// ));


import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

const styles = {
  textAlign: 'center',
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module).add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
));

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emojies', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));