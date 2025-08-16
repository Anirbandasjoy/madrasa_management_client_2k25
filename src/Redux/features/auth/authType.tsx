export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    _id: string;
    name?: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    isBanned: string;
    userId: {
      _id: string;
      name: string;
      email: string;
      role: string;
      twoFactor: {
        code: null;
        expiresAt: null;
        isEnabled: boolean;
      };
    };
  };
}

export interface logOutResponse {
  success: boolean;
  message: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: {
    token: string;
  };
}

export interface IResetPasswordRequest {
  token: string;
  password: string;
}

export interface IResetPasswordResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface IUpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export interface IUpdatePasswordResponse {
  success: boolean;
  statusCode: number;
  message: string;
}
