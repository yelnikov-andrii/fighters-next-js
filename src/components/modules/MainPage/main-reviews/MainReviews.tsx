import Reviews from "./Reviews";
import ReviewsMarquee from "./ReviewsMarquee";

function MainReviews() {
    return (
        <section className="py-8">
            <ReviewsMarquee />
            <div className="px-4">
                <Reviews />
            </div>
        </section>
    );
}

export default MainReviews;