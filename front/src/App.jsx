import { Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import List from './components/Board/List';
import Form from './components/Board/Form';
import ChatRooms from './components/Chat/ChatRooms';
import ChatRoom from './components/Chat/ChatRoom';
import Cookie from './components/Cookie';
import Toggle from './components/Button/Toggle';

function App() {
  return (
    <>
        <Routes>
            {/* 사용자 레이아웃 */}
            <Route element={<UserLayout />}>
                <Route path='/' element={<h1>프로젝트 연습</h1>}/>
                <Route path='/list' element={<List />}/>
                <Route path='/form' element={<Form />}/>
                <Route path='/rooms' element={<ChatRooms />}/>
                <Route path='/chat/:roomId' element={<ChatRoom />}/>
                <Route path='/cookie' element={<Cookie />}/>
                <Route path='*' element={<h1>존재하지 않는 페이지입니다</h1>}/>
            </Route>

            {/* 관리자 레이아웃 */}
            <Route path='/admin' element={<List />}/>
        </Routes>

        <Toggle />
    </>
  )
}

export default App;