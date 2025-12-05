import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UserProfile = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    if (!state) {
        return <h2>No User Data Found</h2>;
    }

    return (
        <div className="profile-container">
            <button className="back-btn dashboard_iocn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>

            <div className="user_profile">
                <div className="profile-card">
                    <div className="profile-img-box">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                   
                    <div className="profile-form">

                        <div className="form-group">
                            <label htmlFor="userId">User ID</label>
                            <input id="userId" type="text" className="form-control-search" value={id} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input id="userName" type="text" className="form-control-search" value={state.name} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="text" className="form-control-search" value={state.phone} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="form-control-search" value={state.email} readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input id="address" type="text" className="form-control-search" value={state.address} readOnly />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;
