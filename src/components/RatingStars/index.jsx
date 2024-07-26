import { Star } from "../Star"

export const RatingStars = ({ rating, changeRating }) => {

    return (
            <div>
                {[1, 2, 3, 4, 5].map((index) => (
                    <Star  key={index} filled={index <= rating} onClick={() => changeRating(index)} />
                ))}
            </div>
    )
}