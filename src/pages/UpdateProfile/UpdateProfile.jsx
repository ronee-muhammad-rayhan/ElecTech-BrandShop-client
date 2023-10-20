import useAuth from "../../hooks/useAuth";

const UpdateProfile = () => {
    const { user, updateUserProfile, /* updateUserEmail */ } = useAuth();

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        const form = event.target;
        const displayName = form.displayName.value;
        // const email = form.email.value;
        const photo = form.photo.value;

        const profile = {
            displayName,
            photoURL: photo
        }

        updateUserProfile(profile)
            .then(result => {
                console.log(user);
                console.log(profile);
                console.log('Profile updated');
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
        // updateUserEmail(email)
        //     .then(result => {
        //         console.log(email);
        //         console.log('Email updated');
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }

    return (
        <div>
            Profile
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">User Profile</h1>
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Display Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Display Name" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;