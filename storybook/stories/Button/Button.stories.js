import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { LinkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("customer", (text, link, image) => (
    <Button onPress={action("clicked-text")}>
      <Text>Download the app Now</Text>
    </Button>
  ))
  .add("seller", () => (
    <Button onPress={action("clicked-text")}>
      <Text>Donwload the Seller app Now</Text>
    </Button>
  ))
  .add("delivery", () => (
    <Button>
      <Text>Donwload the Delivery app Now</Text>
    </Button>
  ));
