import image from "../../../public/defaultImage.png";

export const Profile = () => {
  return (
    <div className="w-[20%] hidden lg:block fixed right-0 pt-20 bg-white h-screen px-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
            <div>
                <img className="w-14 h-14 rounded-full" src={image} alt="userImage"/>
            </div>
            <div>
                <span className="font-semibold text-sm">Hello,</span>
                <p className="font-semibold text-md">Soufian boukir</p>
            </div>
        </div>
    </div>
  )
}
