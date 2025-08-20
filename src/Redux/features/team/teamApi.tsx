import Api from "@/Redux/api/baseApi";
import { TeamApiResponse } from "./teamType";

const TeamApi = Api.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllTeam: builder.query<TeamApiResponse, any>({
      query: ({status}) => {
        return {
          url: "/team",
          method: "GET", 
          params: status ? { status } : {},
        };
      },
    }),

 
  }),
  overrideExisting: false,
});

export const {
  useGetAllTeamQuery

} = TeamApi;
