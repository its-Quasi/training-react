import { memo } from "react"

interface Props {
  label: string
  parentFn: () => void
}

export const PrimaryButton = memo(({ label, parentFn }: Props) => {
  console.log("primary children");
  return <button onClick={parentFn}>{label}</button>;
}, (prev, next) => prev.parentFn === next.parentFn);