import React, { useEffect, useState } from 'react';

function Profile() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://your-websocket-url');

    // Connection opened
    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    // Listen for messages
    socket.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Connection closed
    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    // Handle errors
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Clean up when the component is unmounted
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    const socket = new WebSocket('ws://your-websocket-url');
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(inputValue);
      setInputValue('');
    } else {
      console.log('WebSocket is not open.');
    }
  };

  return (
    <div>
      <h2>WebSocket Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Profile;
