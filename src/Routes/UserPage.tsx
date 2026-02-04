import profile from "../assets/photo.png";
import cameraIcon from "../assets/camera.svg";
import { useUser } from "../context/userContext";

const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto shadow-lg rounded-xl">
        <div className="bg-white">
          <h1 className="text-[18px] pb-5 pt-2">Account Settings</h1>
        </div>

        <div className="flex gap-5 py-5">
          <div className="relative">
            <div>
              <img
                src={profile}
                alt="profile-photo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
              <img src={cameraIcon} alt="icon" className="w-3 h-3" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {/* @ts- */}
            <h1 className="text-[15px] font-medium">{user?.fullname}</h1>
            <p className="text-[14px] text-gray-500">{user?.email}</p>
          </div>
        </div>

        <p className="text-[14px] pb-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="border border-dashed border-gray-300 my-3"></div>
      </div>
    </div>
  );
};

export default UserProfile;
