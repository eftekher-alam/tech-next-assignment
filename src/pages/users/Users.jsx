import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from './../../components/user_card/UserCard';
import LoadingAnimation from "../../components/loading_animation/LoadingAnimation";
import { FaSortAlphaDown, FaSearch } from "react-icons/fa";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { IoAddCircle } from "react-icons/io5";

const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchSummery, setSearchSummery] = useState("");
    const [isModalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        scrollTo(0, 0);
        axios.get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data.users);
                setFetchedUsers(res.data.users);
                setIsLoading(false);
            })
    }, [])


    //sort users array
    const handlerSort = (e) => {
        const sortParameter = e.target.value;
        if (sortParameter === "Name") {
            const usersSortedByName = [...users].sort((a, b) => a?.firstName.toLowerCase().localeCompare(b?.firstName.toLowerCase()))
            setUsers(usersSortedByName)
        }
        else if (sortParameter === "Email") {
            const usersSortedByEmail = [...users].sort((a, b) => a?.email.toLowerCase().localeCompare(b?.email.toLowerCase()))
            setUsers(usersSortedByEmail)
        }
        else if (sortParameter === "Company") {
            const usersSortedByCompany = [...users].sort((a, b) => a?.company?.name.toLowerCase().localeCompare(b.company?.name.toLowerCase()))
            setUsers(usersSortedByCompany)
        }

    }

    //search user  by name 
    const handlerSearch = () => {
        const searchText = document.getElementById("search").value;
        const filteredUsers = fetchedUsers.filter((user) => (user.firstName + user.lastName).toLowerCase().includes(searchText.toLowerCase()));
        setUsers(filteredUsers);

        //Clearing the input field
        if (searchText.length)
            setSearchSummery(`Results for ${searchText}, ${filteredUsers?.length} items found.`);
        else
            setSearchSummery("");
        document.getElementById("search").value = "";

        //Reset the sort select option
        const test = document.getElementById("selectSortOptions");
        test.value = "1";
    }

    //handler of create new user
    const handlerCreateUser = (e) => {
        e.preventDefault();

        setModalOpen(false);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to save the user!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {

                //Here we can  send data to server and then add new user 
                const user = {
                    firstName: e.target.firstName.value,
                    lastName: e.target.lastName.value,
                    company: e.target.company.value,
                    address: {
                        road: e.target.road.value,
                        suite: e.target.suite.value,
                        city: e.target.city.value,
                    }
                }

                Swal.fire({
                    title: "Saved!",
                    icon: "success"
                });
                location.reload();
            }
        });



    }


    return (
        <div className="m-10 mt-5">

            {
                isLoading && <LoadingAnimation></LoadingAnimation>
            }
            {
                !isLoading && <div className="flex justify-center items-center gap-5 lg:gap-10 pb-7 flex-wrap" data-aos="fade-down">
                    <div className="custom-input rounded-none py-1 w-64" >
                        <div className="flex">
                            <input id="search" type='text' autoComplete="off" placeholder="Search by user's name" className="outline-none md:pl-3 text-black" />
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
                        <select id="selectSortOptions" className="outline-none w-full bg-transparent font-medium text-[#7d5fff]" onChange={handlerSort}>
                            <option disabled selected value={"1"}>Pick Option</option>
                            <option>Name</option>
                            <option>Email</option>
                            <option>Company</option>
                        </select>
                    </div>
                    <button className="button" onClick={() => {
                        document.getElementById('my_modal_5').showModal();
                        setModalOpen(true);
                    }}>
                        <span className="flex justify-center items-center py-1 px-3 text-violet-400 hover:text-white gap-1"><IoAddCircle /> <span>Add User</span></span>
                    </button>
                    {
                        isModalOpen && <dialog id="my_modal_5" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl relative">
                                <h3 className="font-bold text-3xl pb-2 text-center gradient-text">Add new user</h3>
                                <hr />
                                <form onSubmit={handlerCreateUser}>
                                    <div className="flex gap-5 max-md:flex-col">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">First Name</span>
                                            </div>
                                            <input type="text" name="firstName" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">Last Name</span>
                                            </div>
                                            <input type="text" name="lastName" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                    </div>
                                    <div className="flex gap-5 max-md:flex-col">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">Email</span>
                                            </div>
                                            <input type="text" name="email" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">Company Name</span>
                                            </div>
                                            <input type="text" name="company" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                    </div>
                                    <div className="label-text gradient-text font-semibold text-center pt-4 pb-1">Address</div>
                                    <hr />
                                    <div className="flex md:gap-4 max-md:flex-col">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">Road</span>
                                            </div>
                                            <input type="text" name="road" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">Suite</span>
                                            </div>
                                            <input type="text" name="suite" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text gradient-text font-semibold">City</span>
                                            </div>
                                            <input type="text" name="city" placeholder="Type here" className="input input-md input-bordered w-full " />
                                        </label>
                                    </div>
                                    <input type="submit" data-dismiss="modal" value={"Save"} className="button gradient-text py-1 px-3 absolute mt-6" />
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="button gradient-text py-1 px-3">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    }
                </div>
            }
            {
                searchSummery && <div className="w-full text-center font-semibold text-gray-400 pb-7">{searchSummery}
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