import axios, { AxiosInstance } from 'axios';

export default class ExerciseService {
  private api: AxiosInstance;
  private apiKey: string;

  constructor(apiKey: string) {
    this.api = axios.create({
      baseURL: 'https://wger.de/api/v2/',
    });
    this.apiKey = apiKey;
  }

  public async getExercises(): Promise<any> {
    try {
      const response = await this.api.get('exercise/', {
        params: {
          language: 2, // Specify the language (English: 2)
          format: 'json',
          limit: 10, // Limit the number of exercises to retrieve
          api_key: this.apiKey, // Pass your API key
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      throw error;
    }
  }
}
