const { signup } = require("../backend/Controllers/authController")
const User = require("../backend/Model/userModel")
const CustomErr = require('../backend/Utils/CustumErrorClass')

jest.mock("../backend/Model/userModel")

describe("auth contoller on signup login and logout", () => {
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
        User.findOne.mockResolvedValueOnce(undefined)
        
        User.create.mockImplementationOnce(() => ({
            fullName: "fake name",
            email: "fake_mail@gmail.com",
            password: "fake pswd"
          }))
          
        await signup(req, res, next)
        // expect(next).toHaveBeenCalledWith(new Error('password is required'))
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(expect.any(Object))
        expect(User.findOne).toHaveBeenCalledTimes(1)
        expect(User.findOne).toHaveBeenCalledWith({ email: 'fake_mail@gmail.com' })
        expect(User.create).toHaveBeenCalledTimes(1)
        expect(User.create).toHaveBeenCalledWith(req.body)
        expect(next).not.toHaveBeenCalled()
        expect.assertions(7)
    })

    // Add a test case to check if the password is hashed before saving to the database
    // test('should hash the password before saving to the database', async () => {
    //     User.create.mockImplementationOnce(() => ({
    //         id: 1,
    //         fullName: "username",
    //         email: "email@gmail.com",
    //         password: 'password'
    //     }));

    //     await signup(req, res, next)

    //     expect(User.create).toHaveBeenCalledTimes(1);
    //     expect(User.create).toHaveBeenCalledWith(expect.objectContaining({
    //         password: expect.stringMatching(/^\$2[ayb]\$.{56}$/) 
    //     }));
    // });
})