import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import StarRating from "../components/StarRating";


const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>{selectedRestaurant && (
      <>
        <h1 className="text-center mt-3">{selectedRestaurant.restaurant.name}</h1>
        <div className="text-center">
          <StarRating rating={selectedRestaurant.restaurant.average_rating} />  
          <span className="text-warning ml-1">
            {selectedRestaurant.restaurant.count ? ` (${selectedRestaurant.restaurant.count})` : ' (0)'}
          </span>
        </div>
        <div className="mt-3">
          <Reviews reviews={selectedRestaurant.reviews} />
          <AddReview />
        </div>
      </>
    )}</div>
  )
}

export default RestaurantDetailPage