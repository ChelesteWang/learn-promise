const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

/**
 * 处理链式调用返回 promise
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
    this.status = FULFILLED;
    this.value = value;
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value);
    }
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.reason = reason;
    while (this.failCallback.length) {
      this.failCallback.shift()(this.reason);
    }
  };

  then(successCallback, failCallback) {
    const newPromise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const res = successCallback(this.value);
        resolve(res);
      } else if (this.status === REJECTED) {
        const res = failCallback(this.reason);
        reject(res);
      } else {
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    });
    return newPromise;
  }
}
