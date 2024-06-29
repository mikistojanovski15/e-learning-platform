import BannerEducationComponent from './(components)/BannerEducationComponent';
import BannerGrowComponent from './(components)/BannerGrowComponent';
import BannerMoreComponent from './(components)/BannerMoreComponent';
import CounterBoxComponent from './(components)/CounterBoxComponent';
import FeaturedCoursesComponent from './(components)/FeaturedCoursesComponent';
import MainBodyComponent from './(components)/MainBodyComponent';
import StudentFeedBackComponent from './(components)/StudentFeedBackComponent';
import TopCategoriesComponent from './(components)/TopCategoriesComponent';

export default function Index() {
  return (
    <>
      <MainBodyComponent />
      <TopCategoriesComponent />
      <FeaturedCoursesComponent />
      <BannerMoreComponent />
      <CounterBoxComponent />
      <BannerGrowComponent />
      <BannerEducationComponent />
      <StudentFeedBackComponent />
    </>
  );
}
