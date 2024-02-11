import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from './../../components/user_card/UserCard';
import LoadingAnimation from "../../components/loading_animation/LoadingAnimation";


const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data.users);
                setIsLoading(false);
            })
    }, [])


    return (
        <div className="m-10">
            {
                isLoading && <LoadingAnimation></LoadingAnimation>
            }
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10">
                {
                    users.map((user, index) => <UserCard key={index} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Users;