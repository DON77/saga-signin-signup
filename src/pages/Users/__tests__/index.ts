const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });

describe('Both negative and positive test of "Log in" and "Sign up" forms', () => {
  // eslint-disable-next-line func-names
  it('should test "Log in" form in English', function (done) {
    // your actual testing urls will likely be `http://localhost:port/path`
    this.timeout(30000);
    nightmare
      .goto('http://localhost:3000/sign-in')
      .wait('input[class^=email]')
      .type('input[class^=email]', 'shvdskjfb5152#$%^&')
      .wait(2000)
      .type('input[class^=email]', '')
      .wait(2000)
      .type('input[class^=email]', 'user@example.com')
      .wait(2000)
      .type('input[class^=password]', 'user')
      .wait(2000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'userpass123')
      .wait(3000)
      .then(done)
      .catch();
  });
  // eslint-disable-next-line func-names
  it('should test "Log in" form in Russian', function (done) {
    // your actual testing urls will likely be `http://localhost:port/path`
    this.timeout(30000);
    nightmare
      .wait('button[class^=ru]')
      .click('button[class^=ru]')
      .wait('input[class^=email]')
      .type('input[class^=email]', '')
      .wait(1000)
      .type('input[class^=email]', 'shvdskjfb5152#$%^&')
      .wait(2000)
      .type('input[class^=email]', '')
      .wait(2000)
      .type('input[class^=email]', 'user@example.com')
      .wait(1000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'user')
      .wait(2000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'userpass123')
      .wait(3000)
      .then(done)
      .catch();
  });
  // eslint-disable-next-line func-names
  it('should test "Sign up" form in Russian', function (done) {
    // your actual testing urls will likely be `http://localhost:port/path`
    this.timeout(40000);
    nightmare
      .wait('button[class^=register]')
      .click('button[class^=register]')
      .wait('input[class^=email]')
      .type('input[class^=email]', 'shvdskjfb5152#$%^&')
      .wait(2000)
      .type('input[class^=email]', '')
      .wait(2000)
      .type('input[class^=email]', 'user@example.com')
      .wait(2000)
      .type('input[class^=password]', 'user')
      .wait(2000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'userpass123')
      .wait(2000)
      .type('input[class^=confirmPassword]', 'user')
      .wait(2000)
      .type('input[class^=confirmPassword]', '')
      .wait(2000)
      .type('input[class^=confirmPassword]', 'userpass123')
      .wait(2000)
      .type('input[class^=name]', 'U')
      .wait(2000)
      .type('input[class^=name]', '')
      .wait(2000)
      .type('input[class^=name]', 'User Name')
      .then(done)
      .catch();
  });
  // eslint-disable-next-line func-names
  it('should test "Sign up" form in English', function (done) {
    // your actual testing urls will likely be `http://localhost:port/path`
    this.timeout(40000);
    nightmare
      .wait('button[class^=en]')
      .click('button[class^=en]')
      .type('input[class^=email]', '')
      .wait(2000)
      .type('input[class^=email]', 'shvdskjfb5152#$%^&')
      .wait(2000)
      .type('input[class^=email]', '')
      .wait(2000)
      .type('input[class^=email]', 'user@example.com')
      .wait(2000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'user')
      .wait(2000)
      .type('input[class^=password]', '')
      .wait(2000)
      .type('input[class^=password]', 'userpass123')
      .wait(2000)
      .type('input[class^=confirmPassword]', '')
      .wait(2000)
      .type('input[class^=confirmPassword]', 'user')
      .wait(2000)
      .type('input[class^=confirmPassword]', '')
      .wait(2000)
      .type('input[class^=confirmPassword]', 'userpass123')
      .wait(2000)
      .type('input[class^=name]', '')
      .wait(2000)
      .type('input[class^=name]', 'U')
      .wait(3000)
      .type('input[class^=name]', '')
      .wait(2000)
      .type('input[class^=name]', 'User Name')
      .end()
      .then(done)
      .catch();
  });
});
