import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";

export function EmailInput() {
  return (
    <>
      <Input
        label="Email"
        required
        requiredMsg="Enter your email"
        className="w-full py-3"
        placeholder="Email"
      />
      <Checkbox label="Email me with offers and news" />
    </>
  );
}
