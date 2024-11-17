import React from 'react';
interface Props {
  parentFn: () => void;
}

export const PrimaryButton = React.memo(({ parentFn }: Props) => {
  console.log("primary children");
  return <button onClick={parentFn}>Increment</button>;
});