import { IProject } from './interfaces';
import RequestFailedError from '../../exceptions/RequestFailedError';

const requestOptions = {
  headers: {
    Accept: 'application/json',
  },
};

const vietnamActiveProjectsUrl = `https://api.globalgiving.org/api/public/projectservice/countries/VN/projects/active?api_key=${process.env.globalGivingApiKey}`;

const isStatusAbnormal = (res) => {
  return !res.ok;
};

const checkResponseStatus = (res) => {
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
