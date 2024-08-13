import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private dbInstance!: SQLiteObject;
  private dbName: string = 'cases.db';
  private dbLocation: string = 'default';

  constructor(private sqlite: SQLite, private platform: Platform, private file: File) {
    
  }

  async initializeDatabase() {
    try {
      // Attempt to resolve the file system URI and check if the database exists
      const dbFilePath = this.file.dataDirectory + this.dbName;
      try {
        await this.file.resolveLocalFilesystemUrl(dbFilePath);
        console.log('Database already exists at', dbFilePath);
      } catch (fileError) {
        console.log('Database does not exist, creating new database.');
      }

      // Create or open the database
      this.dbInstance = await this.sqlite.create({
        name: this.dbName,
        location: this.dbLocation
      });

      // Create the table if it does not exist
      await this.createTable();
    } catch (error) {
      console.error('Error initializing database', error);
    }
  }

  private async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS cases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        mrn TEXT,
        status TEXT,
        dateTime TEXT,
        examiner TEXT,
        location TEXT
      );
    `;
    try {
      await this.dbInstance.executeSql(query, []);
      console.log('Table created or already exists');
    } catch (error) {
      console.error('Error creating table', error);
    }
  }

  async saveCase(newCase: any): Promise<void> {
    const query = `INSERT INTO cases (firstName, lastName, mrn, status, dateTime, examiner, location)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      newCase.firstName || '', // Provide default values if null
      newCase.lastName || '',
      newCase.mrn || '',
      'In Progress',
      new Date().toLocaleString(),
      newCase.examiner || '',
      newCase.location || ''
    ];

    try {
      await this.dbInstance.executeSql(query, values);
      console.log('Case saved successfully');
    } catch (error) {
      console.error('Error saving case:', error, 'with values:', values);
    }
  }

  async getCases(): Promise<any[]> {
    try {
      const res = await this.dbInstance.executeSql(`SELECT * FROM cases`, []);
      const cases = [];
      for (let i = 0; i < res.rows.length; i++) {
        cases.push(res.rows.item(i));
      }
      console.log("------cases------", cases)
      return cases;
    } catch (error) {
      console.error('Error fetching cases', error);
      return [];
    }
  }
}
