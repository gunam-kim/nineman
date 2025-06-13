import { useState } from 'react';
import Header from './components/Common/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import List from './components/Board/List';
import Form from './components/Board/Form';
import ChatRooms from './components/Chat/ChatRooms';
import ChatRoom from './components/Chat/ChatRoom';
import Cookie from './components/Cookie';
import Toggle from './components/Button/Toggle';

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<h1>프로젝트 연습</h1>}/>
            <Route path='/list' element={<List />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/rooms' element={<ChatRooms />}/>
            <Route path='/chat/:roomId' element={<ChatRoom />}/>
            <Route path='/cookie' element={<Cookie />}/>
            <Route path='*' element={<h1>존재하지 않는 페이지입니다</h1>}/>
        </Routes>

        <Toggle />
    </>
  )
}

export default App;