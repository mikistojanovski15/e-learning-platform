import { CourseCategory } from "../(mock-data)/category";

interface CategoryInterface {
    data: CourseCategory[]
    title: string;
}

const CategoryCheckBoxComponent = ({data, title}:CategoryInterface) => {
  return (
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>

      {data.map((course: CourseCategory , i) => (
        <div key={i}>
          <input type="checkbox" />
          <span>
            {course.name}
            {course.count}
          </span>
        </div>
      ))}
    </div>
  );
};
 export default CategoryCheckBoxComponent