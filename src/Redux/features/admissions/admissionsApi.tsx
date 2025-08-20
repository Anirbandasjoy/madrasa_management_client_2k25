import Api from "@/Redux/api/baseApi";
import { AdmissionApiResponse } from "./admissionsType";

const AdmissionsApi = Api.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllAdmissions: builder.query<AdmissionApiResponse, any>({
      query: () => {
        return {
          url: "/admission",
          method: "GET", 
          
        };
      },
    }),

 
  }),
  overrideExisting: false,
});

export const {
  useGetAllAdmissionsQuery

} = AdmissionsApi;
