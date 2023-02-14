import { Test, TestingModule } from '@nestjs/testing';
import { FlightbookingController } from './flightbooking.controller';

describe('FlightbookingController', () => {
  let controller: FlightbookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightbookingController],
    }).compile();

    controller = module.get<FlightbookingController>(FlightbookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
