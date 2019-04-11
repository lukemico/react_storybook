import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
    .addWithJSX('with background 1', () => (
        <Button bg="palegoldenrod">Hello World 1</Button>
    ))
    .addWithJSX('with background 2', () => (
        <Button bg="green">Hello World 2</Button>
    ));