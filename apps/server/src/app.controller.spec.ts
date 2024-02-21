import { Test } from "@nestjs/testing";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
  });

  describe("root", () => {
    it("should return Hello World", () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
