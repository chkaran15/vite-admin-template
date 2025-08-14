import { formatDistanceToNow } from "date-fns";

export function formatUnreadCount(unreadCount: number) {
  // If the unread count is 100 or more, display "+99"; otherwise, display the actual unread count.
  return unreadCount >= 100 ? "+99" : unreadCount;
}

export function getInitials(fullName: string) {
  if (fullName.length === 0) return "";

  // Split the name by spaces
  const names = fullName.split(" ");
  // Extract the first letter of each name and convert it to uppercase
  const initials = names.map((name) => name.charAt(0).toUpperCase()).join("");

  return initials;
}

export function formatDistance(value: string | number | Date) {
  const distance = formatDistanceToNow(value, { addSuffix: true });

  const replacements: Record<string, string> = {
    minute: "min",
    minutes: "mins",
    hour: "hr",
    hours: "hrs",
    day: "day",
    days: "days",
    month: "month",
    months: "months",
    year: "year",
    years: "years",
  };

  if (distance === "less than a minute ago") {
    return "just now";
  }

  // Replace phrases based on the mapping
  return distance
    .replace(
      /less than a minute|minute|minutes|hour|hours|day|days|month|months|year|years/g,
      (match) => replacements[match]
    )
    .replace(/\b(over|almost|about)\b/g, "");
}

export function titleCaseToCamelCase(titleCaseStr: string) {
  const camelCaseStr = titleCaseStr
    .toLowerCase() // Convert the entire string to lowercase first
    .replace(/\s+(.)/g, (_, char) => char.toUpperCase()); // Remove spaces and capitalize the following character

  return camelCaseStr;
}
