import { store } from "./mockedStoreWrapper";
import { describe, it, expect } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  createJobAction,
  deleteJobAction,
  jobAction,
  jobsAction,
} from "../redux/actions/jobAction";

// new instance of axios creation
const mock = new MockAdapter(axios);
const mockedStore = store();

// mock axios request on Get
const mockNetworkRequests = (uri, response) => {
  mock.onAny(uri).reply(200, response);
};

const unMockNetworkRequests = () => {
  mock.resetHistory();
};

describe("job action", () => {
  afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a job with the jobAction", async () => {
    mockNetworkRequests(/\/job\//, jobData);
    await mockedStore.dispatch(jobAction(jobData.job.id));
    const { job } = mockedStore.getState().getJob;
    expect(job).toEqual(jobData.job);
  });

  it("should fetch jobs with the jobsAction successfuly", async () => {
    mockNetworkRequests(/\/jobs\//, jobsData);
    let [keyword, pageNumber] = ["", 1];
    await mockedStore.dispatch(jobsAction(keyword, pageNumber));
    const { jobs } = mockedStore.getState().getJobs;
    expect(jobs).toEqual(jobsData.jobs);
  });

  it("should create a job with createJobAction successfuly", async () => {
    mockNetworkRequests(/\/create/, createdJob);
    await mockedStore.dispatch(createJobAction(createdJob));
    const { job } = mockedStore.getState().createJob;
    expect(job).toEqual(createdJob);
  });

  it("should delete a job with deleteJobAction successfuly", async () => {
    mockNetworkRequests(/\/delete\//, deletedJob);
    await mockedStore.dispatch(deleteJobAction(jobData.job.id));
    const  {message} = mockedStore.getState().deleteJob;
    expect(message).toEqual("job deleted");
  });
});


// hard coded data
const jobsData = {
  success: true,
  page: 1,
  pages: 10,
  count: 5,
  jobs: [{ name: "software developer" }, { name: "QA Assurance" }],
  error: undefined,
};

const jobData = {
  success: true,
  job: {
    id: 1,
    name: "software engineer",
  },
  error: undefined,
};

const deletedJob = {
  success: true,
  message: "job deleted"
};

const createdJob = {
  job: { success: true, id: 1, name: "software engineer" },
};