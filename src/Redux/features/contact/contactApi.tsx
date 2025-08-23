import Api from "@/Redux/api/baseApi";
import {
  IContactDeleteResponse,
  IContactListResponse,
  IContactUpdateResponse,
  ICreateContactRequest,
  IGetContactsRequest,
  IUpdateContactRequest,
  IContactSingleResponse,
} from "./contactType";

const ContactApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<IContactSingleResponse, ICreateContactRequest>({
      query: (payload) => ({
        url: "/contact/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Contact"],
    }),

    getContacts: builder.query<IContactListResponse, IGetContactsRequest>({
      query: ({search="",page=1,limit=10,isImportant,isRead}) => (
        console.log({isImportant,isRead},"params"),
        {
        url: "/contact",
        method: "GET",
        params:{
          search,
          page,
          limit,
          isRead,
          isImportant
        }, 
      }),
      providesTags: ["Contact"],
    }),


    updateContact: builder.mutation<IContactUpdateResponse, IUpdateContactRequest>({
      query: (payload) => (
        {
        url: `/contact/${payload?.id}`,
        method: "PUT",
        body: {
          isRead: payload?.isRead,
          isImportant: payload?.isImportant,
        },
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation<IContactDeleteResponse, { id: string }>({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = ContactApi;
