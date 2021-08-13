import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export async function getMongoConfig(configService: ConfigService): Promise<TypegooseModuleOptions> {
  return ({
    uri: getMongoConnectionString(configService),
    ...getMongoOptions
  });
}

function getMongoConnectionString(configService: ConfigService): string {
  return ([
    'mongodb://',
    configService.get('MONGO_LOGIN'),
    ':',
    configService.get('MONGO_PASSWORD'),
    '@',
    configService.get('MONGO_HOST'),
    ':',
    configService.get('MONGO_PORT'),
    '/',
    configService.get('MONGO_AUTH_DATABASE')
  ].join(''));
}

function getMongoOptions(): object {
  return ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
}
