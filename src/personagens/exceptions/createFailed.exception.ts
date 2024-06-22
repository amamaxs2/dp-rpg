import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateFailedHttpException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
