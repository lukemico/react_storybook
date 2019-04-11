import React from 'react';

import {storeisOf, storiesOf} from '@storybook/react';
import {Button} from './Button';

storiesOf('Button', module)
    .addWithJSX('with background', () => (
    <Button bg="palegoldenrod">Hello World 1</Button>
))
    .addWithJSX('with background 2', () => (
    <Button bg="palegoldenrod">Hello World 2</Button>
));