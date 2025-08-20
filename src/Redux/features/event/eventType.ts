export interface Event {
  _id: string;
  title: string;
  description: string;
  images: string[];
  status: "draft" | "published"; // enum from your API
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
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

export interface EventsResponseData {
  data: Event[];
  meta: Meta;
}

export interface EventsApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: EventsResponseData;
}
