import { IProject } from './interfaces';
import RequestFailedError from '../../exceptions/RequestFailedError';

const requestOptions = {
  headers: {
    Accept: 'application/json',
  },
};

const vietnamActiveProjectsUrl = `https://api.globalgiving.org/api/public/projectservice/countries/VN/projects/active?api_key=${process.env.NEXT_PUBLIC_GLOBAL_GIVING_API_KEY}`;

const isStatusAbnormal = (res: Response) => {
  return !res.ok;
};

const checkResponseStatus = (res: Response) => {
  if (isStatusAbnormal(res)) {
    throw new RequestFailedError(`Request failed: ${res.statusText}`);
  }
  return res;
};

const projectService = {
  getAllActiveProjects: function (): Promise<IProject[]> {
    return fetch(vietnamActiveProjectsUrl, requestOptions)
      .then((res) => checkResponseStatus(res))
      .then((res) => res.json())
      .then((data) => data.projects.project)
      .catch((error) => {
        throw new RequestFailedError(error.message);
      });
  },
};

export default projectService;
