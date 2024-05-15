import axios from "axios";
import { render, store, screen } from "./mockedStoreWrapper";
import MockAdapter from "axios-mock-adapter";
import { userProfileAction } from "../redux/actions/userAction";
import { Navbar } from "../components";

const userDataLoggedIn = {
  user: "1",
  isAuthenticated: true,
};

const userDataLoggedOut = {
  user: undefined,
};

const mockedStore = store();
const mock = new MockAdapter(axios);

const mockNetworkRequests = (uri, response) => {
  mock.onAny(uri).reply(200, response);
};

const unMockNetworkRequests = () => {
  mock.resetHistory();
};

describe("navbar if user loggedIn vs LoggedOut", () => {
  afterEach(() => {
    unMockNetworkRequests();
  });

  it("should render user icon if user is logged in", async () => {
    mockNetworkRequests(/\/me/, userDataLoggedOut);
    await mockedStore.dispatch(userProfileAction());
    console.log(axios.getUri());
    const data = mockedStore.getState().userProfile;
    console.log(data, userDataLoggedIn);
    expect(data).toEqual(userDataLoggedIn);
  });

  it("should not render user icon if user is logged out", async () => {
    mockNetworkRequests(/\/me/, userDataLoggedIn);
    await mockedStore.dispatch(userProfileAction());
    console.log(axios.getUri());
    const data = mockedStore.getState().userProfile;
    render(<Navbar />)
    expect(screen.findByTestId("icon")).not.toBeInTheDocument()
    expect(data).toStrictEqual(userDataLoggedOut);
  });
});
