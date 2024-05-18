import axios from "axios";
import { render, store, screen } from "./mockedStoreWrapper";
import MockAdapter from "axios-mock-adapter";
import { userLogInAction, userLogoutAction } from "../redux/actions/userAction";
import { Navbar } from "../components";

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
    mockNetworkRequests(/\/login/, userDataCred);

    await mockedStore.dispatch(userLogInAction(userDataCred));

    const userLogin = mockedStore.getState().logIn;
    render(<Navbar />);

    expect(screen.queryByTestId("icon")).toBeInTheDocument();
    expect(userLogin).toEqual(userDataLoggedIn);
  });
  it("should render login button if user is logged out", async () => {
    mockNetworkRequests(/\/me/, {});

    await mockedStore.dispatch(userLogoutAction());
    //logout is errornous resulting of login to be thruthy,  to be fixed
    const user = mockedStore.getState().logOut;
    render(<Navbar />, {});
    console.log(user);
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });
});

const userDataLoggedIn = {
  userInfo: { email: "fake@email.com", password: "fakepwd" },
  isAuthenticated: true,
};

const userDataCred = {
  email: "fake@email.com",
  password: "fakepwd",
};
