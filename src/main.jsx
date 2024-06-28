import ReactDOM from 'react-dom/client'
import './index.css'
import { restaurants } from './mock.js'

ReactDOM.createRoot(document.getElementById('root')).render(
<div>
    <h1>Restaurants</h1>
    <div className='restaurant-block'>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <h3>Menu:</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <h3>Reviews:</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.user}</strong>: {review.text} (Rating: {review.rating})
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
)
