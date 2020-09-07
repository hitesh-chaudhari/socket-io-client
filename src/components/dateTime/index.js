import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import moment from 'moment';

import '../../App.css';
import logo from "../../logo.svg";
const END_POINT = '127.0.0.1:4001';

const DateTme = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIoClient(END_POINT);

    socket.on("FromAPI", (data) => {
      setResponse(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's <time dateTime={response}>{moment(response).format('MMMM Do YYYY, h:mm:ss a')}</time>
        </p>
      </header>
    </div>
  );
};

export default DateTme;