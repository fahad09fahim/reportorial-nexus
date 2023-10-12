import PopularClass from "../../../component/PopularClasses/PopularClass";
import PopularInstructor from "../../../component/PopularInstructor/PopularInstructor";
import SubBanner from "../../../component/SubBanner/SubBanner";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClass />
      <SubBanner />
      <PopularInstructor/>
    </div>
  );
};

export default Home;
