const Account = () => {
    return (
        <div>
            <h1>계정 관리</h1>
            <p>여기는 계정 관리 페이지입니다.</p>
            <p>여기서 계정을 추가, 수정, 삭제할 수 있습니다.</p>
            <nav>
                <a href="/admin/account-list">회원 목록</a>
                |
                <a href="/admin/manage-account">회원 관리</a>
            </nav>
        </div>
    );
};

export default Account;