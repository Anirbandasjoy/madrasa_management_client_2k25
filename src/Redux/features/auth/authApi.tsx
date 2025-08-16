import Api from "@/Redux/api/baseApi";
import {
  IForgotPasswordRequest,
  IForgotPasswordResponse,
  IResetPasswordRequest,
  IResetPasswordResponse,
  IUpdatePasswordRequest,
  IUpdatePasswordResponse,
  loginRequest,
  loginResponse,
  logOutResponse,
} from "./authType";

const immigrationAuthApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    handleLogin: builder.mutation<loginResponse, loginRequest>({
      query: (user) => {
        console.log(user);
        return {
          url: "/auth/login",
          method: "POST",
          body: user,
        };
      },
    }),

    handleLogOut: builder.mutation<logOutResponse, void>({
      query: () => {
        return {
          url: "/auth/logout",
          method: "POST",
        };
      },
    }),

    handleForgotPassword: builder.mutation<
      IForgotPasswordResponse,
      IForgotPasswordRequest
    >({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    handleResetPassword: builder.mutation<
      IResetPasswordResponse,
      IResetPasswordRequest
    >({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PUT",
        body: data,
      }),
    }),

    getCurrentUser: builder.query<loginResponse, void>({
      query: () => {
        return {
          url: `/auth/logged-in-user`,
          method: "GET",
        };
      },
    }),

    handleUpdatePassword: builder.mutation<
      IUpdatePasswordResponse,
      IUpdatePasswordRequest
    >({
      query: (data) => {
        return {
          url: "/auth/update-password",
          method: "PATCH",
          body: {
            oldPassword: data?.oldPassword,
            newPassword: data?.newPassword,
            confirmPassword: data?.confirmPassword,
          },
        };
      },
    }),

    handleEnable2FA: builder.mutation<any, any>({
      query: ({ password }) => {
        return {
          url: `/auth/enable-2fa`,
          method: "POST",
          body: { password },
        };
      },
    }),
    handleDisable2FA: builder.mutation<any, any>({
      query: ({ password }) => {
        return {
          url: `/auth/disable-2fa`,
          method: "POST",
          body: { password },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useHandleLoginMutation,
  useHandleLogOutMutation,
  useHandleForgotPasswordMutation,
  useHandleResetPasswordMutation,
  useGetCurrentUserQuery,
  useHandleUpdatePasswordMutation,
  useHandleEnable2FAMutation,
  useHandleDisable2FAMutation,
} = immigrationAuthApi;
