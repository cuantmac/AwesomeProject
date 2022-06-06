/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createForm} from '@formily/core';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createSchemaField, FormProvider} from '@formily/react';
import {InputItem} from '@ant-design/react-native';

const form = createForm();

const SchemaField = createSchemaField({
  components: {InputItem},
});

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-component': 'InputItem',
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-component': 'InputItem',
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
