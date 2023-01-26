import StarRating from "./StarRating"

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2 gap-3 d-flex justify-content-between">
        {reviews.map((review) => (
            <div key={review.reviews_id} className="card text-white bg-primary mb-3" style={{maxWidth: '30%'}}>
                <div className="card-header d-flex justify-content-between">
                    <span>{review.name}</span>
                    <span>{<StarRating rating={review.rating} />}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {review.review}
                    </p>
                </div>
            </div>      
        ))}
    </div>
  )
}

export default Reviews