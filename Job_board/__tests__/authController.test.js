const { signup } = require("../backend/Controllers/authController")
const User = require("../backend/Model/userModel")
const CustomErr = require('../backend/Utils/CustumErrorClass')

jest.mock("../backend/Model/userModel")

describe("signup /post", () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            body: {
                fullName: "fake name",
                email: "fake_mail@gmail.com",
                password: "fake pswd"
            }
        }
        res = {
            status: jest.fn(),
            json: jest.fn()
        }
        next = jest.fn()


    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should successfully creates a user", async () => {

        User.create.mockImplementationOnce(() => ({
            id: 1,
            fullName: "username",
            email: "email@gmail.com"
        }))

        await signup(req, res, next)

        expect(res.status).toHaveBeenCalledWith(201)
        expect(User.findOne).toHaveBeenCalledTimes(1)
    })

})