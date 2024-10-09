import { UserDetails } from "@/types/types";
import { checkIfEmailIsValid } from "./checkIfEmailIsValid";

export function allFieldsValid(userDetails: UserDetails) {
  if (
    !checkIfEmailIsValid(userDetails.email) ||
    !userDetails.address ||
    !userDetails.city ||
    !userDetails.country ||
    !userDetails.lastName ||
    !userDetails.postalCode ||
    !userDetails.state
  ) {
    return false;
  }

  return true;
}
