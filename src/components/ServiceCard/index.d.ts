import * as React from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: any;
}

export default class ServiceCard extends React.Component<
  ServiceCardProps,
  any
> {}
