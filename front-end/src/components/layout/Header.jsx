

export const Header = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="bg-white py-2 px-6 pl-20 w-[100%] fixed z-10">
        <p className="font-semibold text-lg">👋Hello, {user ? user.full_name : "user"}</p>
        <p className="text-sm">You have 3 projects</p>
    </div>
  )
}
