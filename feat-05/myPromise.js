const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

export default class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = PENDING;

  value = undefined;

  reason = undefined;

  resolve = (value) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.value = value;
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULFILLED;
    this.reason = reason;
  };

  then(successCallback, failCallback) {
    if (this.status === REJECTED) {
      successCallback(this.value);
    } else if (this.status === FULFILLED) {
      failCallback(this.reason);
    }
  }
}
