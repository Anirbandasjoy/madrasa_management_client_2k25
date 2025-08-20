import Api from "@/Redux/api/baseApi";
import { NoticeApiResponse } from "./noticesType";

const NoticesApi = Api.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllNotices: builder.query<NoticeApiResponse, any>({
      query: () => {
        return {
          url: "/notice",
          method: "GET", 
          
        };
      },
    }),

 
  }),
  overrideExisting: false,
});

export const {
  useGetAllNoticesQuery

} = NoticesApi;
