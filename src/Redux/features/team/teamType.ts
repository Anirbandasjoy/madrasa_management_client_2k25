export interface OthersInfo {
  label: string;
  value: string;
  _id: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  image: string;
  designation: string;
  description: string;
  status: string; // e.g., "Staff" | "Teachers"
  educationQualifications: string[];
  othersInfo: OthersInfo[];
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface TeamResponseData {
  data: TeamMember[];
  meta: Meta;
}

export interface TeamApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: TeamResponseData;
}
