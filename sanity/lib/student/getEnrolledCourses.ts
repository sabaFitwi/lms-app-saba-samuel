import { defineQuery } from "groq";
import { client } from "../client"; // Import the Sanity client
import { GetEnrolledCoursesQueryResult } from "@/sanity.types";

export async function getEnrolledCourses(clerkId: string) {
  const getEnrolledCoursesQuery =
    defineQuery(`*[_type == "student" && clerkId == $clerkId][0] {
    "enrolledCourses": *[_type == "enrollment" && student._ref == ^._id] {
      ...,
      "course": course-> {
        ...,
        "slug": slug.current,
        "category": category->{...},
        "instructor": instructor->{...}
      }
    }
  }`);

  const result = await client.fetch<GetEnrolledCoursesQueryResult>(
    getEnrolledCoursesQuery,
    { clerkId }
  );

  return result?.enrolledCourses || [];
}
