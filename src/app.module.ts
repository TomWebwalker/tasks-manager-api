import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeeModule,
    MongooseModule.forRoot(
      process.env.DB_CONNECTION || 'mongodb://localhost/nest'
    ),
  ],
})
export class AppModule {}
