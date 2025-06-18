import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';
import List from './components/Board/List';
import Form from './components/Board/Form';
import ChatRooms from './components/Chat/ChatRooms';
import ChatRoom from './components/Chat/ChatRoom';
import Cookie from './components/Cookie';
import Toggle from './components/Button/Toggle';
import AdminPage from './components/Pages/Admin/AdminPage';

function App() {
  return (
    <>
        <Routes>
            {/* 사용자 레이아웃 */}
            <Route element={<UserLayout />}>
                <Route path='/' element={<h1>사용자 페이지</h1>}/>
                <Route path='/list' element={<List />}/>
                <Route path='/form' element={<Form />}/>
                <Route path='/rooms' element={<ChatRooms />}/>
                <Route path='/chat/:roomId' element={<ChatRoom />}/>
                <Route path='/cookie' element={<Cookie />}/>
                <Route path='*' element={<h1>존재하지 않는 페이지입니다</h1>}/>
            </Route>

            {/* 관리자 레이아웃 */}
            <Route element={<AdminLayout />}>
                <Route path='/admin' element={<AdminPage />}/>
                <Route path='/admin/account' element={<h1>계정 관리 페이지</h1>}/>
                <Route path='/admin/form' element={<h1>공지사항 관리 페이지</h1>}/>
                <Route path='/admin/board' element={<h1>게시판 관리 페이지</h1>}/>
                <Route path='/admin/chat' element={<h1>채팅 관리 페이지</h1>}/>
                <Route path='/admin/log' element={<h1>로그 관리 페이지</h1>}/>
            </Route>
        </Routes>

        <Toggle />
    </>
  )
}

export default App;