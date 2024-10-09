import { UserDetails } from "@/types/types";

export function allFieldsAreEmpty(userDetails: UserDetails) {
  return (
    !userDetails.email &&
    !userDetails.firstName &&
    !userDetails.lastName &&
    !userDetails.address &&
    !userDetails.country &&
    !userDetails.apartment &&
    !userDetails.city &&
    !userDetails.state &&
    !userDetails.postalCode &&
    !userDetails.localStorageKey
  );
}
