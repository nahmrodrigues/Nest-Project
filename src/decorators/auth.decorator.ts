/* 
import { applyDecorators } from '@nestjs/common';

Combinação de todos os decorators relacionados a autenticação.

Exemplo de chamada do decorator: @Auth('admin')

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
*/
