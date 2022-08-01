import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorTypes } from '../errors/catalogs';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const errorTypesMessage = err.message as keyof typeof ErrorTypes;

  const knowError = errorCatalog[errorTypesMessage];
  
  if (knowError) {
    const { status, message } = knowError;
    return res.status(status).json({ error: message });
  }
  console.log(err);

  return res.status(500).json({ message: 'Internal Error' });
};

export default errorHandler;
