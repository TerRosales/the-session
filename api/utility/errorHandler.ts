import { Request, Response, NextFunction } from "express";

// Simple custom error class
class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;

    // Capture the stack trace, excluding the constructor call from it
    Error.captureStackTrace(this, this.constructor);
  }
}

// Middleware to handle errors globally
const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500; // Default to 500 (Internal Server Error)
  const statusMessage = err.message || "Something went wrong!";

  // Respond with the error message
  res.status(statusCode).json({
    status: "error",
    message: statusMessage,
  });
};

export { AppError, globalErrorHandler };
