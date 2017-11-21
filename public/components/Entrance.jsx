import React from 'react';

import Logo from './Logo';

import Link from '../../redux-tower/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Entrance = props => (
  <div>
    <section>
      <Tabs>
        <TabList>
          <Tab>Enter Room</Tab>
          <Tab>Create Room</Tab>
        </TabList>
        <TabPanel>
          <form onSubmit={({target: {roomId}}) => props.enterRoom(roomId.value)}>
            <label>
              Room Id:
              <input type="text" placeholder="Input room id..." name="roomId" />
            </label>
          </form>
        </TabPanel>
        <TabPanel>
          <form onSubmit={({target: {roomId, name}}) => props.createRoom(roomId.value, name.value)}>
            <label>
              Room Id:
              <input type="text" placeholder="Input room id..." name="roomId" />
            </label>
            <label>
              Room Name:
              <input type="text" placeholder="Input room name..." name="name" />
            </label>
          </form>
        </TabPanel>
      </Tabs>
    </section>
    <section>
      <h2>History</h2>
      <ul>
        {props.roomHistory.map(({id, name}) => (
          <li>
            <Link to={`/room/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
)