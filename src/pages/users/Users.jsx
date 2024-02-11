import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from './../../components/user_card/UserCard';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => setUsers(res.data.users))
    }, [])


    return (
        <div className="m-10">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10">
                {
                    users.map((user, index) => <UserCard key={index} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Users;