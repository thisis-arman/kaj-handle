import HeroBanner from "./HomeComponent/HeroBanner";
import NewsletterCTA from "./HomeComponent/NewsletterCTA";
import SpecialSection from "./HomeComponent/SpecialSection";


const HomePage = () => {
    return (
        <div>
            <HeroBanner />
            <SpecialSection />
            <NewsletterCTA />
        </div>
    );
};

export default HomePage;