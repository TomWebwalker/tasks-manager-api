import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeeModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:YXYX7j0kMwWXn9dD@cluster0.t8tddmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
  ],
})
export class AppModule {}
