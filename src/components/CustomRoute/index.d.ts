import * as React from "react";

export interface CustomRouteProps {
  private: boolean;
  path: string;
  exact: boolean;
  children: React.Component;
}

export default class CustomRoute extends React.Component<
  CustomRouteProps,
  any
> {}
