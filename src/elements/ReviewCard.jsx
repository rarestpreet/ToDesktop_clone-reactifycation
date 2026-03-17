import ProfileCard from "./ProfileCard.jsx";

function ReviewCard({ profile, name, company_name }) {

    return (
        <div className="review flex flex-col gap-4
        hover:bg-linear-to-b from-purple-50 to-orange-50
        border border-gray-200 p-5 rounded-2xl">
            <div className="flex gap-2 justify-start items-center">
                <i className="fa-solid fa-code text-indigo-800 rounded-full px-3 py-3.5 bg-blue-200"></i>
                <span className="text-xl font-medium">Native APIs</span>
            </div>
            <span className="text-lg">
                What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.
            </span>
            <ProfileCard
                profile={profile}
                name={name}
                company_name={company_name} />
        </div>
    )
}

export default ReviewCard