import { Test, TestingModule } from '@nestjs/testing';
import { FlightbookingService } from './flightbooking.service';

describe('FlightbookingService', () => {
  let service: FlightbookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightbookingService],
    }).compile();

    service = module.get<FlightbookingService>(FlightbookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
