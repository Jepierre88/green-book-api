import { Test, TestingModule } from '@nestjs/testing';
import { CyberSecurityController } from './cyber-security.controller';

describe('CyberSecurityController', () => {
  let controller: CyberSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CyberSecurityController],
    }).compile();

    controller = module.get<CyberSecurityController>(CyberSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
