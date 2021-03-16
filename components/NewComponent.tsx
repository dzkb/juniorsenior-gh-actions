import React from "react";

type SimpleProps = {
  children: React.ReactNode;
};

export default function NewComponent({ children }: SimpleProps): JSX.Element {
  return <h1>{children}</h1>;
}
