function ProfileCard({ profile, name, company_name }) {
    return (
        <div className="flex gap-2 justify-start items-center">
            <div className="flex">
                {profile.pic1 && (
                    <div className="-mr-5 rounded-full w-12 h-12 flex overflow-hidden justify-center items-center">

                        <img src={profile.pic1}
                            className="min-w-16 min-h-16"
                            alt="logo" />


                    </div>
                )}
                <img src={profile.pic2}
                    className="w-12 h-12 rounded-full"
                    alt="logo" />
            </div>
            <div className="flex flex-col items-start text-sm">
                <span className="font-medium">{name}</span>
                <span className="text-gray-400">{company_name}</span>
            </div>
        </div>
    )
}

export default ProfileCard