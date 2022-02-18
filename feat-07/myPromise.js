const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

/**
 * 处理链式调用
 */

export default class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = PENDING;

  value = undefined;

  reason = undefined;

  successCallback = [];

  failCallback = [];

  resolve = (value) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.value = value;
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value);
    }
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULFILLED;
    this.reason = reason;
    while (this.failCallback.length) {
      this.failCallback.shift()(this.reason);
    }
  };

  then(successCallback, failCallback) {
    if (this.status === REJECTED) {
      successCallback(this.value);
    } else if (this.status === FULFILLED) {
      failCallback(this.reason);
    } else {
      this.successCallback.push(successCallback);
      this.failCallback.push(failCallback);
    }
  }
}
