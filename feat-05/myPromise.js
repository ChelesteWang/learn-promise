const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

/**
 * 处理状态转换
 */

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
    this.status = FULFILLED;
    this.value = value;
  };

  reject = (reason) => {
    if (this.status !== PENDING) {
      return;
    }
    this.status = REJECTED;
    this.reason = reason;
  };

  then(successCallback, failCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failCallback(this.reason);
    }
  }
}
