import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from './../../components/user_card/UserCard';
import LoadingAnimation from "../../components/loading_animation/LoadingAnimation";
import { FaSortAlphaDown, FaSearch } from "react-icons/fa";


const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data.users);
                setFetchedUsers(res.data.users);
                setIsLoading(false);
            })
    }, [])

    const handlerSort = (e) => {
        const sortParameter = e.target.value;
        if (sortParameter === "Name") {
            const usersSortedbyName = [...users].sort((a, b) => a?.firstName.toLowerCase().localeCompare(b?.firstName.toLowerCase()))
            setUsers(usersSortedbyName)
        }
        else if (sortParameter === "Email") {
            const usersSortedbyName = [...users].sort((a, b) => a?.email.toLowerCase().localeCompare(b?.email.toLowerCase()))
            setUsers(usersSortedbyName)
        }
        else if (sortParameter === "Company") {
            const usersSortedbyName = [...users].sort((a, b) => a?.company?.name.toLowerCase().localeCompare(b.company?.name.toLowerCase()))
            setUsers(usersSortedbyName)
        }

    }

    const handlerSearch = () => {
        const searchText = document.getElementById("search").value;
        const filteredUsers = fetchedUsers.filter((user) => (user.firstName + user.lastName).toLowerCase().includes(searchText.toLowerCase()));
        setUsers(filteredUsers);
        document.getElementById("search").value = "";
    }


    return (
        <div className="m-10 mt-8">
            {
                isLoading && <LoadingAnimation></LoadingAnimation>
            }
            {
                !isLoading && <div className="flex justify-center items-center gap-5 md:gap-10 pb-10 flex-wrap" data-aos="zoom-out">
                    <div className="custom-input rounded-none py-1 w-64" >
                        <div className="flex">
                            <input id="search" type='text' autoComplete="off" placeholder="Search by user's name" className="outline-none pl-3 text-black" />
                            <button
                                className="flex items-center gap-1 px-5 py-1 text-violet-500"
                                onClick={handlerSearch}
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    <div className="custom-input grid grid-cols-2 px-3 py-1 gap-1 w-64">
                        <label className='font-medium text-[#ff6c6c]'><span className="flex items-center gap-1"><FaSortAlphaDown /> Sort by</span></label>
                        <select className="outline-none w-full font-medium text-[#7d5fff]" onChange={handlerSort}>
                            <option>Name</option>
                            <option>Email</option>
                            <option>Company</option>
                        </select>
                    </div>
                </div>
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