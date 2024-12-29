


const VideoCard  = ({info}) => {
    console.log(info);
    const {snippet, statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    return(
        <div className ="p-2 m-2 w-72">
            <img className ="rounded-lg" alt="thumbnail" src ={thumbnails.medium.url} />
            <ul>
                <li className = "font-bold py-2 ">{title}</li>
                <li className = "">{channelTitle}</li>
                <li className = "">{statistics.viewsCount} views</li>

            </ul>
        
     
        </div>

    );
};

const RedBorderVideoCard =() =>{
    return(
        <div className="p-1 m-1 border border-red-900">
        <VideoCard/>
        </div>
    );
};
export default VideoCard;