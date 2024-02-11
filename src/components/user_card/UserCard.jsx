import PropTypes from 'prop-types';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const { id, image, firstName, lastName, email, address, company } = user;
    console.log(user);
    return (
        <div className="card  glass">
            <figure><img src={image} alt="car!" className="h-44" /></figure>
            <div className="card-body p-3">
                <Link to={`/user-details/${id}`} className="gradient-text inline-block text-lg font-medium">{firstName + " " + lastName}</Link>
                <div className="tooltip tooltip-top" data-tip="Email">
                    <p className='flex justify-start items-center gap-2 text-start'><MdEmail /> <span>{email}</span></p>
                </div>
                <div className="tooltip tooltip-top" data-tip="Company Name">
                    <p className='flex justify-start items-center gap-2 text-start'><BsBuildingsFill /> <span>{company.name}</span></p>
                </div>
                <div className="tooltip tooltip-top" data-tip="Address">
                    <p className='flex justify-start items-center gap-2 text-start'><FaLocationDot /> <span>{address.address + ", " + address.city + ", " + address.state}</span></p>
                </div>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object
}

export default UserCard;