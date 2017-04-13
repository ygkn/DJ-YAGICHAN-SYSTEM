"use strict"

let myId;

const socket = io();

socket.on("init", (id) => myId = id);