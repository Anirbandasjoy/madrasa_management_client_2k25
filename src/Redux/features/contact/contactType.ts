export interface IContact {
  _id: string;
  name: string;
  phone?: string;
  email: string;
  message: string;
  isRead: boolean;
  isImportant: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IContactMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface ICreateContactRequest {
  name: string;
  phone?: string;
  email: string;
  message: string;
  isRead?: boolean;
  isImportant?: boolean;
}

export interface IGetContactsRequest {
  page?: number;
  limit?: number;
  search?: string;
  name?: string;
  email?: string;
  isRead?: boolean;
  isImportant?: boolean;
}

export interface IUpdateContactRequest {
  isRead?: boolean;
  isImportant?: boolean;
  id: string;
}

export interface IDeleteContactRequest {
  id: string;
}

export interface IContactListResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: IContact[];
    meta: IContactMeta;
  };
}

export interface IContactSingleResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IContact;
}

export interface IContactUpdateResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IContact;
}

export interface IContactDeleteResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: IContact;
}
