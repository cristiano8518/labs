export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Smith",
    description: "Learn the basics of React."
  },
  {
    id: 2,
    title: "TypeScript Basics",
    instructor: "Anna Brown",
    description: "Deep dive into TypeScript."
  },
  {
    id: 3,
    title: "Advanced React",
    instructor: "David Lee",
    description: "Hooks and Router."
  },
  {
    id: 4,
    title: "Node.js Backend",
    instructor: "Michael White",
    description: "Backend development."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}