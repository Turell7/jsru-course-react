import { Star } from "../Star";

export const RatingStars = ({ rating, dispatch }) => {

    const handleRating = (rate) => {
        dispatch({ type: "setRating", payload: rate})
    }

    return (
            <div>
                {[1, 2, 3, 4, 5].map((index) => (
                    <Star  key={index} filled={index <= rating} onClick={() => handleRating(index)} />
                ))}
            </div>
    );
};