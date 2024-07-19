import Reviews from "./Reviews";
import ReviewsMarquee from "./ReviewsMarquee";

function MainReviews() {
    return ( 
        <section className="py-8 px-4">
            <ReviewsMarquee />
            <Reviews />
        </section>
     );
}

export default MainReviews;