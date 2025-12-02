const jwt = require('jsonwebtoken');
const generateToken = require('../userController.js');

// Mock the jwt module
jest.mock('jsonwebtoken');

describe('generateToken', () => {
  const mockUserId = '12345';
  const mockSecret = 'test-secret-key';
  const mockToken = 'mock.jwt.token';

  beforeEach(() => {
    // Set up environment variable
    process.env.SUPABASE_JWT_SECRET = mockSecret;

    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock console.log to avoid cluttering test output
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Restore console.log
    console.log.mockRestore();
  });

  it('should generate a JWT token with correct payload and options', () => {
    jwt.sign.mockReturnValue(mockToken);

    const result = generateToken(mockUserId);

    expect(jwt.sign).toHaveBeenCalledWith({ id: mockUserId }, mockSecret, {
      expiresIn: '30d',
    });
    expect(result).toBe(mockToken);
  });

  it('should log the payload id', () => {
    jwt.sign.mockReturnValue(mockToken);

    generateToken(mockUserId);

    expect(console.log).toHaveBeenCalledWith('Payload id: ', mockUserId);
  });

  it('should return the signed token', () => {
    const expectedToken = 'signed.jwt.token';
    jwt.sign.mockReturnValue(expectedToken);

    const result = generateToken(mockUserId);

    expect(result).toBe(expectedToken);
  });

  it('should handle different user IDs', () => {
    const differentUserId = 'abc-xyz-789';
    jwt.sign.mockReturnValue(mockToken);

    generateToken(differentUserId);

    expect(jwt.sign).toHaveBeenCalledWith({ id: differentUserId }, mockSecret, {
      expiresIn: '30d',
    });
  });

  it('should use SUPABASE_JWT_SECRET from environment', () => {
    const customSecret = 'custom-secret';
    process.env.SUPABASE_JWT_SECRET = customSecret;
    jwt.sign.mockReturnValue(mockToken);

    generateToken(mockUserId);

    expect(jwt.sign).toHaveBeenCalledWith(
      expect.any(Object),
      customSecret,
      expect.any(Object),
    );
  });
});
