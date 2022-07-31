export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  ObjectNotFound = 'ObjectNotFound',
}

type ErrorResponseObject = {
  status: number;
  message: string;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    status: 400,
    message: 'Id must have 24 hexadecimal characters',
  },
  ObjectNotFound: {
    status: 404,
    message: 'Object not found',
  },
};
