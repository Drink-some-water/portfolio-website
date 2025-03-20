// baseProject.tsx
import { JSX } from 'react';
import { Project } from './types';

export abstract class BaseProject implements Project {
  title: string;
  description: string;
  images: string[];
  slug: string;

  constructor(title: string, description: string, images: string[], slug: string) {
    this.title = title;
    this.description = description;
    this.images = images;
    this.slug = slug;
  }

  abstract render(): JSX.Element;
}
