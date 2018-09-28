/* eslint-disable import/no-unresolved */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import {RightArrowIcon} from 'imports/icons/index';
import Button from './index';

// TODO: Create onClick test

test('Button component', () => {
  const button = TestRenderer.create(
    <Button title="insighty-title" className="insighty-className">
      <RightArrowIcon />
    </Button>
  );

  const emptyDisabledButton = TestRenderer.create(
    <Button title="" type="button" disabled />
  );

  expect(button.toJSON().type).toBe('a');
  expect(button.toJSON().props.className).toMatch('insighty-className');
  expect(button.toJSON().children.find(({props: {className}}) => className === 'button-icon')
    .children[0].type).toBe('svg');
  expect(button.toJSON().props).toMatchObject({
    href: '',
    className: 'animated-button insighty-className'
  });

  expect(emptyDisabledButton.toJSON().type).toBe('button');
  expect(emptyDisabledButton.toJSON().props.type).toBe('submit');
  expect(emptyDisabledButton.toJSON().props).toMatchObject({disabled: true});
  expect(emptyDisabledButton.toJSON().children.find(({props: {className}}) => className === 'button-icon').children)
    .toBe(null);
  expect(emptyDisabledButton.toJSON().props).toMatchObject({
    type: 'submit',
    disabled: true
  });
});
