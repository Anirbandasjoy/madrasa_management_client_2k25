import Api from "@/Redux/api/baseApi";
import { TeamApiResponse } from "./teamType";

const TeamApi = Api.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllTeam: builder.query<TeamApiResponse, any>({
      query: () => {
        return {
          url: "/teams/",
          method: "GET",
        };
      },
    }),

 
  }),
  overrideExisting: false,
});

export const {
  useGetAllTeamQuery

} = TeamApi;
