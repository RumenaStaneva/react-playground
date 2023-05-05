function ProfileCard({ title, handle, image }) {

    return (
        <div className="card">
            <h3>Title is: {title}</h3>
            <p>Handle is: {handle}</p>
            <img src={image} alt={title + " logo"} />
        </div>
    )
}

export default ProfileCard;