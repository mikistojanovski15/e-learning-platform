// Define the types for each section of the mock data
export type CourseCategory = {
  name: string;
  count: number;
};

export type Instructor = {
  name: string;
  count: number;
};

export type Price = {
  name: string;
  count: number;
};

export type Review = {
  stars: number;
  count: number;
};

export type Level = {
  name: string;
  count: number;
};

// Define the type for the entire mock data object
export type MockData = {
  courseCategories: CourseCategory[];
  instructors: Instructor[];
  price: Price[];
  review: Review[];
  level: Level[];
};

// Create the mock data object
export const categoryTagMockData: MockData = {
  courseCategories: [
    { name: 'Commercial', count: 15 },
    { name: 'Office', count: 15 },
    { name: 'Shop', count: 15 },
    { name: 'Educate', count: 15 },
    { name: 'Academy', count: 15 },
    { name: 'Single family home', count: 15 },
    { name: 'Studio', count: 15 },
    { name: 'University', count: 15 },
  ],
  instructors: [
    { name: 'Kenny White', count: 15 },
    { name: 'John Doe', count: 15 },
  ],
  price: [
    { name: 'All', count: 15 },
    { name: 'Free', count: 15 },
    { name: 'Paid', count: 15 },
  ],
  review: [
    { stars: 5, count: 1025 },
    { stars: 4, count: 1025 },
    { stars: 3, count: 1025 },
    { stars: 2, count: 1025 },
    { stars: 1, count: 1025 },
  ],
  level: [
    { name: 'All levels', count: 15 },
    { name: 'Beginner', count: 15 },
    { name: 'Intermediate', count: 15 },
    { name: 'Expert', count: 15 },
  ],
};
