import * as React from "react";

interface NavigationDrawerNavItem {
  key: string;
  link: string;
}

export interface NavigationDrawerProps {
  navItems: NavigationDrawerNavItem[];
  useReactRouter: boolean;
}

export default class NavigationDrawer extends React.Component<
  NavigationDrawerProps,
  any
> {}
