// src/types/index.d.ts

export interface Job {
  id: string;
  company: string;
  location: string;
  title: string;
  tags: string[];
  categories: string[];
  isNew?: boolean;
  isHot?: boolean;
  isRemote?: boolean;
  description?: string;
  minimumQualification?: string[];
  preferredQualification?: string[];
  note?: string;
}
