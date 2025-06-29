import { CircleNotch } from "phosphor-react";
import { Spinner } from "./styles";

export function Loading() {
  return (
    <Spinner>
      <CircleNotch size={24} />
    </Spinner>
  )
}
