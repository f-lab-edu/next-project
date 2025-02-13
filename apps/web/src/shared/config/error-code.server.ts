export const tmdbErrorCode = {
  SUCCESS: { code: 200, message: "Success" },
  FAILED: { code: 500, message: "FAILED" },
  INVALID_SERVICE: { code: 501, message: "Invalid service: this service does not exist." },
  AUTHENTICATION_FAILED: {
    code: 401,
    message: "Authentication failed: You do not have permissions to access the service.",
  },
  INVALID_FORMAT: { code: 405, message: "This service doesn't exist in that format" },
  INVALID_PARAMETERS: { code: 422, message: "Invalid parameters: Your request parameters are incorrect." },
  INVALID_ID: { code: 404, message: "The pre-requisite id is invalid or not found." },
  DUPLICATE_ENTRY: { code: 403, message: "The data you tried to submit already exists." },
  INTERNAL_ERROR: { code: 500, message: "Something went wrong." },
  UPDATE_SUCCESS: { code: 201, message: "The item/record was updated successfully." },
  DELETE_SUCCESS: { code: 200, message: "The item/record was deleted successfully." },
  SESSION_DENIED: { code: 401, message: "Session denied." },
  VALIDATION_FAILED: { code: 400, message: "Validation failed." },
  INVALID_HEADER: { code: 406, message: "Invalid accept header." },
  INVALID_METHOD: { code: 405, message: "This request method is not supported for this resource." },
} as const;
