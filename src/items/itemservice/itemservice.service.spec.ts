import { Test, TestingModule } from '@nestjs/testing';
import { ItemserviceService } from './itemservice.service';

describe('ItemserviceService', () => {
  let service: ItemserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemserviceService],
    }).compile();

    service = module.get<ItemserviceService>(ItemserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
