import AdminPageHeader from "../../Common/Header/AdminPageHeader";
import Account from "./AccountManagement/Account";

const AdminPage = () => {
    return (
        <>
            <AdminPageHeader />
            <p>여기는 관리자 전용 페이지입니다.</p>
            <p>여기서 관리 작업을 수행할 수 있습니다.</p>
            <nav>
                <Account />
            </nav>
        </>
    );
};

export default AdminPage;