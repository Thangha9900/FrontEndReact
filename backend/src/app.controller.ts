import { Controller, Get } from '@nestjs/common';

interface ClassData {
  id: number;
  name: string;
  active: boolean;
}

@Controller()
export class AppController {
  @Get('data')
  getData(): ClassData[] {
    return [
      { id: 1, name: 'Lop Web N04-Sunday 11 Oct 2026', active: true },
      { id: 2, name: 'Ronaldo', active: true },
      { id: 3, name: 'Lionel Messi', active: false },
      { id: 4, name: 'Kylian Mbappé', active: true },
      { id: 5, name: 'Erling Haaland', active: false },
    ];
  }
}
