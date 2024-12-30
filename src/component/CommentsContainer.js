const commentsData = [
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [
                {
                  name: "Shubham Gaurav",
                  text: "BE-CSE Student and a Full-Stack Developer ",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Gaurav",
      text: "BE-CSE Student and a Full-Stack Developer ",
      replies: [
        {
          name: "Shubham Gaurav",
          text: "BE-CSE Student and a Full-Stack Developer ",
          replies: [
            {
              name: "Shubham Gaurav",
              text: "BE-CSE Student and a Full-Stack Developer ",
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
  
    return (
      <div className="flex items-start space-x-4 mb-6 hover:bg-blue-50 rounded-xl transition-all duration-300 p-4">
        <img
          className="w-14 h-14 rounded-full border-2 border-blue-400"
          alt="user"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
        <div className="flex-1 bg-white rounded-xl shadow-md border border-blue-200">
          <div className="p-4">
            <p className="font-semibold text-lg text-blue-800">{name}</p>
            <p className="text-sm text-blue-600 mt-2">{text}</p>
          </div>
          {/* Replies Section */}
          {replies && replies.length > 0 && (
            <div className="pl-6 mt-4 space-y-4 border-t border-blue-200 pt-4">
              <CommentsList comments={replies} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index} className="my-4">
        <Comment data={comment} />
      </div>
    ));
  };
  
  const CommentsContainer = () => {
    return (
      <div className="m-5 p-8 bg-blue-50 shadow-lg rounded-xl max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold text-blue-900 mb-8">Comments</h1>
        <CommentsList comments={commentsData} />
      </div>
    );
  };
  
  export default CommentsContainer;