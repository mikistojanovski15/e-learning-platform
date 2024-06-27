import FeaturedCoursesComponent from './(components)/FeaturedCoursesComponent';
import MainBodyComponent from './(components)/MainBodyComponent';
import TopCategoriesComponent from './(components)/TopCategoriesComponent';

export default function Index() {
  return (
    <>
      <MainBodyComponent />
      <TopCategoriesComponent />
      <FeaturedCoursesComponent />
    </>
  );
}
