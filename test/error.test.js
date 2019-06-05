const errorMiddlware = require('../lib/middleware/error');

describe('error middleware', () => {
  it('sets the status to 500 and send the error', () => {
    const error = 'nah';
    const res = {};
    res.status = jest.fn(() => res);
    res.send = jest.fn(() => res);

    errorMiddlware(error, {}, res, () => { });

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      error
    });
  });

  xit('sets the status of error status and sends the error message', () => {
    const error = new Error('not found');
    error.status = 404;
    const res = {};
    res.status = jest.fn(() => { });

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      error: error.message
    });
  });


})
;
