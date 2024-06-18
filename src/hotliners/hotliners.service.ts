import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateHotlinerDto } from './dto/create-hotliner.dto';
import { UpdateHotlinerDto } from './dto/update-hotliner.dto';

@Injectable()
export class HotlinersService {
  private readonly filePath = path.join(
    process.cwd(),
    'src/hotliners/entities/MOCK_DATA.json',
  );

  private readJsonFile(): any {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileContent);
  }

  private writeJsonFile(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  getAllData(): any {
    console.log('__dirname', process.cwd());
    return this.readJsonFile();
  }

  getDataById(id: string): any {
    const data = this.readJsonFile();
    return data.find((item) => item.id === id);
  }

  addData(newData: CreateHotlinerDto): void {
    const data = this.readJsonFile();
    data.push(newData);
    this.writeJsonFile(data);
  }

  updateData(id: string, updatedData: UpdateHotlinerDto): void {
    const data = this.readJsonFile();
    const dataIndex = data.findIndex((item) => item.id === id);
    if (dataIndex > -1) {
      data[dataIndex] = updatedData;
      this.writeJsonFile(data);
    }
  }

  deleteData(id: string): void {
    const data = this.readJsonFile();
    const filteredData = data.filter((item) => item.id !== id);
    this.writeJsonFile(filteredData);
  }
}
