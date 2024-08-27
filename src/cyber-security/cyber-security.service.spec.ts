import { Test, TestingModule } from '@nestjs/testing';
import { CyberSecurityService } from './cyber-security.service';

describe('CyberSecurityService', () => {
  let service: CyberSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyberSecurityService],
    }).compile();

    service = module.get<CyberSecurityService>(CyberSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
