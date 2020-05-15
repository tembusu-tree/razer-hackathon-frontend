import * as React from "react";

export interface SettingsItemProps {
  title: string;
  subtitle: string;
  ActionComponent: React.Component;
}

export default class SettingsItem extends React.Component<
  SettingsItemProps,
  any
> {}
