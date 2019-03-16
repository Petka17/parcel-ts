import * as _ from "jsonous";
import { makeRequest } from "./utils";

/**
 * Request code
 */
export const codeRequestUrl = "/api/login/request_code";

export const createCodeRequestBody = (phone: string): { phone: string } => ({
  phone
});

export const codeRequestDecoder = _.field("external_id", _.string);

export const codeRequest = (phone: string): Promise<string> =>
  makeRequest(
    codeRequestUrl,
    "post",
    createCodeRequestBody(phone),
    codeRequestDecoder
  );

/**
 * Login with code
 */
export const loginWithCodeUrl = "/api/login/with_code";

export const createLoginWithCodeBody = (
  phone: string,
  code: string
): { phone: string; code: string; profile_type: "employer" } => ({
  phone,
  code,
  profile_type: "employer"
});

export const loginWithCode = (phone: string, code: string): Promise<string> =>
  makeRequest(
    loginWithCodeUrl,
    "post",
    createLoginWithCodeBody(phone, code),
    _.field("auth_token", _.string)
  );

/**
 * Get User Status
 */

export const getCandidateStatus = "/api/employer/status/";

interface EmployerStatus {
  companyGroupId: number;
  companyGroupName: string;
  companyGroupRole: string;
  employerId: number;
}

export const employerStatusDecoder = _.succeed({})
  .assign("companyGroupId", _.field("company_group_id", _.number))
  .assign("companyGroupName", _.field("company_group_name", _.string))
  .assign("companyGroupRole", _.field("company_group_role", _.string))
  .assign("employerId", _.field("id", _.number));

export const getUserForToken = (): Promise<EmployerStatus> =>
  makeRequest(getCandidateStatus, "get", null, employerStatusDecoder);
