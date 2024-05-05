const { signup } = require("../backend/Controllers/authController")
const User = require("../backend/Model/userModel")

jest.mock("../backend/Model/userModel")

const req = {
    body: {
        email: "fake_mail@gmail.com",
        password: "fake pswd"
    }
}
const res = {
    status: jest.fn(x => x),
    json: jest.fn(x => x)
}

it("should register a user", async () => {
    User.findOne.mockImplementationOnce(() => ({
        id: 1,
        fullName: "faky flip",
        email: "faky_flip@gmail.com"
    }))

    
    await signup(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    // expect(signup).toHaveBeenCalledTimes(1)
})