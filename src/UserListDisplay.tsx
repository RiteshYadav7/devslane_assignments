import React, { useState } from "react";
import UserList from "./UserList";

interface Props {}

const UserListDisplay: React.FC<Props> = (props) => {

    const [page, setPage] = useState(0);

    return(
        <div>
            <UserList page={page} />
            <button onClick={() => setPage(page + 1)} className="bg-green-700 py-2 px-4">Next</button>
        </div>
    );
};

UserListDisplay.defaultProps = {};

export default React.memo(UserListDisplay);