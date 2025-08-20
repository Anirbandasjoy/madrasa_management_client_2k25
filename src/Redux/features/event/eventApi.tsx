import Api from "@/Redux/api/baseApi";
import { EventsApiResponse } from "./eventType";


const EventApi = Api.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllEvent: builder.query<EventsApiResponse, any>({
      query: () => {
        return {
          url: "/events",
          method: "GET", 
        };
      },
    }),

 
  }),
  overrideExisting: false,
});

export const {
  useGetAllEventQuery

} = EventApi;
