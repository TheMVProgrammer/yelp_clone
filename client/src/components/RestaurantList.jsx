import { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {

    const {restaurants, setRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        
    }, []);

  return (
    <div className="list-group">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td>
                        <button className="btn btn-warning">
                            Update
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td>
                        <button className="btn btn-warning">
                            Update
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList