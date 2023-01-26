import { useState } from "react"


const AddReview = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");
  
  return (
    <div className="mb-2">
        <form action="">
            <div className="d-flex flex-row gap-1 justify-content-evenly align-items-center">
                <div className="col-8">
                  <label htmlFor="name">Name</label>
                  <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Name" 
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="rating">Rating</label>
                  <select 
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    className="form-select my-1 mr-sm-2" 
                    id="rating"
                  >
                    <option disabled>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="Review" className="mt-3">Review</label>
              <textarea 
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                id="Review" 
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-primary mt-3">
              Submit
            </button>
        </form>
    </div>
  )
}

export default AddReview