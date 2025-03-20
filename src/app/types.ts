import { JSX } from "react";

// types.ts
export interface Project {
    title: string;
    description: string;
    images: string[];
    slug: string;
    render: () => JSX.Element;
  }
  