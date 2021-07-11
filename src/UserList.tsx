import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

interface Props {
    page: number;
}

const UserList: React.FC<Props> = (page) => {

    const [users, setUsers] = useState<any>([]);

    useEffect(() => {

        axios.get(
            "https://randomuser.me/api/?inc=id,name,gender,email&page=" + 
                page + 
                "&results=20"
        ).then((response) => { 
            console.log(response.data.results);
            setUsers(response.data.results);
        });

    }, [page]);

    return(
        <div>
            {users.map((u: any) => (
                <div>email={u.email}</div>
            ))}
        </div>
    );
};

UserList.defaultProps = {};

export default React.memo(UserList);