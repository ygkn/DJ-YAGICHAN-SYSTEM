import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';

export const Login = props => (
  <div>
    <Modal isOpen={!props.isLoggedIn}>
      <Tabs>
        <TabList>
          <Tab>LogIn</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanel>
          <form onSubmit={({target: {userId, password}}) => props.login(userId.value, password.value)}>
            <label>
              User Id:
              <input type="text" placeholder="Input user id..." name="userId" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Input password..." name="password" />
            </label>
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={({target: {userId, password, userScreenName}}) => props.signup(userId.value, password.value, userScreenName.value)}>
            <label>
              Screen Name:
              <input type="text" placeholder="Input screen name..." name="userScreenName" />
            </label>
            <label>
              User Id:
              <input type="text" placeholder="Input user id..." name="userId" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Input password..." name="password" />
            </label>
          </form>
        </TabPanel>
      </Tabs>
    </Modal>
    {props.children}
  </div>
)