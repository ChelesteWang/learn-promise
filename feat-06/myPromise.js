const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

/**
 * 处理异步事件
 */

export default class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = PENDING;

  value = undefined;

  reason = undefined;

  successCallback = undefined;

  failCallback = undefined;

  resolve = (value) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = FULFILLED;
    this.value = value;
    this.successCallback && this.successCallback(this.value);
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.reason = reason;
    this.failCallback && this.failCallback(this.reason);
  };

  then(successCallback, failCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failCallback(this.reason);
    } else {
      this.successCallback = successCallback;
      this.failCallback = failCallback;
    }
  }
}
