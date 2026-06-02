class ApiError extends Error {
  statusCode: number;
  message: string;
  error: unknown[];
  data: unknown;
  success: boolean;

  constructor(
    statusCode: number,
    message = "Something went wrong",
    error: unknown[] = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
