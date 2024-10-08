export class CustomError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number, details: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}
