import { AdminPageHeaderContainer, AdminPageHeaderObject, AdminPageHeaderButton, AdminMain } from "../../Style/Styles";

const AdminPageHeader = () => {
  return (
    <>
        <AdminPageHeaderContainer>
            <AdminPageHeaderObject>
                <a href='admin/account'>회원 관리</a>
                <a href='admin/form'>공지사항 관리</a>
                <a href='admin/form'>게시판 관리</a>
                <a href='admin/chat'>채팅 관리</a>
                <a href='admin/log'>로그 관리</a>
            </AdminPageHeaderObject>

            <AdminPageHeaderButton>
                <ul><a href='/'>MAIN</a></ul>
                <ul><a href='/logout'>로그아웃</a></ul>
            </AdminPageHeaderButton>

        </AdminPageHeaderContainer>
    </>
  );
};

export default AdminPageHeader;