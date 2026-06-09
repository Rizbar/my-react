// __tests__/functions.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  getStudents,
  setStudentScore,
  getLessonNames
} from '../src/path-to-your-functions'; // sesuaikan path

const mock = new MockAdapter(axios);

describe('Pengujian fungsi getStudents, setStudentScore, getLessonNames', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('getStudents', () => {
    const mockData = [
      { id: 1, name: 'Alice', lesson: 'Math' },
      { id: 2, name: 'Bob', lesson: 'Science' }
    ];

    test('Flow positif: berhasil fetch data dan update students', async () => {
      mock.onGet('/api/students').reply(200, mockData);
      await getStudents();
      const { students } = require('../src/path-to-your-functions');
      expect(students).toEqual(mockData);
    });

    test('Flow negatif: gagal fetch data', async () => {
      mock.onGet('/api/students').reply(500);
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      await getStudents();

      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('setStudentScore', () => {
    beforeEach(() => {
      const module = require('../src/path-to-your-functions');
      module.students = [
        { id: 1, name: 'Alice', lesson: 'Math' },
        { id: 2, name: 'Bob', lesson: 'Science' }
      ];
    });

    test('Flow positif: update skor student yang ada', () => {
      const { students } = require('../src/path-to-your-functions');
      setStudentScore(1, 85);
      expect(students.find(s => s.id === 1).score).toBe(85);
    });

    test('Flow negatif: student tidak ditemukan', () => {
      const { students } = require('../src/path-to-your-functions');
      expect(() => setStudentScore(999, 50)).not.toThrow();
    });
  });

  describe('getLessonNames', () => {
    const studentsSample = [
      { id: 1, name: 'Alice', lesson: 'Math' },
      { id: 2, name: 'Bob', lesson: 'Science' }
    ];

    test('Mengembalikan array lesson names yang benar', () => {
      const result = getLessonNames(studentsSample);
      expect(result).toEqual(['Math', 'Science']);
    });

    test('Mengembalikan array kosong jika input kosong', () => {
      expect(getLessonNames([])).toEqual([]);
    });
  });
});