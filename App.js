/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {createForm} from '@formily/core';
import {createSchemaField, FormProvider} from '@formily/react';
import {MyCom} from './src/components/MyCom';

const form = createForm();

const SchemaField = createSchemaField({
  components: {MyCom},
});

const handleClick = (data) => {
  console.log('接收click事件', data);
};

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      'x-component': 'MyCom',
      'x-component-props': {
        title: 'test title',
        onClick: (data) => handleClick(data),
      },
    },
  },
};

const App: () => React$Node = () => {
  return (
    <View>
      <FormProvider form={form}>
        <SchemaField schema={normalSchema} />
      </FormProvider>
    </View>
  );
};

export default App;
