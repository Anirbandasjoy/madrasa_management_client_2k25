export interface Notice {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
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

export interface NoticeApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: Notice[];
    meta: Meta;
  };
}
