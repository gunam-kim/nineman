import AdminPageHeader from '../Common/Header/AdminPageHeader';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    /* const { auth, logout } = useContext(AuthContext); */
    const clickLogout = () => {
        logout();
    };

    return (
      <>
          <AdminPageHeader />   
          <Outlet />
      </>
    );
};

export default AdminLayout;