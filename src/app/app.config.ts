import { environment } from 'src/environments/environment';

export interface AppConfig {
  value: string;
}

export const API_CONFIG: AppConfig = {
  value: environment.ROOT_API_ENDPOINT,
};
