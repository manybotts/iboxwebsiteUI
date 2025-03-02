import { useParams } from "react-router-dom";
import BACKEND_URL from "./config";

const Watch = () => {
  const { file_id } = useParams();
  return (
    <div>
      <h2>🎬 Now Streaming</h2>
      <video controls width="100%">
        <source src={`${BACKEND_URL}/watch/${file_id}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Watch;
