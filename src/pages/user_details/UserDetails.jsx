import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data.users);
            })
    }, [])

    useEffect(() => {
        const findUser = users.find((user) => user.id == id);
        setUser(findUser);
    }, [id, users])


    // const { image, firstName, lastName, email, address, company } = user;
    // console.log(image);

    console.log(user);

    return (
        <div className="flex max-md:flex-col gap-10 justify-center m-10">
            <div className="max-md:block max-md:mx-auto">
                {
                    user && <img src={user?.image} alt="" className="max-md:h-52" />
                }
            </div>
            <div>
                {
                    user && <div>
                        <h1 className="gradient-text inline-block text-5xl font-bold ml-3 mb-5">User Details</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="gradient-text">First Name</th>
                                        <td>{user?.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th className="gradient-text">Last Name</th>
                                        <td>{user?.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th className="gradient-text">Email</th>
                                        <td>{user?.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="gradient-text">Company Name</th>
                                        <td>{user?.company?.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="gradient-text">Address</th>
                                        <td>{user?.address?.address}, {user?.address?.city}, {user?.address?.state} {user?.address?.postalCode}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default UserDetails;