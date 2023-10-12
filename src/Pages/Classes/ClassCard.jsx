
const ClassCard = ({ course }) => {
  const { name, image, instructorName, availableSeats, price } = course;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl my-3">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title uppercase text-sm font-bold">{name}</h2>
          <p>Instructor: {instructorName}</p>
          <p>Available seats: {availableSeats}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
