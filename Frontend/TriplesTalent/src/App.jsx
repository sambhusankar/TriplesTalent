import React from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome/welcome';
import Register from './components/auth/register/register';
import Login from './components/auth/login/login';
import Post from './pages/Post-Project/post';
import Clie_Dash from './components/dashboards/client/client-dash';
import Mana_Dash from './components/dashboards/manager/manager-dash';
import Tech_Dash from './components/dashboards/techteam/techteam-dash';
import Free_Dash from './components/dashboards/freelancer/freelancer-dash';
import TrackProject from './components/projects/track-project/track-project';
import SingleProject from './components/projects/single-project/project';

import { Store, persistor } from './Redux/store'; // Import persistor
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/post-project" element={<Post />} />
          <Route path="/Client-dashboard" element={<Clie_Dash />} />
          <Route path="/Freelancer-dashboard" element={<Free_Dash />} />
          <Route path="/Manager-dashboard" element={<Mana_Dash />} />
          <Route path="/Techteam-dashboard" element={<Tech_Dash />} />
          <Route path="/track-project" element={<TrackProject />} />
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
