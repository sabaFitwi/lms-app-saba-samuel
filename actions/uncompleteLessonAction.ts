"use server";
import { completeLessonById } from "@/sanity/lib/lessons/completeLessonById";

export async function uncompleteLessonAction(
  lessonId: string,
  clerkId: string
) {
  try {
    await completeLessonById({
      lessonId,
      clerkId,
    });
    return { susses: true };
  } catch (error) {
    console.error("Error completing lesson:", error);
    throw error;
  }
}
