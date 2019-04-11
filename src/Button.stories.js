import React from 'react';

import {storeisOf, storiesOf} from '@storybook/react';
import {Button} from './Button';

storiesOf('Button', module).add('with background', () => (
    <Button bg="palegoldenrod">Hello World</Button>
))