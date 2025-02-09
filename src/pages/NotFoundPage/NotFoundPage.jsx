import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");
  return (
    <div>
      <Link to={goBack.current}>Go Back</Link>
      <p>Not Found 404 </p>
    </div>
  );
};

export default NotFoundPage;
