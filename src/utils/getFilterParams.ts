import { FilterType } from "@/types/types";

export function getFilterParams(filter: FilterType) {
  switch (filter) {
    case "A-Z": {
      return { sortBy: "title", order: "asc" };
    }
    case "Z-A": {
      return { sortBy: "title", order: "desc" };
    }

    case "Price: Highest to Lowest": {
      return { sortBy: "price", order: "desc" };
    }

    case "Price: Lowest to Highest": {
      return { sortBy: "price", order: "asc" };
    }

    default:
      return { sortBy: "", order: "" };
  }
}
