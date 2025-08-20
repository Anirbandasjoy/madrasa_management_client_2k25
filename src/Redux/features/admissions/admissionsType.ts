// Single Admission type
export interface Admission {
  _id: string
  className: string
  admissionOpen: string   // ISO Date
  admissionClose: string  // ISO Date
  isAdmissionOn: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

// Meta info
export interface Meta {
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
  nextPage: number | null
  prevPage: number | null
}

// Full API response
export interface AdmissionApiResponse {
  success: boolean
  statusCode: number
  message: string
  data: {
    data: Admission[]
    meta: Meta
  }
}
