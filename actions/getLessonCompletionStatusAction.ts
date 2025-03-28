"use server";
import { getLessonCompletionStatus } from "@/sanity/lib/lessons/getLessonCompletionStatus";
export async function getLessonCompletionStatusAction(
  lessonId: string,
  clerkId: string
) {
  try {
    return await getLessonCompletionStatus(lessonId, clerkId);
  } catch (error) {
    console.error("Error checking lesson completion status:", error);
    return false;
  }
}
