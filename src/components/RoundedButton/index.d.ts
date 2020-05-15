import * as React from "react";

interface RoundedButtonProps {
  text: string;
  onClick(): void;
  color: "primary" | "inherit" | "secondary" | "default";
  padded: boolean;
}

export default class RoundedButton extends React.Component<
  RoundedButtonProps,
  any
> {}
