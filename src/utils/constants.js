const GOOGLE_API_KEY = "AIzaSyBYvVJQ8XqjS0WFriL69yoPCt0ryQuKhpg";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${GOOGLE_API_KEY}`;
