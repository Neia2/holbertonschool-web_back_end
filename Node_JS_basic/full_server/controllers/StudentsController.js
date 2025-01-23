import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const response = ['This is the list of our students'];

      for (const [field, names] of Object.entries(students).sort()) {
        response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
