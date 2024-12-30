const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <img
                className="w-10 h-10 rounded-full"
                alt="User Avatar"
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
            />
            <div>
                <span className="font-bold px-2">{name}</span>
                <p className="">{message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
