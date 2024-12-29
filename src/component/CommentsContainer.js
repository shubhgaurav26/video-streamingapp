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
      <div className="flex items-start space-x-2 mb-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
        <img
          className="w-12 h-12 rounded-full"
          alt="user"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
        <div className="flex-1 px-4 py-3 bg-white rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold text-sm text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm mt-1">{text}</p>
  
     
          {replies && replies.length > 0 && (
            <div className="pl-6 mt-2 space-y-2">
              <CommentsList comments={replies} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index} className="my-2">
        <Comment data={comment} />
      </div>
    ));
  };
  
  const CommentsContainer = () => {
    return (
      <div className="m-5 p-6 bg-gray-50 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Comments</h1>
        <CommentsList comments={commentsData} />
      </div>
    );
  };
  
  export default CommentsContainer;
  