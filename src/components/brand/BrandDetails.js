import { Link, useParams } from "react-router-dom";

const BrandDetails = () => {
  const params = useParams();
  return (
    <>
      <div> The id is {params.brandId}</div>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default BrandDetails;
